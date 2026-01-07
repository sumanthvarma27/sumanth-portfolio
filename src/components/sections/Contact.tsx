"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Send, Mail, MapPin, CheckCircle2 } from "lucide-react"

export function Contact() {
    return (
        <section id="contact" className="container py-20">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto"
            >
                <Card className="glass border-white/10 overflow-hidden">
                    <div className="grid md:grid-cols-2">
                        {/* Contact Info */}
                        <div className="bg-primary/5 p-8 flex flex-col justify-between">
                            <div>
                                <CardHeader className="p-0 mb-6">
                                    <CardTitle className="text-2xl">Get in touch</CardTitle>
                                    <CardDescription>
                                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                                    </CardDescription>
                                </CardHeader>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                                        <div className="rounded-full bg-background/50 p-2">
                                            <Mail className="h-5 w-5" />
                                        </div>
                                        <a href="mailto:varmasumanth009@gmail.com">varmasumanth009@gmail.com</a>
                                    </div>

                                    <div className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors">
                                        <div className="rounded-full bg-background/50 p-2">
                                            <MapPin className="h-5 w-5" />
                                        </div>
                                        <span>Herndon, Virginia</span>
                                    </div>

                                    <div className="flex items-center gap-4 text-muted-foreground">
                                        <div className="rounded-full bg-background/50 p-2">
                                            <CheckCircle2 className="h-5 w-5 text-green-500" />
                                        </div>
                                        <span>Available for new opportunities</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <p className="text-sm text-muted-foreground italic">
                                    "Innovation distinguishes between a leader and a follower."
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="p-8">
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                                    <Input id="name" placeholder="John Doe" className="bg-background/50" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                                    <Input id="email" type="email" placeholder="john@example.com" className="bg-background/50" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                                    <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[120px] bg-background/50" />
                                </div>
                                <Button className="w-full gap-2">
                                    <Send className="h-4 w-4" /> Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </Card>
            </motion.div>
        </section>
    )
}
