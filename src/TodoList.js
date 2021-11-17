import React, { useContext } from 'react';
import Todo from './Todo';
import { StateContext } from './contexts'

// export default function TodoList({ todos = [] }) {
    export default function TodoList() {
    const {state} = useContext(StateContext)
    const {todos} = state;

    return (
    //     <div>
    //    {posts.map((p, i) => <Post {...p} short={true} title={p.title} author={p.author} key={'post-' + i} postId={p.id}/>)}
    //   </div> 
        <div>
            {todos.map((p, i) => <Todo {...p} title={p.title} author={p.author} description={p.description} dateCreated={p.dateCreated} completed={p.completed} dateCompleted={p.dateCompleted} key={'post-' + i} _id={p._id}/>)}
        </div>
    )
}
