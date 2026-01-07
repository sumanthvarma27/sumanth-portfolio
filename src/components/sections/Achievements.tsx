"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users, Clock, Zap } from "lucide-react"

const stats = [
    {
        label: "Concurrent Users",
        value: "15,000+",
        icon: Users,
        description: "Scaled distributed systems"
    },
    {
        label: "System Uptime",
        value: "99.9%",
        icon: Zap,
        description: "High availability architecture"
    },
    {
        label: "Response Time",
        value: "<200ms",
        icon: Clock,
        description: "Optimized API performance"
    },
    {
        label: "Years Experience",
        value: "4+",
        icon: Trophy,
        description: "Full-stack development"
    }
]

export function Achievements() {
    return (
        <section id="achievements" className="container py-20">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <Card className="glass border-white/10 text-center hover:border-primary/50 transition-colors">
                            <CardContent className="flex flex-col items-center p-6">
                                <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                                    <stat.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-4xl font-bold tracking-tighter text-foreground">{stat.value}</h3>
                                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
                                <p className="text-xs text-muted-foreground/60 mt-1">{stat.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
