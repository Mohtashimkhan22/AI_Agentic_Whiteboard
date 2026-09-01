import AppHeader from '@/components/custom/dashboard/AppHeader'
import { AppSidebar } from '@/components/custom/dashboard/AppSideBar'
import { SidebarProvider, SidebarTrigger,  } from '@/components/ui/sidebar'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

const DashboardLayout = ({ children } : { children: React.ReactNode }) => {
  return (
        <SidebarProvider>
            <AppSidebar />

            <div className="flex flex-col flex-1">
                <AppHeader />
                {children}
            </div> 
        </SidebarProvider>
  )
}

export default DashboardLayout