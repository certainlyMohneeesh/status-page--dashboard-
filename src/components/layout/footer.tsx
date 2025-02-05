import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Status Dashboard. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="link" size="sm">Terms</Button>
            <Separator orientation="vertical" className="h-4" />
            <Button variant="link" size="sm">Privacy</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
