import { Brain, ShieldCheck, HandshakeIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Brain,
    title: "Inteligência Artificial para Todos",
    description:
      "Nosso consultor com Inteligência Artificial ajuda qualquer pessoa, mesmo leiga, a encontrar o carro ideal para suas necessidades de forma simples e informada.",
  },
  {
    icon: ShieldCheck,
    title: "Transparência Radical",
    description:
      "Somos a primeira plataforma onde o Laudo Cautelar validado é a base de tudo. Cada carro é um livro aberto, garantindo que você saiba exatamente o que está comprando.",
  },
  {
    icon: HandshakeIcon,
    title: "Ecossistema de Confiança",
    description:
      "Construímos um legado de confiança, com parceiros rigorosamente selecionados e processos que protegem seu investimento, seus sonhos e, acima de tudo, você.",
  },
];

const Features = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Chega de ansiedade. <span className="bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent">Nós vendemos tranquilidade.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 animate-slide-up border-2 border-border/50"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-hero-from to-hero-to">
                  <Icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
