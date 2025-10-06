import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes("@")) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulação de envio (aqui você integraria com seu backend)
    setTimeout(() => {
      toast({
        title: "Cadastro realizado! 🎉",
        description: "Você receberá em breve mais informações sobre o lançamento.",
      });
      setName("");
      setEmail("");
      setIsLoading(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4 animate-slide-up">
      <div className="space-y-3">
        <Input
          type="text"
          placeholder="Seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="h-14 text-lg border-2 focus:border-primary transition-colors"
          disabled={isLoading}
        />
        <Input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-14 text-lg border-2 focus:border-primary transition-colors"
          disabled={isLoading}
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={isLoading}
        className="w-full h-14 text-lg font-bold bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Aguarde...
          </>
        ) : (
          "QUERO ANUNCIAR DE GRAÇA"
        )}
      </Button>
      <p className="text-xs text-center text-muted-foreground">
        Ao se cadastrar, você concorda em receber comunicações sobre o lançamento.
      </p>
    </form>
  );
};

export default LeadForm;
