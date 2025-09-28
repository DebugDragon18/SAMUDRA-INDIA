import { Card, CardContent } from '@/components/ui/card';
import { BrainCircuit, MessageSquare } from 'lucide-react';

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
            <Card className="h-[600px] w-full overflow-hidden shadow-lg">
              <CardContent className="p-0 h-full">
                <iframe
                  src="https://chatgpt.com/g/g-68d9861b1f348191bcbd0dccc252ab92-samudra-ai-marine-science-assistant"
                  className="h-full w-full border-0"
                  title="Samudra AI Marine Science Assistant"
                />
              </CardContent>
            </Card>
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
