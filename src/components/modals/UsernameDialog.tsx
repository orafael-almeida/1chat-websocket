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

type UsernameDialogProps = {
  setUsername: (username: string) => void;
};

export function UsernameDialog({ setUsername }: UsernameDialogProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [modalUsername, setModalUsername] = useState<string>("");

  const handleSubmit = () => {
    setUsername(modalUsername);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="gap-2" onClick={() => setOpen(true)}>
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
