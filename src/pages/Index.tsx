import Countdown from "@/components/Countdown";
import LeadForm from "@/components/LeadForm";
import Features from "@/components/Features";
import { Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

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
            <img 
              src={logo} 
              alt="CarroConfiável.com" 
              className="h-16 md:h-20 lg:h-24 mx-auto"
            />
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
            A única plataforma onde você{" "}
            <span className="bg-gradient-to-r from-hero-from to-hero-to bg-clip-text text-transparent">
              não compra o problema
            </span>{" "}
            de outra pessoa.
          </h2>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Estamos transformando a forma como o Brasil compra e vende carros. Prepare-se para negociar com total confiança e tranquilidade.
          </p>

          {/* Countdown */}
          <div className="pt-8">
            <Countdown />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-secondary/30 to-background">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--success-glow)/0.1),transparent_70%)]"></div>
        <div className="max-w-3xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground animate-fade-in">
            Saia na frente. <span className="text-success">Garanta seu benefício de lançamento.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Cadastre-se e seja o primeiro a saber sobre o lançamento. Os inscritos terão a{" "}
            <strong className="text-success">garantia de anunciar o primeiro veículo gratuitamente.</strong>
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
            <div>
              <img 
                src={logo} 
                alt="cc.com" 
                className="h-12"
              />
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
