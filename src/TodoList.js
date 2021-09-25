import React from 'react';
import Todo from './Todo';

export default function TodoList({ posts = [] }) {
    return (
        <div>
            {posts.map((p, i) => <Todo {...p} key={'post-' + i} />)}
        </div>
    )
}
