import React from 'react'

export default function CreateTodo({ }) {
    return (
        <form onSubmit={e => e.preventDefault()}>

            <div>
                <label htmlFor="create-title">Todo Item Title:</label>
                <input type="text" name="create-title" id="create-title" />
            </div>

            <textarea />
            <input type="submit" value="Create" />
        </form>
    )
}
