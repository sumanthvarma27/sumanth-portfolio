"use client"

import { motion } from "framer-motion"
import { MapPin, Shield, Zap, Activity, Database, GitBranch, Target, LayoutTemplate, MonitorSmartphone, Server, Mic, BrainCircuit } from "lucide-react"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const experiences = [
    {
        company: "GEICO (Contract)",
        logo: "/companies/geico.png",
        role: "Software Development Engineer",
        period: "Jan 2024 – Present",
        location: "Chevy Chase, MD",
        techStack: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
            { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
            { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
        ],
        achievements: [
            {
                title: "GenAI & Backend Systems",
                description: "Built backend services and APIs for LLM-powered workflows, retrieval pipelines, and model evaluation endpoints",
                metric: "GenAI Production",
                icon: BrainCircuit,
                color: "text-purple-500"
            },
            {
                title: "Performance Optimization",
                description: "Reduced end-to-end response latency by 60%+ through Redis caching, query optimization, and async processing",
                metric: "60% Faster",
                icon: Zap,
                color: "text-yellow-500"
            },
            {
                title: "Cloud Infrastructure",
                description: "Designed containerized ML services on Kubernetes with autoscaling policies and rolling deployments for reliable inference",
                metric: "Scalable Infra",
                icon: Server,
                color: "text-blue-500"
            },
            {
                title: "Secure Architecture",
                description: "Implemented secure REST APIs (Python/Django/FastAPI) with role-based access controls and structured logging",
                metric: "Enterprise Security",
                icon: Shield,
                color: "text-green-500"
            },
        ]
    },
    {
        company: "Paytm",
        logo: "/companies/paytm.png",
        role: "Software Development Engineer",
        period: "Jan 2022 – May 2023",
        location: "Noida, India",
        techStack: [
            { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
            { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
            { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
            { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },
            { name: "Kafka", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" },
        ],
        achievements: [
            {
                title: "High-Scale Processing",
                description: "Handled 100K+ daily toll transactions across 500+ locations. Integrated with NPCI system and third-party payment gateways",
                metric: "100K+ Daily Txns",
                icon: Activity,
                color: "text-blue-500"
            },
            {
                title: "Database Optimization",
                description: "Reduced query execution time by 60% (850ms to 340ms) through strategic indexing and resolving N+1 query patterns",
                metric: "60% Faster Queries",
                icon: Database,
                color: "text-green-500"
            },
            {
                title: "Microservices",
                description: "Contributed to migration from monolith to domain-driven microservices. Reduced API latency by 45% using Redis caching layer",
                metric: "45% Lower Latency",
                icon: Server,
                color: "text-orange-500"
            },
            {
                title: "Productivity Tools",
                description: "Automated data validation reducing manual reconciliation time from 6 hours to 90 mins (75% improvement)",
                metric: "75% Time Saved",
                icon: Target,
                color: "text-purple-500"
            },
        ]
    },
    {
        company: "SRM University AP",
        logo: "/companies/srm-university.jpg",
        role: "Research Intern",
        period: "August 2020 – Dec 2021",
        location: "Amaravati, India",
        techStack: [
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
            { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
            { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        ],
        achievements: [
            {
                title: "Speech Research",
                description: "Developed multilingual speech data platform collecting data from 500+ participants across 8 Indian languages",
                metric: "500+ Participants",
                icon: Mic,
                color: "text-blue-500"
            },
            {
                title: "ML Engineering",
                description: "Engineered speech-to-speech translation with 95% accuracy on 10K+ utterances using Seq2Seq models",
                metric: "95% Accuracy",
                icon: BrainCircuit,
                color: "text-purple-500"
            },
            {
                title: "System Performance",
                description: "Reduced server load 20% and latency from 3.5s to 2.8s through indexing and schema normalization",
                metric: "20% Load Reduction",
                icon: Zap,
                color: "text-yellow-500"
            },
        ]
    },
]

export function Experience() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight md:text-5xl mb-4">
                        Experience<span className="text-primary">.</span>
                    </h2>
                </motion.div>

                <div className="space-y-16 max-w-7xl mx-auto">
                    {experiences.map((exp, expIndex) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: expIndex * 0.1, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Company Header Card */}
                            <div className="bg-card/40 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm mb-6">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 md:w-16 md:h-16 relative rounded-xl bg-background/50 p-2 flex items-center justify-center border border-white/10">
                                            <Image
                                                src={exp.logo}
                                                alt={exp.company}
                                                width={48}
                                                height={48}
                                                className="object-contain"
                                                unoptimized
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-primary">
                                                {exp.role}
                                            </h3>
                                            <p className="text-base md:text-lg font-medium text-foreground/90">
                                                {exp.company}
                                            </p>
                                            <div className="flex flex-wrap items-center gap-4 mt-1">
                                                <p className="text-sm text-muted-foreground flex items-center gap-1">
                                                    <MapPin className="h-3 w-3" /> {exp.location}
                                                </p>
                                                <div className="flex items-center gap-2 border-l border-white/10 pl-4">
                                                    {exp.techStack.map((tech, idx) => (
                                                        <div key={idx} className="relative w-4 h-4 group/tech opacity-70 hover:opacity-100 transition-opacity">
                                                            <Image
                                                                src={tech.icon}
                                                                alt={tech.name}
                                                                fill
                                                                className={`object-contain ${tech.hasOwnProperty('invert') && (tech as any).invert ? 'brightness-0 invert' : 'brightness-90'}`}
                                                                unoptimized
                                                            />
                                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity pointer-events-none">
                                                                <span className="text-[10px] bg-card px-2 py-0.5 rounded border border-white/10 whitespace-nowrap">
                                                                    {tech.name}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end">
                                        <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-mono">
                                            {exp.period}
                                        </Badge>
                                    </div>
                                </div>
                            </div>

                            {/* Achievement Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {exp.achievements.map((achievement, index) => {
                                    const Icon = achievement.icon
                                    return (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                delay: expIndex * 0.1 + index * 0.05,
                                                duration: 0.4,
                                                type: "spring",
                                                stiffness: 100
                                            }}
                                            whileHover={{
                                                scale: 1.02,
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            <Card className="h-full bg-card/30 border-white/5 hover:border-primary/30 hover:bg-card/50 transition-all duration-300 group">
                                                <CardHeader className="pb-3">
                                                    <div className="flex items-start justify-between gap-3">
                                                        <div className={`p-2.5 rounded-lg bg-background/50 ${achievement.color} border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                                                            <Icon className="h-5 w-5" />
                                                        </div>
                                                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-xs font-mono whitespace-nowrap">
                                                            {achievement.metric}
                                                        </Badge>
                                                    </div>
                                                    <CardTitle className="text-base md:text-lg font-bold text-foreground mt-3 leading-tight">
                                                        {achievement.title}
                                                    </CardTitle>
                                                </CardHeader>
                                                <CardContent className="pt-0">
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        {achievement.description}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
