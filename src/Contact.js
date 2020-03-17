import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Contact() {
    let history = useHistory();

    return (
        <div>
            <h1>SECTION CONTACT</h1>
            <button onClick={() => history.push('/')}>Go To racine</button>
        </div>
    )
}
