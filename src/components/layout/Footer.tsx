"use client"

import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background/50 py-12 backdrop-blur-md">
            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-6 mb-8">
                    {/* Replace hrefs with actual links */}
                    <a
                        href="https://github.com/sumanthvarma27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-secondary p-3 text-secondary-foreground transition-transform hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    >
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/sumanthvarma27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-secondary p-3 text-secondary-foreground transition-transform hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    >
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                        href="mailto:varmasumanth009@gmail.com"
                        className="rounded-full bg-secondary p-3 text-secondary-foreground transition-transform hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    >
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                    </a>
                </div>
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Sumanth Varma. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
