import React, { useEffect, useContext } from 'react'
import { StateContext } from '../contexts'
import { useResource } from 'react-request-hook'
import TodoList from '../TodoList'
import CreateTodo from '../CreateTodo'

export default function ProfilePage ( { author }) {

    const { state, dispatch } = useContext(StateContext)
    const [todos, getTodos] = useResource(() => ({
      url: `/todos?author=${author}`,
      method: 'get'
    }))

    useEffect(getTodos, [])

    useEffect(() => {
      if (todos && todos.data) {
        dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
      }
    }, [todos])


    const { data, isLoading } = todos;
    return (
        <>
        <CreateTodo />
          {isLoading && 'Todos loading...'} <TodoList todos = {data} />
        </>
    )
} 