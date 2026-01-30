"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const roles = ["Software Engineer", "Full-Stack Developer", "AI/ML Systems Engineer", "Cloud Architect"]

export function Hero() {
    return (
        <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden py-20">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-background" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
                <div className="absolute right-0 top-0 -z-10 h-[310px] w-[310px] rounded-full bg-blue-500/20 opacity-20 blur-[100px]" />
            </div>

            <div className="container relative z-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="relative flex h-48 w-48 items-center justify-center rounded-full border-4 border-primary/20 bg-background shadow-2xl">
                        <Image
                            src="/profile-pastel.png"
                            alt="Sumanth Varma"
                            fill
                            className="rounded-full object-cover"
                            priority
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
                >
                    Hi, I&apos;m Sumanth Varma
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-6 flex h-12 flex-col items-center justify-center overflow-hidden text-xl font-medium text-muted-foreground sm:text-2xl"
                >
                    {/* Simple ticker or static for now, implementing dynamic typing next */}
                    <div className="animate-fade-in-up">
                        Software Development Engineer <span className="text-primary"></span>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="mt-6 max-w-2xl text-lg text-muted-foreground"
                >
                    Specialize in building scalable distributed systems and AI-powered applications.
                    Currently focused on full-stack development and cloud architecture.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-10 flex flex-wrap justify-center gap-4"
                >
                    <Button asChild size="lg" className="h-12 rounded-full px-8 text-base">
                        <Link href="#projects">View Projects</Link>
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.0 }}
                    className="mt-12 flex gap-6"
                >
                    <Link href="https://github.com/sumanthvarma27" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-6 w-6" />
                    </Link>
                    <Link href="https://linkedin.com/in/sumanthvarma3009/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link href="mailto:varma.gadiraju2001@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="h-6 w-6" />
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
            >
                <ArrowDown className="h-6 w-6" />
            </motion.div>
        </section>
    )
}
