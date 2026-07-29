import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Toaster } from "@/components/ui/sonner"

import { AppSidebar } from "./app-sidebar"
// component_gross: ChartAreaInteractive removido — módulo inteiro de UI ausente
import { DataTable } from "./data-table"
import { SectionCards } from "./section-cards"
import { SiteHeader } from "./site-header"

import data from "./data.json"

/**
 * Dashboard variant: v0 (baseline).
 *
 * Faithful port of the shadcn/ui dashboard example from
 * `data/dataset_shadcn/examples/dashboard/code_files/` (Next.js → Vite SPA).
 *
 * Adaptations vs. source:
 *  - removed `"use client"` directives (Vite is client-only).
 *  - imports `@/components/app-sidebar` etc. became local relative imports
 *    (full duplication per directory, per convention D1).
 *  - <Toaster /> mounted here because there is no global layout to host it.
 *
 * To create a sibling variant for the discrimination experiment, copy this
 * directory to `src/examples/dashboard/<new>/` and apply the controlled
 * perturbation there. Register the route in `src/App.tsx`.
 */
export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              {/* component_gross: seção do gráfico removida — ChartAreaInteractive ausente */}
              <DataTable data={data} />
            </div>
          </div>
        </div>
      </SidebarInset>
      <Toaster />
    </SidebarProvider>
  )
}
