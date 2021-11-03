import React, { useContext } from 'react';
import Todo from './Todo';

import { StateContext } from './contexts';

export default function TodoList({ todos = [] }) {
    // const {state} = useContext(StateContext)
    // const {todos} = state;

    return (
        <div>
            {todos.map((p, i) => <Todo {...p} key={'post-' + i} />)}
        </div>
    )
}
