"use client"

import { useEffect, useState } from "react"

export function useKonamiCode() {
    const [input, setInput] = useState<string[]>([])
    const sequence = [
        "ArrowUp",
        "ArrowUp",
        "ArrowDown",
        "ArrowDown",
        "ArrowLeft",
        "ArrowRight",
        "ArrowLeft",
        "ArrowRight",
        "b",
        "a",
    ]

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const newInput = [...input, e.key]
            if (newInput.length > sequence.length) {
                newInput.shift()
            }
            setInput(newInput)

            if (newInput.join("") === sequence.join("")) {
                // Trigger Easter Egg
                alert("🚀 Konami Code Activated! Infinite Lives Granted! (Just kidding, but cool find!)")
                setInput([])
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [input])
}
