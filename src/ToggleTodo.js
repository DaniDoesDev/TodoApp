import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from './contexts'
import { useResource } from 'react-request-hook'

export default function ToggleTodo() {

    const { state, dispatch } = useContext(StateContext)
    const [id, setId] = useState()
    const [completed, setCompleted] = useState()
    const [dateCompleted, setDateCompleted] = useState()

    const { todos } = state

    function handleId(evt) { setId(evt.target.value) }

    const [todo, toggleTodo] = useResource(({ id, completed, dateCompleted }) => ({
        url: `/todos/${parseInt(id)}`,
        method: 'patch',
        data: { id, completed, dateCompleted }
    }))

    function handleToggle(targetId) {
        const todoToUpdate = todos.find(todo => todo.id === targetId)

        todoToUpdate.completed = !todoToUpdate.completed
        if (todoToUpdate.completed) {
            todoToUpdate.dateCompleted = Date(Date.now()).toString();
        } else {
            todoToUpdate.dateCompleted = "";
        }
        
        toggleTodo({ ...todoToUpdate });
    }

    useEffect(() => {
        if (todo && todo.data && todo.isLoading === false) {
            dispatch({type: "TOGGLE_TODO", id: todo.id, completed: todo.completed, dateCompleted: todo.dateCompleted });
        }
    }, [todo])

    return (
        <form onSubmit={e => { e.preventDefault(); handleToggle(parseInt(id)) }}>

            <div>
                <label htmlFor="toggle-id">Todo Item ID To Be Toggled:</label>
                <input type="text" value={id} onChange={handleId} name="toggle-id" id="toggle-id" />
                <input type="submit" value="Toggle" />
            </div>
        </form>
    )
}