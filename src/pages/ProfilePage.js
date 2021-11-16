import React, { useEffect, useContext } from 'react'
import { StateContext } from '../contexts'
import { useResource } from 'react-request-hook'
import TodoList from '../TodoList'
import CreateTodo from '../CreateTodo'
import { Link } from 'react-navi'
import ToggleTodo from '../ToggleTodo'
import DeleteTodo from '../DeleteTodo'

export default function ProfilePage ( { author }) {

    const { state, dispatch } = useContext(StateContext)
    const { user } = state;

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

    function isAuthor( user ) {
      return user === author? true :  false
    }


    const { data, isLoading } = todos;
    return (
        <>
        {isAuthor(user.username) && <CreateTodo />} <br />
        {isAuthor(user.username) && <ToggleTodo />} <br />
        {isAuthor(user.username) && <DeleteTodo />} <br />
          {isLoading && 'Todos loading...'} <TodoList todos = {data} />
          <div><Link href="/">Go back to homepage</Link></div>
        </>
    )
} 