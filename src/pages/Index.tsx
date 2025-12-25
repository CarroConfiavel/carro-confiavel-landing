import LeadForm from "@/components/LeadForm";
import Features from "@/components/Features";
import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-in">
          {/* Logo/Brand */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cal-sans bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent mb-3">
              CarroConfiável
            </h1>
            <p className="text-base md:text-lg text-muted-foreground font-light tracking-wide">
              Onde a confiança é o único padrão.
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight tracking-tight">
            A clareza que o seu próximo carro exige.
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Sem surpresas. Sem entrelinhas.
          </p>

          {/* Launch Message */}
          <div className="pt-6 max-w-2xl mx-auto">
            <div className="bg-card border border-border rounded-2xl px-8 py-6 shadow-elegant">
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed font-light">
                Estamos ditando o novo padrão de compra e venda de carros no Brasil, com transparência absoluta e processos desenhados para oferecer tranquilidade do início ao fim.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-secondary/40">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground animate-fade-in">
            <span className="text-accent">Benefício de Lançamento</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto font-light">
            Antecipe-se. Cadastre-se e anuncie seu primeiro veículo gratuitamente.
          </p>
          <div className="pt-4">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <footer className="border-t border-border py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="text-xl font-cal-sans bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent">
              CarroConfiável
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com/company/carroconfiavel"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn CarroConfiável"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-right font-light">
              © 2025 CarroConfiável — Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
