import { DocsSidebarNav } from "@/components/sidebar-nav"
import { ScrollArea } from "@/components/ui/scroll-area"
import { docsConfig } from "@/config/docs"

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="border-b">
      <div className="flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-10  border-border">  
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block border-r border-border">  
          <ScrollArea className="h-full">
            <DocsSidebarNav items={docsConfig} />
          </ScrollArea>
        </aside>
        <div className="w-full container">
          {children}
        </div>
      </div>
    </div>
  )
}