"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Github, TrendingUp, Zap, Shield, Database, Clock, Award, CheckCircle2, Activity } from "lucide-react"
import Link from "next/link"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Project data with highlights
const projects = [
    {
        slug: "catering-management-system",
        title: "AI-Powered Catering Management System",
        stack: "Python, Django, PostgreSQL, Redis, Celery, AWS",
        github: "https://github.com/sumanthvarma27/catering-order-assistant",
        highlights: [
            {
                title: "Production Performance",
                icon: TrendingUp,
                metrics: [
                    "99.8% uptime maintained",
                    "Processes 500+ daily transactions",
                    "Django REST Framework backend",
                    "AWS deployment with CI/CD"
                ]
            },
            {
                title: "Query Optimization",
                icon: Zap,
                metrics: [
                    "85% query performance improvement",
                    "Response time: 800ms → 120ms",
                    "PostgreSQL connection pooling",
                    "Strategic index implementation"
                ]
            },
            {
                title: "API Integration",
                icon: Activity,
                metrics: [
                    "Square POS integration",
                    "WhatsApp Business API",
                    "60% fewer integration errors",
                    "Comprehensive retry logic"
                ]
            }
        ]
    },
    {
        slug: "real-time-analytics",
        title: "Real-Time Analytics Platform",
        stack: "Python, Django, PostgreSQL, Kafka, Docker",
        github: "https://github.com/sumanthvarma27",
        highlights: [
            {
                title: "Data Processing",
                icon: Database,
                metrics: [
                    "1M+ daily records processed",
                    "99.5% success rate",
                    "Kafka data pipeline",
                    "Automatic retry mechanisms"
                ]
            },
            {
                title: "Analytics Speed",
                icon: Zap,
                metrics: [
                    "60% faster report generation",
                    "PostgreSQL query optimization",
                    "Redis caching implementation",
                    "Strategic indexing"
                ]
            },
            {
                title: "DevOps & Monitoring",
                icon: Activity,
                metrics: [
                    "75% improved deployment reliability",
                    "Docker containerization",
                    "Datadog + Grafana monitoring",
                    "Automated alerting system"
                ]
            }
        ]
    },
    {
        slug: "docuvault",
        title: "DocuVault - Document Management System",
        stack: "Python, Django, PostgreSQL, React",
        github: "https://github.com/sumanthvarma27/docuvault",
        highlights: [
            {
                title: "Scale & Reliability",
                icon: TrendingUp,
                metrics: [
                    "1,000+ concurrent users",
                    "99.9% uptime",
                    "Full-stack architecture",
                    "Role-based access control (RBAC)"
                ]
            },
            {
                title: "Quality & Testing",
                icon: Shield,
                metrics: [
                    "90%+ test coverage",
                    "50% fewer production bugs",
                    "Comprehensive pytest testing",
                    "Automated CI/CD with Jenkins"
                ]
            },
            {
                title: "Search Performance",
                icon: Zap,
                metrics: [
                    "70% faster search",
                    "PostgreSQL full-text search",
                    "Optimized metadata queries",
                    "Strategic indexing"
                ]
            }
        ]
    },
    {
        slug: "logo-detection-tool",
        title: "Logo Detection Tool",
        stack: "Python, YOLOv5, Flask, OpenCV",
        github: "https://github.com/sumanthvarma27",
        highlights: [
            {
                title: "Detection Accuracy",
                icon: Award,
                metrics: [
                    "98%+ detection accuracy",
                    "10K+ images processed daily",
                    "Flask REST API",
                    "YOLOv5 model integration"
                ]
            },
            {
                title: "Performance",
                icon: Clock,
                metrics: [
                    "Response time: 250ms → 85ms",
                    "66% improvement",
                    "Batch processing with Celery",
                    "Redis caching layer"
                ]
            },
            {
                title: "Quality Assurance",
                icon: Shield,
                metrics: [
                    "45% fewer production issues",
                    "90% code coverage",
                    "Comprehensive pytest testing",
                    "Performance monitoring"
                ]
            }
        ]
    },
    {
        slug: "rag-document-assistant",
        title: "RAG-Powered Document Assistant",
        stack: "Python, LangChain, Vector Database, Flask",
        github: "#",
        highlights: [
            {
                title: "LLM Accuracy",
                icon: Shield,
                metrics: [
                    "35% fewer hallucinations",
                    "Grounded LLM responses",
                    "Retrieval-Augmented Generation",
                    "Factual data grounding"
                ]
            },
            {
                title: "Search Performance",
                icon: Database,
                metrics: [
                    "90% retrieval accuracy",
                    "10K+ documents processed",
                    "Semantic search with embeddings",
                    "Vector database integration"
                ]
            },
            {
                title: "API Architecture",
                icon: Zap,
                metrics: [
                    "RESTful API endpoints",
                    "Flask backend",
                    "Web application interface",
                    "Scalable architecture"
                ]
            }
        ]
    },
    {
        slug: "ai-chatbot-member-services",
        title: "AI Chatbot for Member Services",
        stack: "Python, Azure AI, React, Node.js",
        github: "#",
        highlights: [
            {
                title: "Resolution Rate",
                icon: TrendingUp,
                metrics: [
                    "85% resolution rate",
                    "Conversational AI agent",
                    "Prompt engineering techniques",
                    "Customer inquiry handling"
                ]
            },
            {
                title: "NLP Capabilities",
                icon: Activity,
                metrics: [
                    "Intent recognition",
                    "Entity extraction",
                    "Tokenization processing",
                    "Transformer models"
                ]
            },
            {
                title: "Full-Stack Integration",
                icon: Zap,
                metrics: [
                    "React frontend",
                    "Node.js backend",
                    "API integration",
                    "Seamless UX"
                ]
            }
        ]
    },
    {
        slug: "fraud-detection-pipeline",
        title: "Fraud Detection ML Pipeline",
        stack: "Python, Databricks, PostgreSQL, Docker",
        github: "#",
        highlights: [
            {
                title: "Data Processing",
                icon: Database,
                metrics: [
                    "500K+ daily transactions",
                    "Structured data ingestion",
                    "Unstructured data processing",
                    "Databricks pipeline"
                ]
            },
            {
                title: "Model Governance",
                icon: Shield,
                metrics: [
                    "Bias detection",
                    "Transparency measures",
                    "Compliance documentation",
                    "Model governance framework"
                ]
            },
            {
                title: "DevOps & Deployment",
                icon: Activity,
                metrics: [
                    "CI/CD with Docker",
                    "Git version control",
                    "Agile sprint development",
                    "Iterative improvements"
                ]
            }
        ]
    }
]

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
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl mb-6">
                        Featured Projects<span className="text-primary">.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        A curated selection of my work in distributed systems, AI agents, and full-stack engineering.
                    </p>
                </motion.div>

                <div className="space-y-16 max-w-7xl mx-auto">
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
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Card className="relative overflow-hidden border border-white/10 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-500">
                <CardContent className="p-8 md:p-10">
                    {/* Header */}
                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    <span className="font-semibold">Stack:</span> {project.stack}
                                </p>
                            </div>
                            <Link
                                href={project.github}
                                target="_blank"
                                className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors group w-fit"
                            >
                                <Github className="h-5 w-5" />
                                <span className="group-hover:underline">View Code</span>
                                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {project.highlights.map((highlight, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.1 }}
                            >
                                <Card className="h-full border border-white/5 bg-card/50 backdrop-blur-sm hover:border-primary/20 hover:bg-card/70 transition-all duration-300 group">
                                    <CardContent className="p-6">
                                        {/* Icon and Title */}
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                                                <highlight.icon className="h-5 w-5" />
                                            </div>
                                            <h4 className="font-semibold text-foreground text-sm">
                                                {highlight.title}
                                            </h4>
                                        </div>

                                        {/* Metrics */}
                                        <ul className="space-y-2.5">
                                            {highlight.metrics.map((metric, metricIdx) => (
                                                <li
                                                    key={metricIdx}
                                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                                >
                                                    <CheckCircle2 className="h-4 w-4 text-primary/60 mt-0.5 flex-shrink-0" />
                                                    <span>{metric}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </motion.div>
    )
}
