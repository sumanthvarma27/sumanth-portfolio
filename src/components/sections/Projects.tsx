"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Github, ExternalLink, Zap, Layers } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { projects } from "@/lib/projects"
import { cn } from "@/lib/utils"

export function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-background">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container px-4 md:px-6 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
                        Featured Projects<span className="text-primary">.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
                        A curated selection of my work in distributed systems, AI agents, and full-stack engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.slug} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="aspect-square w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card className="h-full w-full relative overflow-hidden ring-1 ring-white/10 bg-card/50 backdrop-blur-sm border-0 group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                {/* Background Pattern/Gradient (Fallback for image) */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 transition-opacity duration-500" />

                {/* Project Image Background - Scale on Hover */}
                {/* Note: Using a gradient overlay to ensure text readability */}
                <div className="absolute inset-0 z-0">
                    <div className={cn(
                        "absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10 transition-all duration-500",
                        isHovered ? "opacity-95 bg-background/95" : "opacity-60"
                    )} />
                    {/* If actual images differ from these paths, next/image might show alt. 
                        For now, we assume these paths might be placeholders, so we add a fallback stylistic approach */}
                    <div className={cn(
                        "w-full h-full bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black)] transition-transform duration-700 ease-out",
                        isHovered ? "scale-110" : "scale-100"
                    )} />
                </div>

                <div className="absolute inset-0 z-20 flex flex-col p-6 h-full justify-between">
                    {/* Top Content */}
                    <div>
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Layers className="h-5 w-5" />
                            </div>
                            <div className="flex gap-2">
                                <Link href={project.github} target="_blank" className="p-2 hover:text-primary transition-colors text-muted-foreground">
                                    <Github className="h-5 w-5" />
                                </Link>
                                <Link href={`/projects/${project.slug}`} className="p-2 hover:text-primary transition-colors text-muted-foreground">
                                    <ArrowRight className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                    </div>

                    {/* Bottom content */}
                    <div>
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.slice(0, 3).map((t) => (
                                <Badge key={t} variant="secondary" className="bg-secondary/80 backdrop-blur-md text-xs">
                                    {t}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}
