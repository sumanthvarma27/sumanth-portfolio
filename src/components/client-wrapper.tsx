"use client"

import * as React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { useKonamiCode } from "@/hooks/use-konami-code"
import { AiAssistant } from "@/components/ai/AiAssistant"

export function ClientWrapper({ children }: { children: React.ReactNode }) {
    useKonamiCode()

    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >
            {children}
            <ScrollToTop />
            <AiAssistant />
        </ThemeProvider>
    )
}
