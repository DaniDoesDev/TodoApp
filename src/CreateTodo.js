import React, { useState, useContext, useEffect } from 'react'
import { StateContext } from './contexts'
import { useResource } from 'react-request-hook'

export default function CreateTodo() {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)
    const [dateCompleted, setDateCompleted] = useState('')

    function handleTitle(evt) { setTitle(evt.target.value) }
    function handleDescription(evt) { setDescription(evt.target.value) }

    const [todo , createTodo ] = useResource(({ title, description, dateCreated, completed, dateCompleted, author }) => ({
        url: '/todo',
        method: 'post',
        headers: {"Authorization": `${state.user.access_token}`},
        data: { title, description, dateCreated, completed, dateCompleted, author }
    }))


    //     const [post , createPost ] = useResource(({ title, content, author }) => ({
    //             url: '/post',
    //             method: 'post',
    //             headers: {"Authorization": `${state.user.access_token}`},
    //             data: { title, content, author }
    //         }))


    const {state, dispatch} = useContext(StateContext)
    const { user } = state

    function handleCreate () {
        createTodo({ title, description, dateCreated: Date(Date.now()).toString(), completed, dateCompleted, author: user.username })
    }

    useEffect(() => {
        if (todo && todo.isLoading === false && todo.data) {
            dispatch({type: "CREATE_TODO", title: todo.data.title, description: todo.data.description, dateCreated: todo.data.dateCreated, completed: todo.data.completed, dateCompleted: todo.data.dateCompleted, id: todo.data.id, author: user.username })
        }
    }, [todo])


    return (

        <form onSubmit={e => { e.preventDefault(); handleCreate(); }}>

            <div>Author: <b>{user.username}</b></div>

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
