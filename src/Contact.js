import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'

export default function Contact() {
    let history = useHistory();
    // Utilisation du location pour recevoir un state par un Link
    let location = useLocation();
    return (
        <div>
            <h1>SECTION CONTACT</h1>
            <button onClick={() => history.push('/')}>Go To racine</button>
            {location.state !== null ? (<div>{location.state.nomDuProjet}</div>) : null }
        </div>
    )
}
