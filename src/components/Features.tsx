import { ShieldCheck, HandshakeIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: ShieldCheck,
    title: "Transparência Absoluta",
    description:
      "O histórico de cada carro, completo e sem omissões.",
  },
  {
    icon: HandshakeIcon,
    title: "Ecossistema de Confiança",
    description:
      "Curadoria criteriosa e proteção real para o seu investimento, seu tempo e seus planos.",
  },
];

const Features = () => {
  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-elegant transition-all duration-300 animate-slide-up border border-border bg-card"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-hero-from to-hero-to">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
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
