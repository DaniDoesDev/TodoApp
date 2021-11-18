import React, { useEffect, useContext } from 'react'
import { StateContext } from '../contexts'
import { useResource } from 'react-request-hook'
import TodoList from '../TodoList'
import CreateTodo from '../CreateTodo'
import { Link } from 'react-navi'

export default function ProfilePage({ author }) {

  const { state, dispatch } = useContext(StateContext)
  const { user } = state;

  const [todos, getTodos] = useResource(() => ({
    url: `/todo/${author}`,
    headers: { "Authorization": `${state.user.access_token}` },
    method: 'get'
  }))

  useEffect(getTodos, [author])

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: 'FETCH_TODOS', todos: todos.data.todos.reverse() })
    }
  }, [todos])

  function isAuthor(user) {
    return user === author ? true : false
  }

  const { data, isLoading } = todos;
  return (
    <>
      <h1 > {author}'s Todo Page </h1>
      {isAuthor(user.username) && <CreateTodo />} <br />
      {isLoading && 'Todos loading...'} <TodoList />
      <br />
      <div><Link href="/">Go back to homepage</Link></div>
    </>
  )
}