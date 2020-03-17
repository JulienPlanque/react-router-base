import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <ul style={{ display: 'flex' }}>
            <Link to="/">
                <li style={{ marginLeft: 10, listStyle: 'none' }}>Accueil</li>
            </Link>
            <Link to="/Projets">
                <li style={{ marginLeft: 10, listStyle: 'none' }}>Projets</li>
            </Link>
            <Link to="/Contact">
                <li style={{ marginLeft: 10, listStyle: 'none' }}>Contact</li>
            </Link>
        </ul>
    )
}
