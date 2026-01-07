"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Code, Cloud, Server, Database } from "lucide-react"

export function About() {
    return (
        <section id="about" className="container py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col gap-12"
            >
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                    <div className="mt-4 h-1 w-20 rounded bg-primary" />
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    {/* Bio Side */}
                    <div className="flex flex-col justify-center space-y-6">
                        <h3 className="text-2xl font-bold text-primary">Full Stack Software Engineer</h3>
                        <p className="text-lg text-muted-foreground">
                            I am a Full Stack Software Engineer with 5+ years of experience building scalable web applications and backend systems using Python, Django, React, and cloud technologies.
                        </p>
                        <p className="text-lg text-muted-foreground">
                            I specialize in developing RESTful APIs, microservices architecture, and implementing CI/CD pipelines for financial services and healthcare domains. I have a strong background in database optimization and async processing.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <Badge variant="outline" className="text-sm py-1">🚀 5+ Years Experience</Badge>
                            <Badge variant="outline" className="text-sm py-1">🤖 AI/ML Integration</Badge>
                            <Badge variant="outline" className="text-sm py-1">☁️ Cloud Native</Badge>
                        </div>
                    </div>

                    {/* Education & Certs Side */}
                    <div className="grid gap-4">
                        <Card className="glass border-white/10 transition-colors hover:border-primary/50">
                            <CardContent className="flex items-start gap-4 p-6">
                                <div className="rounded-full bg-primary/10 p-3 text-primary">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Master of Science in Computer Science</h4>
                                    <p className="text-sm text-muted-foreground">George Mason University</p>
                                    <p className="text-xs text-muted-foreground mt-1">May 2025 • Fairfax, VA</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass border-white/10 transition-colors hover:border-primary/50">
                            <CardContent className="flex items-start gap-4 p-6">
                                <div className="rounded-full bg-primary/10 p-3 text-primary">
                                    <GraduationCap className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">Bachelor of Technology in CSE</h4>
                                    <p className="text-sm text-muted-foreground">SRM University, AP</p>
                                    <p className="text-xs text-muted-foreground mt-1">May 2023 • Amaravati, India</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass border-white/10 transition-colors hover:border-primary/50">
                            <CardContent className="flex items-start gap-4 p-6">
                                <div className="rounded-full bg-primary/10 p-3 text-primary">
                                    <Cloud className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold">AWS Certified</h4>
                                    <p className="text-sm text-muted-foreground">Solutions Architect Associate</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
