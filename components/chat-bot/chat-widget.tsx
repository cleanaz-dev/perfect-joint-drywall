'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, ChevronDown, User, Bot } from 'lucide-react';

// Define the structure for preloaded questions
interface Question {
  id: string;
  label: string;
  reply: string;
}

// Define the structure for a chat message
interface Message {
  id: number;
  sender: 'bot' | 'user';
  text: string;
}

const PRELOADED_QUESTIONS: Question[] = [
  {
    id: 'services',
    label: 'What services do you offer?',
    reply: 'We specialize in expert drywall installation, seamless taping, and custom carpentry for both homes and businesses.',
  },
  {
    id: 'quote',
    label: 'How do I get a quote?',
    reply: 'Getting a quote is easy and free! Just click the "Get a Free Quote" button on our website or call us directly.',
  },
  {
    id: 'insurance',
    label: 'Are you insured?',
    reply: 'Yes! We are fully licensed and insured, giving you total peace of mind while we work on your property.',
  },
  {
    id: 'contact',
    label: 'I need to speak to a human',
    reply: 'No problem! You can reach us at (555) 123-4567 or email us at support@perfectjoint.com.',
  }
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'bot',
      text: 'Hi there! 👋 Welcome to Perfect Joint. How can we help you today?',
    }
  ]);
  const [showOptions, setShowOptions] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to the bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open on desktop after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted && window.innerWidth >= 640) {
        setIsOpen(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [hasInteracted]);

  // Handle clicking outside the chat window to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatWindowRef.current && 
        !chatWindowRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHasInteracted(true);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setHasInteracted(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setHasInteracted(true);
  };

  const handleOptionClick = (question: Question) => {
    setShowOptions(false);
    setHasInteracted(true);
    
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: 'user', text: question.label },
    ]);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'bot', text: question.reply },
      ]);
      
      setTimeout(() => setShowOptions(true), 800);
    }, 600);
  };

  return (
    <>
      {/* Floating Action Button */}
       <button
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-white text-stone-900 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-stone-50 ${
          isOpen ? 'pointer-events-none scale-50 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="Open chat"
      >
        <MessageSquare className="h-8 w-8" />
      </button>
      
      {/* Chat Window */}
      <div
        ref={chatWindowRef}
        className={`fixed inset-0 z-50 flex flex-col overflow-hidden bg-white transition-all duration-300 sm:bottom-6 sm:left-auto sm:right-6 sm:top-auto sm:h-[600px] sm:w-[420px] sm:origin-bottom-right sm:rounded-2xl sm:border sm:border-stone-200 sm:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] ${
          isOpen
            ? 'scale-100 translate-y-0 opacity-100'
            : 'pointer-events-none scale-95 translate-y-8 opacity-0'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between bg-stone-900 p-4 text-white sm:rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src="/logo-no-text.png" 
                alt="Perfect Joint Logo" 
                className="h-6 w-6 object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold leading-tight tracking-wide">Perfect Joint Support</h3>
              <p className="text-xs font-medium text-primary">Usually replies instantly</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="rounded-full p-2 text-stone-300 transition-colors hover:bg-white/10 hover:text-white"
          >
            <ChevronDown className="h-6 w-6 sm:hidden" />
            <X className="hidden h-5 w-5 sm:block" />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto bg-white p-4 sm:p-5">
          <div className="flex flex-col gap-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex max-w-[85%] items-end gap-2.5 ${
                  msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full shadow-sm ${
                    msg.sender === 'bot'
                      ? 'bg-primary text-white'
                      : 'bg-stone-800 text-white'
                  }`}
                >
                  {msg.sender === 'bot' ? (
                    /* eslint-disable-next-line @next/next/no-img-element */
                    <Bot className="h-4 w-4" />
              
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'rounded-br-sm bg-primary font-medium text-white shadow-primary/20'
                      : 'rounded-bl-sm border border-stone-200/60 bg-stone-100 text-stone-800'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Options / Input Area */}
        <div className="border-t border-stone-100 bg-white p-4 sm:rounded-b-2xl">
          {showOptions ? (
            <div className="flex flex-col gap-3">
              <p className="mb-0.5 text-xs font-bold uppercase tracking-wider text-stone-500">
                Choose a question:
              </p>
              <div className="flex flex-wrap gap-2">
                {PRELOADED_QUESTIONS.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleOptionClick(q)}
                    className="rounded-full border-2 border-primary bg-white px-4 py-2 text-left text-sm font-semibold text-stone-700 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-white hover:shadow-md active:translate-y-0"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2 py-2">
              <div className="flex h-3 w-3 items-center justify-center gap-1">
                <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-primary"></span>
                <span
                  className="block h-1.5 w-1.5 animate-bounce rounded-full bg-primary"
                  style={{ animationDelay: '0.2s' }}
                ></span>
                <span
                  className="block h-1.5 w-1.5 animate-bounce rounded-full bg-primary"
                  style={{ animationDelay: '0.4s' }}
                ></span>
              </div>
              <span className="text-sm font-medium text-stone-500">
                Perfect Joint is typing...
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

