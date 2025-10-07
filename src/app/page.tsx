import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { projects } from '@/lib/placeholder-data';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 text-center md:py-24">
          <h1 className="font-headline text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Welcome to Luca Müller
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
            A curated collection of my projects, from interactive games and modern websites to stunning 3D generations and music. Explore, interact, and get in touch.
          </p>
        </section>

        <section id="contact" className="w-full bg-muted/50 py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <Card className="mx-auto max-w-2xl">
              <CardHeader className="text-center">
                <CardTitle className="font-headline text-4xl font-bold">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-8 text-center text-muted-foreground">
                  Have a question, a project idea, or just want to say hello? Drop me a line!
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
