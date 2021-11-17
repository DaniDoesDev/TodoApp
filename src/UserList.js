import React, { useContext } from 'react';
import User from './User';
import { StateContext } from './contexts'

export default function UserList() {
    const {state} = useContext(StateContext)
    const {users} = state;

    console.log(users);

    return (
        <div>
            {users.map((p, i) => <User {...p} username={p.username} id={p._id} key={'user-' + i} />)}
        </div>
    )
}