/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import { useAuth } from "@clerk/clerk-react"
import { useEffect } from "react"
import { useNavigate } from "react-router"


const AuthSyncPage = () => {
    const navigate = useNavigate()
    const { isSignedIn, isLoaded, userId } = useAuth()

    useEffect(() => {
        if(!isLoaded) return

        if(!isSignedIn) {
            if(localStorage.getItem('clerkUserId')) {
                localStorage.removeItem('clerkUserId')
            }
            
            navigate('/')
            return
        }

        if(isSignedIn) {
            localStorage.setItem('clerkUserId', userId)
            navigate('/app/today')
        }
    }, [isSignedIn, isLoaded, userId])


    return (
        <>

        </>
    )
}

export default AuthSyncPage

