
"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from '@/components/ui/card';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { oceanChatbot } from '@/ai/flows/ocean-chatbot-flow';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
};

export function OceanChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollViewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        id: 'initial-greeting',
        text: 'Hello! I am Samudra, your AI oceanographer. How can I help you learn about our oceans today?',
        sender: 'ai',
      },
    ]);
  }, []);

  useEffect(() => {
    if (scrollViewportRef.current) {
        scrollViewportRef.current.scrollTop = scrollViewportRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      text: input,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await oceanChatbot({ query: input });
      const aiMessage: Message = {
        id: `ai-${Date.now()}`,
        text: response.answer,
        sender: 'ai',
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Chatbot error:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        text: 'Sorry, I encountered an error. Please try again.',
        sender: 'ai',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto">
             <div className="mx-auto max-w-3xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                    Ask Samudra, our AI Oceanographer
                </h2>
                <p className="mt-4 text-lg text-foreground/80">
                    Have a question about oceanography, marine life, or conservation? Get answers from our specialized AI assistant.
                </p>
            </div>
            <Card className="mx-auto max-w-3xl h-[600px] flex flex-col shadow-lg">
            <CardHeader className="flex flex-row items-center gap-3 bg-card">
                <Bot className="h-6 w-6 text-primary" />
                <div>
                    <CardTitle className="text-lg">AI Oceanographer</CardTitle>
                    <CardDescription>Ask me anything about the ocean!</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex-1 p-0">
                <ScrollArea className="h-full" viewportRef={scrollViewportRef}>
                <div className="space-y-4 p-4">
                    {messages.map((message) => (
                    <div
                        key={message.id}
                        className={cn(
                        'flex items-start gap-3',
                        message.sender === 'user' ? 'justify-end' : 'justify-start'
                        )}
                    >
                        {message.sender === 'ai' && (
                        <Avatar className="h-8 w-8">
                            <AvatarFallback><Bot size={20} /></AvatarFallback>
                        </Avatar>
                        )}
                        <div
                        className={cn(
                            'max-w-[75%] rounded-xl px-4 py-2 text-sm',
                            message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted' // Simplified for better contrast
                        )}
                        >
                        {message.text}
                        </div>
                        {message.sender === 'user' && (
                        <Avatar className="h-8 w-8">
                            <AvatarFallback><User size={20}/></AvatarFallback>
                        </Avatar>
                        )}
                    </div>
                    ))}
                    {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback><Bot size={20} /></AvatarFallback>
                        </Avatar>
                        <div className="bg-muted text-muted-foreground rounded-xl px-4 py-2">
                            <Loader2 className="h-5 w-5 animate-spin" />
                        </div>
                    </div>
                    )}
                </div>
                </ScrollArea>
            </CardContent>
            <CardFooter className="p-4 border-t">
                <form onSubmit={handleSendMessage} className="flex w-full items-center gap-2">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about the ocean..."
                    disabled={isLoading}
                    autoComplete="off"
                />
                <Button type="submit" size="icon" disabled={isLoading}>
                    <Send className="h-4 w-4" />
                </Button>
                </form>
            </CardFooter>
            </Card>
        </div>
    </section>
  );
}
