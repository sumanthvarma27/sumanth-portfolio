"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building2, Briefcase } from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
    {
        company: "Zymo Solutions",
        role: "Software Development Engineer",
        period: "Jan 2024 - Present",
        location: "Herndon, VA",
        description: "Building scalable backend systems and optimizing API performance.",
        skills: ["Python", "Django", "PostgreSQL", "Celery", "Redis", "CI/CD", "Jenkins"],
        achievements: [
            "Reduced **API response times by 35%** and improved throughput by **50%** via PostgreSQL optimization and connection pooling.",
            "Increased task processing reliability to **99.9%** by architecting **Celery/Redis** workflows for 50K+ daily jobs.",
            "Cut deployment time by **60%** implementing **CI/CD** with Jenkins and GitHub Actions.",
            "Accelerated feature delivery by **40%** through reusable domain models across 5 microservices."
        ]
    },
    {
        company: "Ananth Technologies",
        role: "Software Engineer Intern",
        period: "Sep 2022 - May 2023",
        location: "Hyderabad, India",
        description: "Optimized patient record systems and payment integrations.",
        skills: ["Python", "Django REST Framework", "MySQL", "Redis", "Agile"],
        achievements: [
            "Boosted API performance by **40%** implementing **Redis caching** and optimizing MySQL queries.",
            "Reduced payment processing failures by **25%** through robust error handling integration.",
            "Accelerated development velocity by **30%** by establishing API coding standards.",
            "Improved code quality by **35%** through active participation in code reviews."
        ]
    },
    {
        company: "SRM University, AP",
        role: "Software Development Engineer - Apprenticeship",
        period: "Jan 2021 - Aug 2022",
        location: "Amaravati, India",
        description: "Developed automation scripts and academic data portals.",
        skills: ["Python", "Flask", "JavaScript", "PostgreSQL", "Automation"],
        achievements: [
            "Reduced manual data entry time by **70%** processing 100K+ records with **Python automation**.",
            "Improved system performance by **45%** by optimizing database schemas and refactoring queries.",
            "Increased user engagement by **50%** building interactive **Flask/JS** dashboards.",
            "Enhanced system reliability to **99.7%** for APIs serving 10K+ users."
        ]
    }
]

export function Experience() {
    return (
        <section id="experience" className="py-24 relative">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl mb-4">
                        Experience.
                    </h2>
                </motion.div>

                <div className="space-y-8 max-w-5xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="bg-card/40 border-white/5 hover:border-primary/30 transition-all duration-300">
                                <CardHeader>
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                                        <div>
                                            <CardTitle className="text-xl md:text-2xl font-bold text-primary">
                                                {exp.company}
                                            </CardTitle>
                                            <CardDescription className="text-lg font-medium text-foreground/90 mt-1">
                                                {exp.role}
                                            </CardDescription>
                                        </div>
                                        <div className="text-right flex flex-col items-end">
                                            <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                                            <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                                                <MapPin className="h-3 w-3" /> {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                    {/* Skills at the top as per reference */}
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {exp.skills.map((skill) => (
                                            <Badge key={skill} variant="secondary" className="bg-secondary/30 hover:bg-secondary/50 text-xs font-mono">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 mt-2">
                                        {exp.achievements.map((item, i) => (
                                            <li key={i} className="flex gap-3 text-muted-foreground text-sm md:text-base">
                                                <span className="text-primary mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                                                <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<span class="text-foreground font-semibold">$1</span>') }} />
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
