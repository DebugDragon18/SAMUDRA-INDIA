"use client";

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { MessageSquare, Send, X, Bot, User, Loader2 } from 'lucide-react';
import { oceanChatbot } from '@/ai/flows/ocean-chatbot-flow';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'ai';
};

export function OceanChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        {
          id: 'initial-greeting',
          text: 'Hello! I am Samudra, your AI oceanographer. How can I help you learn about our oceans today?',
          sender: 'ai',
        },
      ]);
    }
  }, [isOpen]);

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (scrollAreaRef.current) {
        const viewport = scrollAreaRef.current.querySelector('div');
        if (viewport) {
            viewport.scrollTop = viewport.scrollHeight;
        }
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

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg"
      >
        <MessageSquare className="h-8 w-8" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-full max-w-sm h-[600px] flex flex-col shadow-2xl z-50">
      <CardHeader className="flex flex-row items-center justify-between bg-primary text-primary-foreground">
        <div className="flex items-center gap-3">
          <Bot className="h-6 w-6" />
          <CardTitle className="text-lg">AI Oceanographer</CardTitle>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 text-primary-foreground hover:bg-primary/80 hover:text-primary-foreground">
          <X className="h-5 w-5" />
        </Button>
      </CardHeader>
      <CardContent className="flex-1 p-0">
        <ScrollArea ref={scrollAreaRef} className="h-full p-4">
          <div className="space-y-4">
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
                      : 'bg-muted text-muted-foreground'
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
  );
}
