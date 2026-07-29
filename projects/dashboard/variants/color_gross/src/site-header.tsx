import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function SiteHeader() {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Documents</h1>
        {/* color_gross: bg-primary → bg-[#C74AE2] (magenta) — ΔE >> 30 CIEDE2000; token semântico substituído por valor hardcoded de matiz completamente diferente */}
        <div className="ml-auto flex items-center gap-2">
          <Button size="sm" className="bg-[#C74AE2] text-white hover:bg-[#b03fcc]">
            Quick Create
          </Button>
        </div>
      </div>
    </header>
  )
}
