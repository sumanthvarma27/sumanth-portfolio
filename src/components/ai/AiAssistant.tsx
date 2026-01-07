"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Sparkles, User, Bot } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { ScrollArea } from "../ui/scroll-area"

type Message = {
    role: "user" | "bot"
    content: string
}

const INITIAL_MESSAGE: Message = {
    role: "bot",
    content: "Hi! I'm your AI portfolio assistant. Ask me anything about Sumanth's experience, skills, or projects!"
}

const KNOWLEDGE_BASE = {
    greetings: ["hi", "hello", "hey", "hola"],
    skills: ["skills", "stack", "technologies", "languages", "toolkit"],
    projects: ["projects", "built", "work", "portfolio", "app"],
    experience: ["experience", "job", "career", "velocitipm", "timelyhero", "gmu"],
    contact: ["contact", "email", "reach", "hire"],
    about: ["about", "bio", "who"],
}

export function AiAssistant() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [messages, setMessages] = React.useState<Message[]>([INITIAL_MESSAGE])
    const [inputValue, setInputValue] = React.useState("")
    const [isTyping, setIsTyping] = React.useState(false)
    const scrollRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const generateResponse = (query: string) => {
        const lowerQuery = query.toLowerCase()

        if (KNOWLEDGE_BASE.greetings.some(w => lowerQuery.includes(w))) {
            return "Hello there! How can I help you learn more about Sumanth today?"
        }
        if (KNOWLEDGE_BASE.skills.some(w => lowerQuery.includes(w))) {
            return "Sumanth is proficient in: Python, Django, React, AWS, Docker, and Kubernetes. He has extensive experience with PostgreSQL and async processing using Celery/Redis."
        }
        if (KNOWLEDGE_BASE.projects.some(w => lowerQuery.includes(w))) {
            return "Sumanth has built an AI-Powered Catering System, a DocuVault document management system, and a Real-Time Analytics Platform using Kafka. Check out the Projects section!"
        }
        if (KNOWLEDGE_BASE.experience.some(w => lowerQuery.includes(w))) {
            return "Sumanth's recent experience includes being a Software Engineer at Capital One and Tech Mahindra, where he optimized high-volume financial and healthcare systems."
        }
        if (KNOWLEDGE_BASE.contact.some(w => lowerQuery.includes(w))) {
            return "You can reach Sumanth via the Contact form below, or email varma.gadiraju2001@gmail.com."
        }
        if (KNOWLEDGE_BASE.about.some(w => lowerQuery.includes(w))) {
            return "Sumanth is a Software Development Engineer with a focus on building scalable AI systems and distributed backends. He loves solving complex problems!"
        }

        return "That's a great question! I'm still learning the specifics, but feel free to browse the detailed sections on this page to find out more."
    }

    const handleSend = async () => {
        if (!inputValue.trim()) return

        const userMsg: Message = { role: "user", content: inputValue }
        setMessages(prev => [...prev, userMsg])
        setInputValue("")
        setIsTyping(true)

        // Simulate network delay
        setTimeout(() => {
            const responseText = generateResponse(userMsg.content)
            const botMsg: Message = { role: "bot", content: responseText }
            setMessages(prev => [...prev, botMsg])
            setIsTyping(false)
        }, 1000)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSend()
        }
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed bottom-24 right-6 z-[60] w-[350px] md:w-[400px]"
                    >
                        <Card className="border-primary/20 shadow-2xl bg-background/95 backdrop-blur-xl">
                            <CardHeader className="flex flex-row items-center justify-between p-4 border-b border-border/50">
                                <div className="flex items-center gap-2">
                                    <div className="bg-primary/20 p-2 rounded-full">
                                        <Sparkles className="h-4 w-4 text-primary" />
                                    </div>
                                    <div>
                                        <div>
                                            <CardTitle className="text-sm font-bold">Portfolio Assistant</CardTitle>
                                            <CardDescription className="text-xs text-green-500 font-medium flex items-center gap-1">
                                                <span className="block h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                                Online
                                            </CardDescription>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(false)}>
                                    <X className="h-4 w-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="p-0">
                                <ScrollArea className="h-[350px] p-4" ref={scrollRef}>
                                    <div className="space-y-4">
                                        {messages.map((msg, i) => (
                                            <div
                                                key={i}
                                                className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"
                                                    }`}
                                            >
                                                <div className={`h-8 w-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                                                    {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                                                </div>
                                                <div
                                                    className={`rounded-lg px-3 py-2 text-sm max-w-[80%] ${msg.role === "user"
                                                        ? "bg-primary text-primary-foreground"
                                                        : "bg-muted text-foreground"
                                                        }`}
                                                >
                                                    {msg.content}
                                                </div>
                                            </div>
                                        ))}
                                        {isTyping && (
                                            <div className="flex gap-3">
                                                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                                                    <Bot className="h-4 w-4 text-muted-foreground" />
                                                </div>
                                                <div className="bg-muted rounded-lg px-4 py-3 flex items-center gap-1">
                                                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                                                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                                                    <span className="w-1.5 h-1.5 bg-muted-foreground/40 rounded-full animate-bounce" />
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </ScrollArea>
                            </CardContent>
                            <CardFooter className="p-3 pt-0">
                                <div className="flex w-full gap-2">
                                    <Input
                                        placeholder="Ask about skills, projects..."
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={handleKeyDown}
                                        className="bg-background/50 border-border/50 focus-visible:ring-primary/50"
                                    />
                                    <Button size="icon" onClick={handleSend} disabled={!inputValue.trim() || isTyping}>
                                        <Send className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <Button
                    size="lg"
                    onClick={() => setIsOpen(!isOpen)}
                    className="h-14 w-14 rounded-full shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
                </Button>
            </motion.div>
        </>
    )
}
