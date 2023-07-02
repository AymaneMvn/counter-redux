import React, { useState } from "react"

export default function Header() {
    
    /**
     * Challenge:
     * Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */
    const [user, setUser] = useState("Joy");
    
    return (
        <header>
            <p>Current user: {user}</p>
        </header>
    )
}
