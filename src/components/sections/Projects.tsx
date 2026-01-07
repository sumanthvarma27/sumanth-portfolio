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
                        Hover over a project to explore the details.
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
            className="h-[400px] w-full"
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
                        "absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10 transition-all duration-500",
                        isHovered ? "opacity-90" : "opacity-60"
                    )} />
                    {/* If actual images differ from these paths, next/image might show alt. 
                        For now, we assume these paths might be placeholders, so we add a fallback stylistic approach */}
                    <div className={cn(
                        "w-full h-full bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black)] transition-transform duration-700 ease-out",
                        isHovered ? "scale-110" : "scale-100"
                    )} />
                </div>

                <div className="absolute inset-0 z-20 flex flex-col p-8 h-full">
                    {/* Top Content: Always Visible */}
                    <div className="flex justify-between items-start">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Layers className="h-6 w-6" />
                        </div>
                        {/* External Link Indicator */}
                        <ExternalLink className={cn(
                            "h-5 w-5 text-muted-foreground transition-all duration-300",
                            isHovered ? "text-primary translate-x-1 -translate-y-1" : ""
                        )} />
                    </div>

                    <div className="mt-auto relative z-30">
                        <motion.div
                            animate={{ y: isHovered ? -20 : 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                        >
                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground line-clamp-2 mb-4 group-hover:text-foreground/80 transition-colors">
                                {project.description}
                            </p>
                        </motion.div>

                        {/* Hidden Drawer Content - Slides Up */}
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{
                                opacity: isHovered ? 1 : 0,
                                height: isHovered ? "auto" : 0
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="overflow-hidden"
                        >
                            <div className="pt-2 space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.slice(0, 4).map((t) => (
                                        <Badge key={t} variant="secondary" className="bg-secondary/80 backdrop-blur-md">
                                            {t}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-2">
                                    <Button asChild size="sm" variant="default" className="rounded-full shadow-lg shadow-primary/25">
                                        <Link href={project.github} target="_blank">
                                            <Github className="mr-2 h-4 w-4" /> Code
                                        </Link>
                                    </Button>
                                    <Button asChild size="sm" variant="outline" className="rounded-full backdrop-blur-md bg-transparent border-white/20 hover:bg-white/10">
                                        <Link href={`/projects/${project.slug}`}>
                                            Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Card>
        </motion.div>
    )
}
