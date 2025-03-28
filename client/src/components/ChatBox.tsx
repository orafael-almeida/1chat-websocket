"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AtSign, Hash, MessageCircle, Send, User, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { Avatar, AvatarFallback } from "./ui/avatar";

type ChatBoxProps = {
  socket: Socket | null;
};

interface Message {
  authorId: string;
  author: string;
  text: string;
}

interface ConnectedUsers {
  authorId: string;
  author: string;
}

const ChatBox = ({ socket }: ChatBoxProps) => {
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [connectedUsers, setConnectedUsers] = useState<ConnectedUsers[]>([]);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const messageRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!socket) return;

    const handleNewMessage = (data: Message) => {
      setMessageList((current) => [...current, data]);
    };

    const handleUsersList = (users: ConnectedUsers[]) => {
      setConnectedUsers(users);
    };

    socket.on("received_message", handleNewMessage);
    socket.on("users_list", handleUsersList);

    return () => {
      socket.off("received_message", handleNewMessage);
      socket.off("users_list", handleUsersList);
    };
  }, [socket]);

  useEffect(() => {
    scrollDown();
  }, [messageList]);

  useEffect(() => {
    scrollDown();
  }, [messageList]);

  const handleSubmit = () => {
    const message = messageRef.current?.value;
    if (!message?.trim()) return;

    socket?.emit("message", message);
    clearInput();
    focusInput();
  };

  const clearInput = () => {
    if (messageRef.current) {
      messageRef.current.value = "";
    }
  };

  const focusInput = () => {
    messageRef.current?.focus();
  };

  const getEnterKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSubmit();
  };

  const scrollDown = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-5xl mx-auto h-[80vh] flex gap-3 p-3 mt-32">
      {/* Users Online */}
      <div className="w-[25%]">
        <Card className="border-2 border-muted">
          <CardContent className="p-0">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-lg">Usuários Conectados</h3>
            </div>
            <ScrollArea>
              <div className="p-2 space-y-2">
                {connectedUsers.map((user) => (
                  <Button
                    key={user.authorId}
                    className="w-full justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <AtSign className="h-4 w-4" />
                      {user.author}
                    </div>
                    {socket?.id === user.authorId && (
                      <User className="self-end" />
                    )}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>

      {/* Chat Area */}
      <div className="flex-1 h-full">
        <Card className="border-2 border-muted h-full flex flex-col">
          <CardContent className="p-0 flex flex-col flex-1">
            {/* Chat Header */}
            <div className="flex items-center justify-between border-b px-4 py-3">
              <div className="flex items-center gap-2">
                <Hash className="h-5 w-5 text-muted-foreground" />
                <h3 className="font-semibold">Sala de chat</h3>
              </div>
              <Badge variant="outline" className="gap-1">
                <Users className="h-3 w-3" />
                <span>{connectedUsers.length} online</span>
              </Badge>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 flex flex-col">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messageList.length > 0 ? (
                    messageList.map((message, index) => (
                      <div
                        key={index}
                        className={`flex ${
                          message?.authorId === socket?.id
                            ? "justify-end"
                            : "justify-start"
                        } my-2`}
                      >
                        {message?.authorId !== socket?.id && (
                          <Avatar className="mr-2">
                            <AvatarFallback>
                              {message?.author?.slice(0, 2) || "U"}
                            </AvatarFallback>
                          </Avatar>
                        )}
                        <div
                          className={`p-3 max-w-[75%] rounded-lg ${
                            message?.authorId === socket?.id
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-foreground"
                          }`}
                        >
                          {message?.authorId !== socket?.id && (
                            <p className="text-xs font-medium mb-1">
                              {message?.author || "User"}
                            </p>
                          )}
                          <p className="text-sm">{message?.text}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center text-center p-6">
                      <MessageCircle className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-xl font-bold mb-2">
                        Sem mensagens por enquanto.
                      </h3>
                    </div>
                  )}
                  <div ref={bottomRef} />
                </div>
              </ScrollArea>
              <Separator />
              {/* Chat Input */}
              <form className="p-4 flex space-x-2">
                <Input
                  ref={messageRef}
                  placeholder="Digite sua mensagem..."
                  className="flex-1"
                  onKeyDown={(e) => getEnterKey(e)}
                />
                <Button
                  type="submit"
                  size="icon"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ChatBox;
