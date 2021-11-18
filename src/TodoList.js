import React, { useContext } from 'react';
import Todo from './Todo';
import { StateContext } from './contexts'

export default function TodoList() {
    const { state } = useContext(StateContext)
    const { todos } = state;

    return (
        <div>
            {todos.map((p, i) => <Todo {...p} title={p.title} author={p.author} description={p.description} dateCreated={p.dateCreated} completed={p.completed} dateCompleted={p.dateCompleted} key={'post-' + i} _id={p._id} />)}
        </div>
    )
}
