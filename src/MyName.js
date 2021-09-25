import React, { useState } from 'react';

export default function MyName() {
    const [name, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    function handleFirstNameChange(evt) {
        setFirstName(evt.target.value)
    }

    function handleLastNameChange(evt) {
        setLastName(evt.target.value)
    }

    return (
        <div>
            <h1>Hello {name} {lastName} </h1>
            <input type="text" value={name} onChange={handleFirstNameChange} />
            <input type="text" value={lastName} onChange={handleLastNameChange} />
        </div>
    )
}
