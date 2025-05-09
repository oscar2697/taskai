/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import AppLayout from "@/layouts/AppLayout"
import RootLayout from "@/layouts/RootLayout"
import AuthSyncPage from "@/pages/AuthSyncPage"
import ErrorRootBoundary from "@/pages/ErrorRootBoundary"
import HomePage from "@/pages/HomePage"
import InboxPage from "@/pages/InboxPage"
import LoginPage from "@/pages/LoginPage"
import RegisterPage from "@/pages/RegisterPage"
import { createBrowserRouter } from "react-router"
import type { RouteObject } from "react-router"
import appAction from "./actions/appAction"

const rootRouteChildren: RouteObject[] = [
    {
        index: true,
        element: <HomePage />
    },
    {
        path: 'register',
        element: <RegisterPage />
    },
    {
        path: 'login',
        element: <LoginPage />
    },
    { 
        path: 'auth-sync',
        element: <AuthSyncPage />
    }
]

const appRouteChildren: RouteObject[] = [
    {
        path: 'inbox',
        element: <InboxPage />
    }
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement:<ErrorRootBoundary /> ,
        children: rootRouteChildren
    },
    {
        path: '/app',
        element: <AppLayout />,
        children: appRouteChildren,
        action: appAction
    }
])

export default router
