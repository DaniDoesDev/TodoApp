import React, {useState, useReducer} from 'react'
import appReducer from './reducers'

export default function ToggleTodo({dispatch}) {

    const [title, setTitle] = useState('')

    function handleTitle(evt) { setTitle(evt.target.value) }

    return (
        <form onSubmit={e => { e.preventDefault(); dispatch({ type: "TOGGLE_TODO", title}); }}>

            <div>
                <label htmlFor="toggle-title">Todo Item Title To Be Toggled, case sensitive:</label>
                <input type="text" value={title} onChange={handleTitle} name="toggle-title" id="toggle-title" />
                <input type="submit" value="Toggle" />
            </div>

            

        </form>

    )
}