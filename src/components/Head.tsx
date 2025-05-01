/**
 * @copyright 2025 Oscar Lindo
 * @license Apache-2.0
 * @description Constants for the app
 */

import { Helmet } from "react-helmet"

type HeadProps = {
    title: string
}

const Head: React.FC<HeadProps> = ({title}) => {
    return (
        <Helmet>
            <title>{title} </title>
        </Helmet>
    )
}

export default Head
