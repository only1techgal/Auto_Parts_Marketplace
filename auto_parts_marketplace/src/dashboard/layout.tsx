'use client'

import { Sidebar } from '@/components/sidebar'
import { 
  TooltipProvider, 
  Tooltip, 
  TooltipContent, 
  TooltipTrigger 
} from '@/components/ui/tooltip'
import { 
  LayoutDashboard, 
  Settings, 
  HelpCircle 
} from 'lucide-react'
import { useState } from 'react'

export default function DashboardLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  // State to manage sidebar collapse
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  // Toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar with conditional width based on collapse state */}
      <Sidebar 
        collapsed={isSidebarCollapsed} 
        onToggle={toggleSidebar} 
      />

      {/* Main content area with flexible layout */}
      <main className={`
        flex-1 
        overflow-y-auto 
        transition-all 
        duration-300 
        ease-in-out
        ${isSidebarCollapsed ? 'ml-[72px]' : 'ml-[240px]'}
      `}>
        {/* Top navigation/header area */}
        <header className="
          sticky 
          top-0 
          z-40 
          flex 
          h-16 
          items-center 
          gap-4 
          border-b 
          bg-background 
          px-4 
          md:px-6
        ">
          <nav className="flex items-center space-x-4 lg:space-x-6 ml-auto">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <LayoutDashboard className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </TooltipTrigger>
                <TooltipContent>Dashboard</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Settings className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </TooltipTrigger>
                <TooltipContent>Settings</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <HelpCircle className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </TooltipTrigger>
                <TooltipContent>Help & Support</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </nav>
        </header>

        {/* Render the child pages/components */}
        <div className="p-4 md:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}