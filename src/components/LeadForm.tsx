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

    try {
      // Envio via Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "4681713c-a8c8-4b5e-8ca9-d23b9fef0a11",
          name: name.trim(),
          email: email.trim(),
          subject: "Novo Lead - Carro Confiável",
          from_name: "Carro Confiável Landing Page",
          replyto: email.trim(),
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Cadastro realizado! 🎉",
          description: "Você receberá em breve mais informações sobre o lançamento.",
        });
        setName("");
        setEmail("");
      } else {
        throw new Error(data.message || "Erro ao enviar dados");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro no cadastro",
        description: "Ocorreu um erro ao processar seu cadastro. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
