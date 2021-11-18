import React, { useEffect, useContext } from 'react'
import { StateContext } from '../contexts'
import { useResource } from 'react-request-hook'
import UserList from '../UserList'
import { Link } from 'react-navi'

export default function UsersPage () {

    const { state, dispatch } = useContext(StateContext)
    const [users, getUsers] = useResource(() => ({
      url: '/auth',
      headers: {"Authorization": `${state.user.access_token}`},
      method: 'get'
  }))

    useEffect(getUsers, [])

    useEffect(() => {
      if (users && users.data && users.isLoading === false) {
        console.log("SENDING A FETCH USER DISPATCH")
        dispatch({ type: 'FETCH_USERS', users: users.data.users })
      }
    }, [users])


    const { data, isLoading } = users;
    return (
        <>
          {isLoading && 'Users loading...'} <UserList users={data}/>
          <div><Link href="/">Go back to homepage</Link></div>
        </>
    )
} 