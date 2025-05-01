/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import RootLayout from "@/layouts/RootLayout"
import ErrorRootBoundary from "@/pages/ErrorRootBoundary"
import HomePage from "@/pages/HomePage"
import { createBrowserRouter } from "react-router"
import type { RouteObject } from "react-router"

const rootRouteChildren: RouteObject[] = [
    {
        index: true,
        element: <HomePage />
    }
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement:<ErrorRootBoundary /> ,
        children: rootRouteChildren
    }
])

export default router
