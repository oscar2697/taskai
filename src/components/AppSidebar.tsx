/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from "react-router"
import Logo from "./Logo"
import { UserButton } from "@clerk/clerk-react"
import { ChevronRight, CirclePlus, Plus } from "lucide-react"
import { SIDEBAR_LINKS } from "@/constants"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./ui/collapsible"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import TaskFormDialog from "./TaskFormDialog"

const AppSidebar = () => {
    return (
        <Sidebar>
            <SidebarHeader>
                <Link
                    to='/app/inbox'
                >
                    <Logo />
                </Link>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <TaskFormDialog>
                                    <SidebarMenuButton className="!text-primary">
                                        <CirclePlus /> Add a New Task
                                    </SidebarMenuButton>
                                </TaskFormDialog>
                            </SidebarMenuItem>

                            {SIDEBAR_LINKS.map((item, index) => (
                                <SidebarMenuItem key={index}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.href}>
                                            <item.icon />

                                            <span>{item.label} </span>
                                        </Link>
                                    </SidebarMenuButton>

                                    <SidebarMenuBadge>0</SidebarMenuBadge>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarGroup>
                        <SidebarGroupLabel
                            asChild
                            className="text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        >
                            <CollapsibleTrigger>
                                <ChevronRight className="me-2 transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                Projects
                            </CollapsibleTrigger>
                        </SidebarGroupLabel>

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <SidebarGroupAction aria-label='Add a Project'>
                                    <Plus />
                                </SidebarGroupAction>
                            </TooltipTrigger>

                            <TooltipContent side="right">Add a new Project</TooltipContent>
                        </Tooltip>

                        <CollapsibleContent>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    <SidebarMenuItem>
                                        <p className="text-muted-foreground text-sm p-2">Click to add new Project</p>
                                    </SidebarMenuItem>
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </CollapsibleContent>
                    </SidebarGroup>
                </Collapsible>

            </SidebarContent>

            <SidebarFooter>
                <UserButton
                    showName
                    appearance={{
                        elements: {
                            rootBox: 'w-full',
                            userButtonTrigger: '!shadow-none w-full justify-start p-2 rounded-md hover:bg-sidebar-accent',
                            userButtonBox: '!flex-row-reverse shadow-none gap-2',
                            userButtonOuterIdentifier: 'ps-0',
                            popoverBox: 'pointer-events-auto'
                        }
                    }}
                />
            </SidebarFooter>
        </Sidebar>
    )
}

export default AppSidebar
