"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skills = [
    {
        category: "Languages",
        items: ["Python", "JavaScript", "TypeScript", "SQL", "Java", "HTML/CSS", "Shell Scripting"]
    },
    {
        category: "Frameworks",
        items: ["Django", "Django REST Framework", "React", "Redux", "FastAPI", "Flask", "Express.js"]
    },
    {
        category: "Data & Processing",
        items: ["Celery", "PostgreSQL", "Redis", "MongoDB", "Apache Kafka", "RabbitMQ"]
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS (EC2, Lambda, RDS, S3)", "Terraform", "Docker", "Kubernetes", "CI/CD", "Jenkins"]
    },
    {
        category: "Tools",
        items: ["REST APIs", "Git", "Datadog", "Grafana", "Postman", "JIRA", "Splunk", "pytest", "Jest"]
    },
    {
        category: "Methodologies",
        items: ["Domain-Driven Design (DDD)", "Agile/Scrum", "TDD", "Code Review"]
    }
]

export function Skills() {
    return (
        <section id="skills" className="container py-20">
            <div className="flex flex-col items-center text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Skills</h2>
                <div className="mt-4 h-1 w-20 rounded bg-primary" />
                <p className="mt-4 text-muted-foreground max-w-2xl">
                    A comprehensive toolkit for building robust, scalable applications from front to back.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pro-skills-grid">
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full bg-card/40 border-white/5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 group">
                            <CardHeader>
                                <CardTitle className="text-xl text-primary font-bold tracking-tight group-hover:text-primary/80 transition-colors">
                                    {skillGroup.category}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <Badge
                                            key={skill}
                                            variant="secondary"
                                            className="text-sm font-mono bg-secondary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
