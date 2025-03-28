"use client";

import ChatBox from "@/components/ChatBox";
import { UsernameDialog } from "@/components/modals/UsernameDialog";
import { useState } from "react";
import { Socket } from "socket.io-client";

export default function Home() {
  const [chatVisibility, setChatVisibility] = useState<boolean>(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  return (
    <div>
      {chatVisibility ? (
        <ChatBox socket={socket} />
      ) : (
        <section className="space-y-8 md:py-32 mt-24">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Converse com seus amigos,
                <br />
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                  em tempo real.
                </span>
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Conecte-se instantaneamente com seus amigos usando nosso sistema
                de chat em tempo real baseado em WebSockets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <UsernameDialog
                  setSocket={setSocket}
                  setChatVisibility={setChatVisibility}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
