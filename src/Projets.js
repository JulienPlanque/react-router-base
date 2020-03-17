import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function Projets() {
    // Permet la récupération des paths params
    let { slug } = useParams()

    return (
        <div>
            <h1>SECTION PROJETS</h1>
            <p>Bienvenue dans le projet {slug}</p>
            <Link
                to={{
                    pathname: "/Contact",
                    state: {
                        nomDuProjet: slug
                    }
                }}
            >Go To Contact with some state</Link>
        </div>
    )
}
