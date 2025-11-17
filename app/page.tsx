import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Apple,
  ArrowRight,
  Check,
  Dumbbell,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <Dumbbell className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-xl">FitTrack AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Recursos
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Preços
            </Link>
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </Link>
            <Button asChild>
              <Link href="/registro">Começar Grátis</Link>
            </Button>
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/registro">Começar</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Powered by AI
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
            Transforme seu corpo com inteligência artificial
          </h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Monitore treinos, controle sua dieta e alcance seus objetivos com o
            poder da IA. Seu coach pessoal disponível 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-lg h-12 px-8" asChild>
              <Link href="/registro">
                Começar Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg h-12 px-8 bg-transparent"
              asChild
            >
              <Link href="#features">Ver Recursos</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="container mx-auto px-4 py-20 bg-muted/30"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Ferramentas completas para transformar sua saúde e fitness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Dumbbell className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Treinos Inteligentes</h3>
              <p className="text-muted-foreground">
                Registre seus exercícios, acompanhe séries e repetições, e veja
                seu progresso em tempo real.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <Apple className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Controle de Dieta</h3>
              <p className="text-muted-foreground">
                Monitore suas refeições, macronutrientes e mantenha uma
                alimentação balanceada.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-chart-1/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-chart-1" />
              </div>
              <h3 className="text-2xl font-bold">Análise de Calorias</h3>
              <p className="text-muted-foreground">
                Acompanhe seu consumo calórico diário com gráficos detalhados e
                insights personalizados.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-chart-2/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-chart-2" />
              </div>
              <h3 className="text-2xl font-bold">Coach AI 24/7</h3>
              <p className="text-muted-foreground">
                Tire dúvidas sobre treino e nutrição com nosso assistente de
                inteligência artificial.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-chart-3/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-chart-3" />
              </div>
              <h3 className="text-2xl font-bold">Progresso Visual</h3>
              <p className="text-muted-foreground">
                Visualize sua evolução com gráficos e estatísticas que motivam
                você a continuar.
              </p>
            </Card>

            <Card className="p-6 space-y-4 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-chart-4/10 flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-chart-4" />
              </div>
              <h3 className="text-2xl font-bold">Dicas Personalizadas</h3>
              <p className="text-muted-foreground">
                Receba recomendações diárias baseadas no seu progresso e
                objetivos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Escolha seu plano
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Comece grátis e faça upgrade quando precisar de mais recursos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Gratuito</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">R$0</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Registro básico de treinos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Controle de calorias</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">5 consultas AI por dia</span>
                </li>
              </ul>
              <Button
                className="w-full bg-transparent"
                variant="outline"
                asChild
              >
                <Link href="/registro">Começar Grátis</Link>
              </Button>
            </Card>

            <Card className="p-8 space-y-6 border-primary shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Mais Popular
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Premium</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">R$29</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Tudo do plano Gratuito</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Treinos ilimitados</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Análises avançadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">AI Coach ilimitado</span>
                </li>
              </ul>
              <Button className="w-full" asChild>
                <Link href="/registro">Começar Agora</Link>
              </Button>
            </Card>

            <Card className="p-8 space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Pro</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">R$49</span>
                  <span className="text-muted-foreground">/mês</span>
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Tudo do plano Premium</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Planos personalizados</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Suporte prioritário</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">Relatórios exportáveis</span>
                </li>
              </ul>
              <Button
                className="w-full bg-transparent"
                variant="outline"
                asChild
              >
                <Link href="/registro">Começar Agora</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Pronto para transformar sua vida?
          </h2>
          <p className="text-xl text-muted-foreground text-pretty">
            Junte-se a milhares de pessoas que já estão alcançando seus
            objetivos com FitTrack AI
          </p>
          <Button size="lg" className="text-lg h-12 px-8" asChild>
            <Link href="/registro">
              Começar Gratuitamente
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <Dumbbell className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">FitTrack AI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 FitTrack AI. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
