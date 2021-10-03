import React, { useState } from 'react'

export default function CreateTodo({ user, dispatch }) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)
    const [dateCompleted, setDateCompleted] = useState('')

    function handleTitle(evt) { setTitle(evt.target.value) }
    function handleDescription(evt) { setDescription(evt.target.value) }


    return (

        <form onSubmit={e => { e.preventDefault(); dispatch({ type: "CREATE_TODO", title, description, dateCreated: Date(Date.now()).toString(), completed, dateCompleted }); }}>

            <div>Author: <b>{user}</b></div>

            <div>
                <label htmlFor="create-title">Todo Item Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" required/>
            </div>

            <textarea value={description} onChange={handleDescription} />
            <input type="submit" value="Create" />

            <div>
                <label> Already Completed? Click Here!
                    <input type="checkbox" name="box-id" value={completed} checked={completed} onClick={e => {
                        setCompleted(!completed)
                        if (completed === true) {
                            setDateCompleted('');
                        } else {
                            setDateCompleted(Date(Date.now()).toString());
                        }
                    }} />
                </label>
            </div>
        </form>
    )
}
