import React, { useContext } from 'react';
import User from './User';

export default function UserList({ users = [] }) {

    return (
        <div>
            {users.map((p, i) => <User {...p} key={'user-' + i} />)}
        </div>
    )
}