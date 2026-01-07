import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Github, ExternalLink, Calendar, Layers } from "lucide-react"
import Link from "next/link"

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }))
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    const project = projects.find((p) => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <div className="container py-20">
            <Link href="/#projects">
                <Button variant="ghost" className="mb-8 gap-2">
                    <ArrowLeft className="h-4 w-4" /> Back to Projects
                </Button>
            </Link>

            <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{project.title}</h1>
                        <p className="mt-4 text-xl text-muted-foreground">{project.description}</p>
                    </div>

                    <div className="aspect-video w-full rounded-xl bg-muted/20 flex items-center justify-center border border-white/10">
                        <span className="text-6xl">📸 Project Screenshot</span>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        <h3 className="text-2xl font-semibold mb-4">About the Project</h3>
                        <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>

                        <h3 className="text-2xl font-semibold mt-8 mb-4">Key Features</h3>
                        {project.features && (
                            <ul className="grid gap-2 sm:grid-cols-2">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>

                <div className="space-y-6">
                    <Card className="glass border-white/10">
                        <CardContent className="p-6 space-y-6">
                            <div className="space-y-2">
                                <h4 className="font-semibold flex items-center gap-2">
                                    <Layers className="h-4 w-4 text-primary" />
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t) => (
                                        <Badge key={t} variant="secondary">{t}</Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h4 className="font-semibold flex items-center gap-2">
                                    <Calendar className="h-4 w-4 text-primary" />
                                    Timeline
                                </h4>
                                <p className="text-sm text-muted-foreground">Completed 2023</p>
                            </div>

                            <div className="pt-4 space-y-3">
                                <Button className="w-full gap-2" asChild>
                                    <a href={project.demo} target="_blank">
                                        <ExternalLink className="h-4 w-4" /> Live Demo
                                    </a>
                                </Button>
                                <Button variant="outline" className="w-full gap-2" asChild>
                                    <a href={project.github} target="_blank">
                                        <Github className="h-4 w-4" /> View Code
                                    </a>
                                </Button>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="glass border-white/10 bg-primary/5">
                        <CardContent className="p-6">
                            <h4 className="font-semibold mb-2">Impact</h4>
                            <p className="text-2xl font-bold text-primary">{project.metrics}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
