import React, { useEffect, useContext } from 'react'
import { StateContext } from '../contexts'
import { useResource } from 'react-request-hook'
import UserList from '../UserList'
import { Link } from 'react-navi'

export default function UsersPage () {

    const { state, dispatch } = useContext(StateContext)
    // const [users, getUsers] = useResource(() => ({
    //   url: '/users',
    //   method: 'get'
    // }))

    const [users, getUsers] = useResource(() => ({
      url: '/auth',
      method: 'get'
  }))

    // const { state, dispatch } = useContext(StateContext)
    // const [users, getUsers] = useResource(() => ({
    //   url: 'auth/users',
    //   method: 'get',
    //   headers: {"Authorization": `${state.user.access_token}`},
    // }))

    useEffect(getUsers, [])

    useEffect(() => {
      if (users && users.data) {
        dispatch({ type: 'FETCH_USERS', users: users.data.users })
      }
    }, [users])


    const { data, isLoading } = users;
    return (
        <>
          {isLoading && 'Users loading...'} <UserList />
          <div><Link href="/">Go back to homepage</Link></div>
        </>
    )
} 