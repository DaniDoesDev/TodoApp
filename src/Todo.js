import React, {useContext, useEffect} from 'react';
import { Link } from 'react-navi'
import { Card , Button } from 'react-bootstrap'
import { StateContext } from './contexts'
import { useResource } from 'react-request-hook'

export default function Todo({ title, description, dateCreated, completed, dateCompleted, _id, author }) {


    const { state, dispatch } = useContext(StateContext)

    const [deletedTodo, deleteTodo] = useResource((_id) => ({
        url: `/todo/${_id}`,
        method: "delete",
        headers: {"Authorization": `${state.user.access_token}`}
    }));

    const [toggledTodo, toggleTodo] = useResource((_id, completed) => ({
        url: `/todo/${_id}`,
        method: "patch",
        headers: {"Authorization": `${state.user.access_token}`},
        data: {
            completed: completed,
            dateCompleted: Date.now()
        }
    }));

    useEffect(() => {
        if (deletedTodo && deletedTodo.data && deletedTodo.isLoading === false) {
            const deleteId = deletedTodo.data._id;
            dispatch({type: 'DELETE_TODO', id: deleteId})
        }
    }, [deletedTodo])

    useEffect(() => {
        if (toggledTodo && toggledTodo.data && toggledTodo.isLoading === false) {
            dispatch({type: 'TOGGLE_TODO', completed:toggledTodo.data.completed, completedOn:toggledTodo.data.completedOn, _id})
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
                    <div>
                        <label> Completed?
                            <input type="checkbox" name="box-id" value={completed} checked={completed} onChange={e => {
                                completed = !completed;
                            }} />
                        </label>
                    </div>
                    <div> {completed && <text> Date completed: {dateCompleted} </text>}</div>
                </Card.Text>
                <input type="checkbox" checked={completed} onChange={e => {toggleTodo(_id, e.target.checked)}} />
                <Button variant="link" onClick={(e) => {deleteTodo(_id)}}>Delete Post</Button>
                <Link href={`/users/${author}`}>View author page</Link>
            </Card.Body>
        </Card>

    )
}


