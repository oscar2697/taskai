/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import { Outlet } from "react-router"
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/AppSidebar"
import { TooltipProvider } from "@/components/ui/tooltip"

const AppLayout = () => {
    return (
        <SidebarProvider>
            <TooltipProvider 
                delayDuration={500}
                disableHoverableContent
            > 
                <AppSidebar />
                <SidebarTrigger />
                <Outlet />
            </TooltipProvider>
        </SidebarProvider>
    )
}

export default AppLayout
