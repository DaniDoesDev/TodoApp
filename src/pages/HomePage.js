import TodoList from "../TodoList"
import React, { useEffect, useContext } from 'react'
import { StateContext } from '../contexts'
import { useResource } from 'react-request-hook'
import CreateTodo from "../CreateTodo"
import ToggleTodo from "../ToggleTodo"
import DeleteTodo from "../DeleteTodo"

export default function HomePage () {

    const { state, dispatch } = useContext(StateContext)
    const [todos, getTodos] = useResource(() => ({
      url: '/todos',
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
        <CreateTodo /> <br />
        <ToggleTodo /> <br />
        <DeleteTodo /> <br />
          {isLoading && 'Todos loading...'} <TodoList todos = {data} />
        </>
    )
} 
