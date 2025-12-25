import LeadForm from "@/components/LeadForm";
import Features from "@/components/Features";
import { Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-hero-from/10 via-background to-hero-to/10 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(var(--hero-gradient-from)/0.15),transparent_50%)] -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(var(--hero-gradient-to)/0.15),transparent_50%)] -z-10"></div>

        <div className="max-w-5xl mx-auto text-center space-y-12 animate-fade-in">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cal-sans bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent mb-2">
              CarroConfiável
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Onde a confiança é o único padrão.
            </p>
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            A clareza que o seu próximo carro exige.
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sem surpresas. Sem entrelinhas.
          </p>

          {/* Launch Message */}
          <div className="pt-8 max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 blur-xl rounded-3xl"></div>
              <div className="relative bg-card border-2 border-primary/20 rounded-3xl px-8 py-6 shadow-elegant">
                <p className="text-lg md:text-xl text-foreground leading-relaxed">
                  Estamos ditando o novo padrão de compra e venda de carros no Brasil, com transparência absoluta e processos desenhados para oferecer tranquilidade do início ao fim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-secondary/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--success-glow)/0.1),transparent_70%)]"></div>
        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground animate-fade-in">
            <span className="text-accent">Benefício de Lançamento</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Antecipe-se. Cadastre-se e anuncie seu primeiro veículo gratuitamente.
          </p>
          <div className="pt-6">
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <Features />

      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="text-2xl font-cal-sans bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent">
              CarroConfiável.com
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
                <Linkedin className="w-6 h-6" />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-sm text-muted-foreground text-center md:text-right">
              © 2025 CarroConfiável.com - Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
