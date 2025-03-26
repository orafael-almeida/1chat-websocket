"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { AtSign, Hash, MessageCircle, Send, Users } from "lucide-react";
import { useState } from "react";

const ChatBox = () => {
  const [messages, setMessages] = useState<string[]>(["Mensagem de exemplo"]);
  return (
    <div className="w-full max-w-7xl mx-auto h-[80vh] flex gap-3 p-3 mt-32">
      {/* Users Online */}
      <div className="w-[25%]">
        <Card className="border-2 border-muted">
          <CardContent className="p-0">
            <div className="p-4 border-b">
              <h3 className="font-semibold text-lg">Usuários Conectados</h3>
            </div>
            <ScrollArea>
              <div className="p-2 space-y-2">
                <Button className="w-full justify-start gap-2">
                  <AtSign className="h-4 w-4" />
                  Jorge
                </Button>
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
                <span>2 online</span>
              </Badge>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 flex flex-col">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.length > 0 ? (
                    messages.map((msg, index) => (
                      <div key={index} className="flex justify-start my-2">
                        <div className="p-3 max-w-[75%] rounded-lg bg-primary text-primary-foreground">
                          <p className="text-sm">{msg}</p>
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
                </div>
              </ScrollArea>
              <Separator />
              {/* Chat Input */}
              <form className="p-4 flex space-x-2">
                <Input
                  placeholder="Digite sua mensagem..."
                  className="flex-1"
                />
                <Button type="submit" size="icon">
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
