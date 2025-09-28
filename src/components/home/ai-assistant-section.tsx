import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, MessageSquare, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const exampleQuestions = [
    'What is the biodiversity risk score near Andaman?',
    'Show me recent fish species data off Kerala.',
    'What are the current sea surface temperatures in the Bay of Bengal?',
    'Explain the importance of mangrove ecosystems.',
];

export function AiAssistantSection() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <BrainCircuit className="mx-auto h-12 w-12 text-primary" />
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Ask Our AI Marine Science Assistant
          </h2>
          <p className="mt-4 text-lg text-foreground/80">
            Interact with our custom-trained AI, Samudra, to get instant insights from our vast ocean data platform. Try asking it one of the questions below!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="relative flex h-[500px] w-full flex-col items-center justify-center gap-6 overflow-hidden rounded-lg bg-primary/10 p-8 text-center shadow-lg">
                <Image
                    src="https://images.unsplash.com/photo-1599389816801-645377827b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxBSSUyMG9jZWFufGVufDB8fHx8MTc1ODg5ODc3MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="AI Ocean Visualization"
                    fill
                    className="object-cover opacity-20"
                    data-ai-hint="ai ocean"
                />
                <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-primary">Engage with Samudra AI</h3>
                    <p className="mt-2 text-foreground/80">Click the button below to start a conversation with our powerful marine science assistant.</p>
                    <Button asChild size="lg" className="mt-6">
                        <Link href="https://chatgpt.com/g/g-68d9861b1f348191bcbd0dccc252ab92-samudra-ai-marine-science-assistant" target="_blank">
                            <Rocket className="mr-2 h-5 w-5" />
                            Try Samudra AI
                        </Link>
                    </Button>
                </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
             <h3 className="text-lg font-semibold">Example Questions:</h3>
             {exampleQuestions.map((question, index) => (
                <Card key={index} className="bg-background/70 hover:bg-background transition-colors">
                    <CardContent className="p-4">
                        <p className="flex items-start gap-3 text-sm text-foreground/80">
                            <MessageSquare className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                            <span>{question}</span>
                        </p>
                    </CardContent>
                </Card>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}
