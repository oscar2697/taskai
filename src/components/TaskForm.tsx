/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import { CalendarIcon, ChevronDown, Hash, Inbox, SendHorizonal, X } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { Textarea } from "./ui/textarea"
import { Calendar } from "./ui/calendar"
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip"
import { Separator } from "./ui/separator"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "./ui/command"
import { ScrollArea } from "./ui/scroll-area"
import type { TaskForm } from "@/types"
import { ClassValue } from "clsx"
import { useCallback, useEffect, useState } from "react"
import { cn, formatCustomDate, getTaskDueDateColorClass } from "@/lib/utils"
import * as chrono from 'chrono-node'

type TaskFormProps = {
    defaultFormData?: TaskForm
    className?: ClassValue
    mode?: 'create' | 'edit'
    onCancel?: () => void
    onSubmit?: (formData: TaskForm) => void
}

const DEFAULT_FORM_DATA: TaskForm = {
    content: '',
    due_date: null,
    project: null
}

const TaskForm: React.FC<TaskFormProps> = ({ defaultFormData = DEFAULT_FORM_DATA, className, mode, onCancel, onSubmit }) => {
    const [tastContent, setTaskContent] = useState(defaultFormData.content)
    const [dueDate, setDueDate] = useState(defaultFormData.due_date)
    const [projectId, setProjectId] = useState(defaultFormData.project)
    const [projectName, setProjectName] = useState('')
    const [projectColorHex, setProjectColorHex] = useState('')
    const [dueDateOpen, setDueDateOpen] = useState(false)
    const [projectOpen, setProjectOpen] = useState(false)
    const [formData, setFormData] = useState(defaultFormData)

    useEffect(() => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            content: tastContent,
            due_date: dueDate,
            project: projectId
        }))
    }, [tastContent, dueDate, projectId])

    useEffect(() => {
        const chronoParsed = chrono.parse(tastContent)

        if(chronoParsed.length) {
            const lastDate = chronoParsed[chronoParsed.length - 1]
            setDueDate(lastDate.date())
        }
    }, [tastContent])

    const handleSubmit = useCallback(() => {
        if (!tastContent) return

        if (onSubmit) onSubmit(formData)

        setTaskContent('')
    }, [tastContent, onSubmit, formData])

    return (
        <Card className="focus-within:border-foreground/30">
            <CardContent className="p-2">
                <Textarea
                    className="!border-0 !ring-0 mb-2 p-1"
                    placeholder="What do you want to do?"
                    autoFocus
                    value={tastContent}
                    onInput={(e) => setTaskContent(e.currentTarget.value)}
                />

                <div className="ring-1 ring-border rounded-md max-w-max">
                    <Popover
                        open={dueDateOpen}
                        onOpenChange={setDueDateOpen}
                    >
                        <PopoverTrigger asChild>
                            <Button
                                type="button"
                                variant='ghost'
                                size='sm'
                                className={cn(getTaskDueDateColorClass(dueDate, false))}
                            >
                                <CalendarIcon />
                                {dueDate ? formatCustomDate(dueDate) : 'Due Date'}
                            </Button>
                        </PopoverTrigger>

                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                disabled={{ before: new Date() }}
                                initialFocus
                                onSelect={(selected) => {
                                    setDueDate(selected || null)
                                    setDueDateOpen(false)
                                }}
                            />
                        </PopoverContent>
                    </Popover>

                    {dueDate && (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant='ghost'
                                    size='sm'
                                    className="px-2 -ms-2"
                                    aria-label="Remove due date"
                                    onClick={() => setDueDate(null)}
                                >
                                    <X />
                                </Button>
                            </TooltipTrigger>

                            <TooltipContent>Remove Due date</TooltipContent>
                        </Tooltip>
                    )}

                </div>
            </CardContent>

            <Separator />

            <CardFooter className="grid grid-cols-[minmax(0,1fr), max-content] gap-2 p-2">
                <Popover
                    open={projectOpen}
                    onOpenChange={setProjectOpen}
                    modal
                >
                    <PopoverTrigger asChild>
                        <Button
                            variant='ghost'
                            role="combobox"
                            aria-expanded={projectOpen}
                            className="max-w-max"
                        >
                            <Inbox />
                            Inbox
                            <ChevronDown />
                        </Button>
                    </PopoverTrigger>

                    <PopoverContent
                        className="w-[240px] p-0"
                        align="start"
                    >
                        <Command>
                            <CommandInput placeholder="Search a project" />

                            <CommandList>
                                <ScrollArea>
                                    <CommandEmpty>No project found.</CommandEmpty>

                                    <CommandGroup>
                                        <CommandItem>
                                            <Hash />
                                            Project 1
                                        </CommandItem>
                                    </CommandGroup>
                                </ScrollArea>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>

                <div className="flex itams-center gap-2">
                    <Button
                        variant='secondary'
                        onClick={onCancel}
                    >
                        <span className="max-md:hidden">Cancel</span>
                        <X className="max-md:hidden" />
                    </Button>

                    <Button
                        disabled={!tastContent}
                        onClick={handleSubmit}
                    >
                        <span className="max-md:hidden">
                            {mode === 'create' ? 'Create Task' : 'Save'}
                        </span>

                        <SendHorizonal className="max-md:hidden" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default TaskForm
