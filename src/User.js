import React from 'react';
import { Link } from 'react-navi';

export default function User({ username, id }) {

    return (
        <div>
            <Link href={`${username}`}> {username} </Link>
            {/* <div>User Unique ID: {id}</div> */}
            <br></br>
        </div>
    )
}