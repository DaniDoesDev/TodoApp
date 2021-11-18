import TodoList from "../TodoList"
import React, { useEffect, useContext } from 'react'
import { StateContext } from '../contexts'
import { useResource } from 'react-request-hook'
import CreateTodo from "../CreateTodo"

export default function HomePage() {

  const { state, dispatch } = useContext(StateContext)
  const [todos, getTodos] = useResource(() => ({
    url: '/todo',
    method: 'get',
    headers: { "Authorization": `${state.user.access_token}` }
  }))


  useEffect(() => {
    getTodos()
  }, [state.user.access_token])

  useEffect(() => {
    if (todos && todos.isLoading === false && todos.data) {
      dispatch({ type: 'FETCH_TODOS', todos: todos.data.todos.reverse() })
    }
  }, [todos])


  const { data, isLoading } = todos;
  return (
    <>
      {state.user.username && <CreateTodo />} <br />
      {isLoading && 'Todos loading...'} <TodoList />
    </>
  )
}
