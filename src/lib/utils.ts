/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import { clsx, type ClassValue } from "clsx"
import { formatRelative, isSameYear, format, isBefore, startOfDay, startOfToday, isToday, isTomorrow } from "date-fns"
import { twMerge } from "tailwind-merge"

export function toTitleCase(str: string) {
  return str[0].toUpperCase() + str.slice(1)
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCustomDate(date: string | number | Date) {
  const today = new Date()
  const relativeDay = toTitleCase(formatRelative(date, today).split(' at ')[0])

  const relativeDays = ['Today', 'Tomorrow', 'Yesterday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  if(relativeDays.includes(relativeDay)) {
    return relativeDay
  }

  if(isSameYear(date, today)) {
    return format(date, 'dd MMM')
  } else {
    return format(date, 'dd MMM yyyy')
  }
}

export function getTaskDueDateColorClass(dueDate: Date | null, completed?: boolean): string | undefined {
  if (dueDate === null || completed === undefined) return

  if(isBefore(dueDate, startOfToday()) && !completed) {
    return 'text-red-500'
  }

  if (isToday(dueDate)) {
    return 'text-emerald-500'
  }

  if(isTomorrow(dueDate) && !completed) {
    return 'text-amber-500'
  }
}