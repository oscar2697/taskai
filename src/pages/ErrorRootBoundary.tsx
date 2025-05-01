/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import { pageNotFound } from "@/assets"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { isRouteErrorResponse, Link, useRouteError } from "react-router"

const ErrorRootBoundary = () => {
    const error = useRouteError()

    return (
        <div className="min-h-[100dvh] flex flex-col">
            <Header />

            <div className="grow container flex flex-col justify-center items-center pt-32 pb-12">
                <h1 className="text-2xl font-semibold text-center sm:text-4xl">
                    {isRouteErrorResponse(error) ? "Hmmm...I think that page doesn't exist" : 'Something went wrong'}
                </h1>

                <p className="text-muted-foreground max-w-[55ch] text-center mt-4 mb-6 sm:tex-lg">
                    {isRouteErrorResponse(error) ? 'Get back on track by going to the home page' : 'Please try again later'}
                </p>

                <div className="flex gap-2">
                    <Button
                        asChild
                    >
                        <Link to='/'>Return to Home</Link>
                    </Button>

                    <Button
                        asChild
                        variant='ghost'
                    >
                        <Link to='/app/inbox'>View Inbox</Link>
                    </Button>
                </div>

                <figure className="mt-10">
                    <img 
                        src={pageNotFound}
                        alt="404"
                        width={560}
                        height={373}
                    />
                </figure>
            </div>

            <Footer />
        </div>
    )
}

export default ErrorRootBoundary
