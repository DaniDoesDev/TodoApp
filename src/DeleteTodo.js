import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from './contexts'
import { useResource } from 'react-request-hook'

export default function DeleteTodo() {

    const {dispatch} = useContext(StateContext)
    const [id, setId] = useState()

    function handleId(evt) { setId(evt.target.value) }

    const [todo , deleteTodo ] = useResource(({ id }) => ({
        url: `/todos/${parseInt(id)}`,
        method: 'delete',
        data: { id } 
    }))

    function handleDelete () {
        deleteTodo({ id })
    }

    useEffect(() => {
        var idNum = parseInt(id);
        dispatch({ type: "DELETE_TODO", id: parseInt(id) })
    }, [todo])

    return (
        <form onSubmit={e => { e.preventDefault(); handleDelete(); }}>

            <div>
                <label htmlFor="delete-id">Todo Item ID To Be Deleted:</label>
                <input type="text" value={id} onChange={handleId} name="delete-id" id="delete-id" />
                <input type="submit" value="Delete" />
            </div>
        </form>
    )
}