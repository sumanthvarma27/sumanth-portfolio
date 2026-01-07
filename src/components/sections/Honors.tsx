"use client"

import { motion } from "framer-motion"
import { Award, Trophy } from "lucide-react"

import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card"

const honors = [
    {
        title: "AWS Certified Solutions Architect – Associate",
        organization: "Amazon Web Services",
        date: "2025",
        location: "Global"
    },
    {
        title: "AWS Certified Cloud Practitioner",
        organization: "Amazon Web Services",
        date: "2025",
        location: "Global"
    },
    {
        title: "Data Science using Python & R Programming",
        organization: "360DigiTMG",
        date: "2022",
        location: "India"
    }
]

const awards = [
    {
        title: "Master of Science in Computer Science",
        organization: "George Mason University",
        date: "Aug 2023 - May 2025",
        location: "Fairfax, VA"
    }
]

export function Honors() {
    return (
        <section id="honors" className="py-24 relative">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl mb-4">
                        Honors.
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        Here are a few of my honors, awards, scholarships and certifications.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-12">
                    <div>
                        <h3 className="text-xl font-bold text-yellow-500 mb-6 flex items-center gap-2">
                            <Trophy className="h-5 w-5" /> Scholarships and Fellowships
                        </h3>
                        <div className="space-y-4">
                            {honors.map((honor, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="bg-card/40 border-white/5 hover:border-primary/30 transition-all duration-300">
                                        <CardHeader>
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                                                <div>
                                                    <CardTitle className="text-lg font-bold text-foreground">
                                                        {honor.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-muted-foreground mt-1">
                                                        {honor.organization}
                                                    </CardDescription>
                                                </div>
                                                <div className="text-right flex flex-col items-end">
                                                    <span className="text-sm font-mono text-muted-foreground">{honor.date}</span>
                                                    <span className="text-xs text-muted-foreground mt-1">{honor.location}</span>
                                                </div>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-yellow-500 mb-6 flex items-center gap-2">
                            <Award className="h-5 w-5" /> Awards
                        </h3>
                        <div className="space-y-4">
                            {awards.map((award, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="bg-card/40 border-white/5 hover:border-primary/30 transition-all duration-300">
                                        <CardHeader>
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                                                <div>
                                                    <CardTitle className="text-lg font-bold text-foreground">
                                                        {award.title}
                                                    </CardTitle>
                                                    <CardDescription className="text-muted-foreground mt-1">
                                                        {award.organization}
                                                    </CardDescription>
                                                </div>
                                                <div className="text-right flex flex-col items-end">
                                                    <span className="text-sm font-mono text-muted-foreground">{award.date}</span>
                                                    <span className="text-xs text-muted-foreground mt-1">{award.location}</span>
                                                </div>
                                            </div>
                                        </CardHeader>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
