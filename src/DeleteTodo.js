import React, {useState, useReducer} from 'react'
import appReducer from './reducers'

export default function DeleteTodo({dispatch}) {

    const [title, setTitle] = useState('')

    function handleTitle(evt) { setTitle(evt.target.value) }

    return (
        <form onSubmit={e => { e.preventDefault(); dispatch({ type: "DELETE_TODO", title}); }}>

            <div>
                <label htmlFor="delete-title">Todo Item Title To Be Deleted, case sensitive:</label>
                <input type="text" value={title} onChange={handleTitle} name="delete-title" id="delete-title" />
                <input type="submit" value="Delete" />
            </div>

            

        </form>

    )
}