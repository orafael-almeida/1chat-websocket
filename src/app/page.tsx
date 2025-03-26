import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <section className="py-24 space-y-8 md:py-32">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Converse com seus amigos,
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
            em tempo real.
          </span>
        </h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Conecte-se instantaneamente com seus amigos usando nosso sistema de
          chat em tempo real baseado em WebSockets.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button size="lg" className="gap-2">
            <MessageSquare className="h-5 w-5" />
            Começar agora
          </Button>
        </div>
      </div>
    </section>
  );
}
