"use client"

import * as React from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
    { name: "About", href: "#about" },
    { name: "Toolkit", href: "#skills" }, // Renaming Skills to Toolkit matches common portfolios
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Honors", href: "#honors" },
    { name: "Contact", href: "#contact" },
]

export function Navbar() {
    const { setTheme, theme } = useTheme()
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <nav className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm transition-all duration-300 border-b border-border/40">
            <div className="container mx-auto flex items-center justify-between px-6 py-6">
                <a href="#" className="text-2xl font-bold tracking-tight text-white hover:text-primary transition-colors">
                    Sumanth<span className="text-primary">.</span> {/* Updated per user request */}
                </a>

                {/* Desktop Nav */}
                <div className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="flex items-center gap-4">
                        {/* Hidden Theme Toggle for now if user wants forced Dark, but keeping functionality */}
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                            className="rounded-full text-muted-foreground hover:text-white"
                        >
                            <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                            <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                            <span className="sr-only">Toggle theme</span>
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="rounded-full"
                    >
                        <Sun className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                        <Moon className="absolute h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-foreground focus:outline-none"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="border-b border-border bg-background md:hidden"
                    >
                        <div className="flex flex-col space-y-6 p-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-semibold uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
