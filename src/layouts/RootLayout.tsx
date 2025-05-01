/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Outlet } from "react-router"

const RootLayout = () => {
    return (
        <>
            <div className="min-h-[100dvh] flex flex-col overflow-hidden">
                <Header />

                <main className="grow grid grid-cols-1 items-center pt-36 pb-16">
                    <Outlet />
                </main>

                <Footer />
            </div>
        </>
    )
}

export default RootLayout
