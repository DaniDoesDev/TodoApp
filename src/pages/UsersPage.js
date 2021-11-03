import React, { useEffect, useContext } from 'react'
import { StateContext } from '../contexts'
import { useResource } from 'react-request-hook'
import UserList from '../UserList'

export default function UsersPage () {

    const { state, dispatch } = useContext(StateContext)
    const [users, getUsers] = useResource(() => ({
      url: '/users',
      method: 'get'
    }))

    useEffect(getUsers, [])

    // useEffect(() => {
    //   if (users && users.data) {
    //     dispatch({ type: 'FETCH_USERS', users: users.data.reverse() })
    //   }
    // }, [users])


    const { data, isLoading } = users;
    return (
        <>
          {isLoading && 'Users loading...'} <UserList users = {data} />
        </>
    )
} 