import React, { useContext, useEffect } from 'react';
import { Link } from 'react-navi'
import { Card, Button } from 'react-bootstrap'
import { StateContext } from './contexts'
import { useResource } from 'react-request-hook'

export default function Todo({ title, description, dateCreated, completed, dateCompleted, _id, author }) {


    const { state, dispatch } = useContext(StateContext)
    const { user } = state

    const [deletedTodo, deleteTodo] = useResource((_id) => ({
        url: `/todo/${_id}`,
        method: "delete",
        headers: { "Authorization": `${state.user.access_token}` },
        data: {
            username: user.username,
            author: author
        }
    }));

    const [toggledTodo, toggleTodo] = useResource((_id, completed) => ({
        url: `/todo/${_id}`,
        method: "patch",
        headers: { "Authorization": `${state.user.access_token}` },
        data: {
            completed: completed,
            dateCompleted: Date(Date.now()).toString(),
            username: user.username,
            author: author
        }
    }));

    useEffect(() => {
        if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
            const deleteId = deletedTodo.data._id;
            dispatch({ type: 'DELETE_TODO', id: deleteId })
        }
    }, [deletedTodo])

    useEffect(() => {
        if (toggledTodo && (toggledTodo.data || toggledTodo.error) && toggledTodo.isLoading === false) {
            if (toggledTodo.error) {
                console.log("GOT AN ERROR BACK FROM TOGGLE TODO")
            } else {
                console.log(toggledTodo.data.completed)
                console.log(toggledTodo.data.dateCompleted)
                dispatch({ type: 'TOGGLE_TODO', completed: toggledTodo.data.completed, dateCompleted: toggledTodo.data.dateCompleted, id: _id })
            }
        }
    }, [toggledTodo])

    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}
                </Card.Title>
                <Card.Subtitle>
                    <i>Written by <b>{author}</b></i>
                </Card.Subtitle>
                <Card.Text>
                    <div>{description}</div>
                    <div>Todo ID: {_id}</div>
                    <div> Date created: {dateCreated} </div>
                    <div> {completed && <text> Date completed: {dateCompleted} </text>}</div>
                    <label> Completed? <b/>
                        <input type="checkbox" checked={completed} onChange={e => {
                            toggleTodo(_id, e.target.checked)
                        }} />
                    </label>
                </Card.Text>
                <Button variant="primary" onClick={(e) => { deleteTodo(_id) }}>Delete Todo</Button>
                <p />
                <Link href={`/users/${author}`}>View {author}'s page</Link>
            </Card.Body>
        </Card>
    )
}


