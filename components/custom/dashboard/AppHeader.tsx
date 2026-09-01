import { SidebarTrigger } from '@/components/ui/sidebar'
import { Sidebar } from 'lucide-react'
import React from 'react'

const AppHeader = () => {
  return (
    <div className="w-full border-b p-4 flex justify-between items-center">
        <SidebarTrigger/>

    </div>
  )
}

export default AppHeader