import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from './contexts'
import { useResource } from 'react-request-hook'

export default function ToggleTodo() {

    const {state, dispatch} = useContext(StateContext)
    const [id, setId] = useState()
    const [completed, setCompleted] = useState()
    const [dateCompleted, setDateCompleted] = useState()

    const { todos } = state

    function handleId(evt) { setId(evt.target.value) }

    const [todo , toggleTodo ] = useResource(({ id , completed, dateCompleted }) => ({
        url: `/todos/${parseInt(id)}`,
        method: 'patch',
        data: { id, completed, dateCompleted } 
    }))

    // function handleToggle () {
    //     toggleTodo({ id, completed })
    // }

    //  useEffect(() => {
    //      dispatch({ type: "TOGGLE_TODO", id })
    //  }, [todo])

     function handleToggle( targetId ) {
        todos.forEach(function (todo) {
            if (todo.id === targetId) {
                setCompleted(todo.completed);
                setDateCompleted(todo.dateCompleted);
                toggleTodo( {id, completed, dateCompleted });
            }
          });
     }

    return (
        <form onSubmit={e => { e.preventDefault(); dispatch({ type: "TOGGLE_TODO", id: parseInt(id) }); handleToggle( parseInt(id) ) }}>

            <div>
                <label htmlFor="toggle-id">Todo Item ID To Be Toggled:</label>
                <input type="text" value={id} onChange={handleId} name="toggle-id" id="toggle-id" />
                <input type="submit" value="Toggle" />
            </div>
        </form>
    )
}