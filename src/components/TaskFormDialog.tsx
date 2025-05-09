/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import { PropsWithChildren, useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog"
import TaskForm from "./TaskForm"
import { useFetcher, useLocation } from "react-router"
import { startOfToday } from "date-fns"

const TaskFormDialog: React.FC<PropsWithChildren> = ({ children }) => {
    const [open, setOpen] = useState(false)
    const location = useLocation()
    const fecther = useFetcher()

    return (
        <Dialog
            open={open}
            onOpenChange={setOpen}
        >
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>

            <DialogContent className="p-0 border-0 !rounded-xl">
                <TaskForm 
                    defaultFormData={{
                        content: '',
                        due_date: location.pathname === '/app/today' ? startOfToday() : null,
                        project: null
                    }}
                    mode="create"
                    onCancel={() => setOpen(false)}
                    onSubmit={(FormData) => {
                        fecther.submit(JSON.stringify(FormData), {
                            action: '/app',
                            method: 'POST',
                            encType: 'application/json'
                        })
                        setOpen(false)
                    }}
                />
            </DialogContent>
        </Dialog>
    )
}

export default TaskFormDialog
