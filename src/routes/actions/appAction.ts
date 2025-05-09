/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import { Task } from "@/types";
import type { ActionFunction } from "react-router";

const createTask = async (data: Task) => {
    try {
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

const appAction: ActionFunction = async ({request}) => {
    const data = await request.json() as Task

    if (request.method === 'POST') {
        return await createTask(data)
    }
}

export default appAction