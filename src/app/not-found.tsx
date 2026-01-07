import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
            <h1 className="text-9xl font-bold text-primary/20">404</h1>
            <h2 className="mt-4 text-3xl font-bold tracking-tighter">Page Not Found</h2>
            <p className="mt-4 max-w-[500px] text-muted-foreground">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <Button asChild className="mt-8" size="lg">
                <Link href="/">Back to Home</Link>
            </Button>
        </div>
    )
}
