"use client"

import { motion } from "framer-motion"
import { MapPin, Shield, Zap, Activity, Database, GitBranch, Target } from "lucide-react"

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
        company: "Zymo Solutions",
        logo: "https://logo.clearbit.com/zymosolutions.com",
        role: "Software Development Engineer",
        period: "Jan 2024 - Present",
        location: "Herndon, VA",
        achievements: [
            {
                title: "Performance Optimization",
                description: "Reduced API response time by 35% and improved throughput by 50%. Optimized PostgreSQL queries with strategic indexing",
                metric: "10K+ concurrent users",
                icon: Zap,
                color: "text-yellow-500"
            },
            {
                title: "Background Processing",
                description: "Built Celery + Redis workflow system with 99.9% task success rate. Handles data sync, reports, and notifications",
                metric: "50K+ daily jobs",
                icon: Activity,
                color: "text-green-500"
            },
            {
                title: "Architecture & Delivery",
                description: "Created reusable domain models, reduced code duplication across 5 microservices. Simplified onboarding for new engineers",
                metric: "40% faster delivery",
                icon: Target,
                color: "text-blue-500"
            },
            {
                title: "CI/CD Pipeline",
                description: "Automated deployments with Jenkins & GitHub Actions. 85%+ code coverage with pytest, eliminated manual deployment errors",
                metric: "60% faster deploys",
                icon: GitBranch,
                color: "text-purple-500"
            },
            {
                title: "Analytics Performance",
                description: "Cut report generation time by 60%. Implemented Redis caching layer and optimized 15+ dashboard endpoints",
                metric: "60% improvement",
                icon: Database,
                color: "text-orange-500"
            },
            {
                title: "System Reliability",
                description: "Improved uptime from 95% to 99.5%. Implemented comprehensive error handling, retry logic and rate limiting",
                metric: "99.5% uptime",
                icon: Shield,
                color: "text-red-500"
            },
        ]
    },
    {
        company: "Ananth Technologies",
        logo: "https://logo.clearbit.com/ananthtechnologies.com",
        role: "Software Engineer Intern",
        period: "Sep 2022 - May 2023",
        location: "Hyderabad, India",
        achievements: [
            {
                title: "API Performance",
                description: "40% performance improvement through Redis caching implementation and MySQL query optimization. Refactored database schemas",
                metric: "40% faster",
                icon: Zap,
                color: "text-yellow-500"
            },
            {
                title: "Payment Integration",
                description: "Reduced payment failures by 25%. Integrated third-party payment APIs with SMS notification system and comprehensive error handling",
                metric: "25% reduction",
                icon: Shield,
                color: "text-green-500"
            },
            {
                title: "Team Standards",
                description: "Established Django REST coding standards and implemented JWT authentication. Created reusable API patterns",
                metric: "30% faster dev",
                icon: GitBranch,
                color: "text-blue-500"
            },
            {
                title: "Code Quality",
                description: "Reduced bugs by 35% through active code review participation, Agile ceremony contributions, and best practices implementation",
                metric: "35% fewer bugs",
                icon: Target,
                color: "text-purple-500"
            },
        ]
    },
    {
        company: "SRM University, AP",
        logo: "https://logo.clearbit.com/srmap.edu.in",
        role: "Software Development Engineer",
        period: "Jan 2021 - Aug 2022",
        location: "Amaravati, India",
        achievements: [
            {
                title: "Automation",
                description: "Reduced manual entry time by 70%. Built Python automation scripts with batch validation workflows",
                metric: "100K+ records",
                icon: Zap,
                color: "text-yellow-500"
            },
            {
                title: "Database Optimization",
                description: "45% performance improvement through optimized SQLite and PostgreSQL schemas. Implemented proper indexing and refactored 20+ slow queries",
                metric: "45% faster",
                icon: Database,
                color: "text-green-500"
            },
            {
                title: "Data Visualization",
                description: "Increased user engagement by 50%. Built interactive dashboards with Flask + JavaScript stack and custom reporting capabilities",
                metric: "50% engagement",
                icon: Activity,
                color: "text-blue-500"
            },
            {
                title: "System Reliability",
                description: "99.7% uptime achieved with secure authentication. Served 10K+ users with comprehensive error handling",
                metric: "99.7% uptime",
                icon: Shield,
                color: "text-purple-500"
            },
            {
                title: "Team Leadership",
                description: "Created technical documentation and established coding standards. Mentored 2 junior developers",
                metric: "40% faster deployment",
                icon: Target,
                color: "text-orange-500"
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
                                            <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                                                <MapPin className="h-3 w-3" /> {exp.location}
                                            </p>
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
