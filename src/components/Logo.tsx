/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import { logo } from "@/assets"

const Logo = () => {
    return (
        <div className="flex items-center ga-3 font-semibold text-lg">
            <img
                src={logo}
                alt="logo"
                className="w-6 h-6"
            />

            Task AI
        </div>
    )
}

export default Logo
