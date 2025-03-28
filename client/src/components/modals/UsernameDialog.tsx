"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle, MessageSquare } from "lucide-react";
import { useState } from "react";
import io, { Socket } from "socket.io-client";

type UsernameDialogProps = {
  setChatVisibility: (status: boolean) => void;
  setSocket: (socket: Socket) => void;
};

export function UsernameDialog({
  setChatVisibility,
  setSocket,
}: UsernameDialogProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [modalUsername, setModalUsername] = useState<string>("");
  const API_URL = `${process.env.NEXT_PUBLIC_API_URL}:${Number(
    process.env.NEXT_PUBLIC_API_PORT
  )}`;

  const handleUsername = async () => {
    const usernameExists = localStorage.getItem("username");
    if (usernameExists) {
      const socket = await io(API_URL);
      socket.emit("set_username", usernameExists);
      setSocket(socket);
      setChatVisibility(true);
    } else {
      setOpen(true);
    }
  };

  const handleSubmit = async () => {
    if (!modalUsername.trim()) return;

    try {
      const socket = await io(API_URL);
      socket.emit("set_username", modalUsername);
      setSocket(socket);
      setChatVisibility(true);
      localStorage.setItem("username", modalUsername);
      setOpen(false);
    } catch (error) {
      console.error("Erro ao conectar ao WebSocket:", error);
      alert("Falha ao conectar ao chat. Tente novamente.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2" onClick={handleUsername}>
          <MessageSquare className="h-5 w-5" />
          Começar agora
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] fixed">
        <DialogHeader>
          <DialogTitle>Nome de usuário</DialogTitle>
          <DialogDescription>
            Escolha um nome de usuário para acessar o chat.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col items-center gap-2">
            <Label htmlFor="username" className="text-right self-start">
              Usuário
            </Label>
            <Input
              id="username"
              className="col-span-3"
              value={modalUsername}
              onChange={(e) => setModalUsername(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
            />
          </div>
        </div>
        <DialogFooter className="w-full flex justify-center">
          <Button type="button" onClick={handleSubmit}>
            <MessageCircle />
            Entrar no chat
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
