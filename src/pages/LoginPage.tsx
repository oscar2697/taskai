/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import Head from "@/components/Head"
import { SignIn } from "@clerk/clerk-react"

const LoginPage = () => {
    return (
        <>
            <Head title="Log In to Task AI" />

            <section>
                <div className="container flex justify-center">
                    <SignIn signUpUrl="/register" />
                </div>
            </section>
        </>
    )
}

export default LoginPage
