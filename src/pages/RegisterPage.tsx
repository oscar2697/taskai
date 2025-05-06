/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import Head from "@/components/Head"
import { SignUp } from "@clerk/clerk-react"

const RegisterPage = () => {
    return (
        <>
            <Head title="Create an account" />

            <section>
                <div className="container flex justify-center">
                    <SignUp signInUrl="/login" />
                </div>
            </section>
        </>
    )
}

export default RegisterPage
