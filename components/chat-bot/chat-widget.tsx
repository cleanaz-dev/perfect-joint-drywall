"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, ChevronDown, User, Bot, Send } from "lucide-react";
import ReactMarkdown from "react-markdown";

interface Question {
  id: string;
  label: string;
}

interface Message {
  id: number;
  role: "assistant" | "user";
  content: string;
}

const PRELOADED_QUESTIONS: Question[] = [
  { id: "services", label: "What services do you offer?" },
  { id: "quote", label: "How do I get a quote?" },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      role: "assistant",
      content:
        "Hi there! 👋 Welcome to Perfect Joint. How can we help you today?",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatWindowRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted && window.innerWidth >= 640) {
        setIsOpen(true);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [hasInteracted]);

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
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
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

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    setHasInteracted(true);
    setInputText("");
    setIsLoading(true);

    const newUserMessage: Message = {
      id: Date.now(),
      role: "user",
      content: text,
    };
    const updatedMessages = [...messages, newUserMessage];
    setMessages(updatedMessages);

    try {
      const apiMessages = updatedMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chatMessages: apiMessages }),
      });

      if (!response.ok) throw new Error("API Network Error");

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        { id: Date.now(), role: "assistant", content: data.message },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          role: "assistant",
          content:
            "Sorry, I am having trouble connecting right now. Please try again or call us at (555) 555-0100.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSendMessage(inputText);
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className={`fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-stone-50 hover:text-primary hover:ring-2 hover:ring-primary ${
          isOpen
            ? "pointer-events-none scale-50 opacity-0"
            : "scale-100 opacity-100"
        }`}
        aria-label="Open chat"
      >
        <MessageSquare className="h-8 w-8" />
      </button>

      <div
        ref={chatWindowRef}
        className={`fixed inset-0 z-[9999] flex flex-col overflow-hidden bg-white transition-all duration-300 sm:bottom-6 sm:left-auto sm:right-6 sm:top-auto sm:h-[calc(100vh-120px)] sm:max-h-[800px] sm:w-[420px] sm:origin-bottom-right sm:rounded-2xl sm:border sm:border-stone-200 sm:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] ${
          isOpen
            ? "scale-100 translate-y-0 opacity-100"
            : "pointer-events-none scale-95 translate-y-8 opacity-0"
        }`}
      >
        <div className="flex items-center justify-between bg-stone-900 p-4 text-white sm:rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/new-logo-no-bg-no-text.png"
                alt="Perfect Joint Logo"
                className="h-6 w-6 object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold leading-tight tracking-wide">
                Perfect Joint Support
              </h3>
              <p className="text-xs font-medium text-primary">
                Usually replies instantly
              </p>
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

        <div className="flex-1 overflow-y-auto bg-stone-50 p-4 sm:p-5 relative">
          <div className="flex flex-col gap-5">
            {messages.map((msg) => (
              <div
                key={msg.id}
                // AI MESSAGE WIDTH FIX APPLIED HERE
                className={`flex items-end gap-2.5 ${
                  msg.role === "user" ? "max-w-[85%] ml-auto flex-row-reverse" : "max-w-[95%]"
                }`}
              >
                <div
                  className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full shadow-sm ${
                    msg.role === "assistant"
                      ? "bg-primary text-white"
                      : "bg-stone-800 text-white"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <Bot className="h-4 w-4" />
                  ) : (
                    <User className="h-4 w-4" />
                  )}
                </div>

                <div
                  className={`rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm ${
                    msg.role === "user"
                      ? "rounded-br-sm bg-primary font-medium text-white shadow-primary/20"
                      : "rounded-bl-sm border border-stone-200/60 bg-white text-stone-800"
                  }`}
                >
                  {msg.role === "assistant" ? (
                    <div className="flex flex-col gap-2 w-full overflow-hidden">
                      <ReactMarkdown
                        components={{
                          p: ({ node, ...props }) => (
                            <p className="m-0" {...props} />
                          ),
                          strong: ({ node, ...props }) => (
                            <strong
                              className="font-bold text-stone-900"
                              {...props}
                            />
                          ),
                          ul: ({ node, ...props }) => (
                            <ul
                              className="list-disc pl-4 m-0 space-y-1"
                              {...props}
                            />
                          ),
                          li: ({ node, ...props }) => (
                            <li className="m-0" {...props} />
                          ),
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    </div>
                  ) : (
                    msg.content
                  )}
                </div>
              </div>
            ))}

            {isLoading && (
              // AI LOADING INDICATOR WIDTH MATCHED HERE
              <div className="flex max-w-[95%] items-end gap-2.5">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-sm">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-2xl rounded-bl-sm border border-stone-200/60 bg-white px-4 py-4 shadow-sm flex items-center gap-1.5">
                  <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-primary/70"></span>
                  <span
                    className="block h-1.5 w-1.5 animate-bounce rounded-full bg-primary/70"
                    style={{ animationDelay: "0.2s" }}
                  ></span>
                  <span
                    className="block h-1.5 w-1.5 animate-bounce rounded-full bg-primary/70"
                    style={{ animationDelay: "0.4s" }}
                  ></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className="border-t border-stone-100 bg-white p-4 sm:rounded-b-2xl">
          {messages.length === 1 && !isLoading && (
            <div className="mb-4 flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wider text-stone-400 pl-1">
                Suggested Questions
              </p>
              <div className="flex flex-col gap-2">
                {PRELOADED_QUESTIONS.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => handleSendMessage(q.label)}
                    className="rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-left text-sm font-semibold text-stone-700 transition-all duration-200 hover:border-primary hover:bg-primary/5 hover:text-primary active:scale-[0.98]"
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              disabled={isLoading}
              className="flex-1 rounded-full border border-stone-200 bg-stone-50 px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
            />
            <button
              onClick={() => handleSendMessage(inputText)}
              disabled={!inputText.trim() || isLoading}
              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white transition-all hover:bg-primary/90 disabled:opacity-50 disabled:hover:bg-primary"
            >
              <Send className="h-5 w-5 ml-[-2px]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}