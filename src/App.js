import UserBar from "./user/UserBar";
import CreateTodo from "./CreateTodo";
import DeleteTodo from "./DeleteTodo";
import ToggleTodo from "./ToggleTodo";
import TodoList from "./TodoList";
import appReducer from './reducers';
import React, { useReducer, useEffect } from 'react'
import { StateContext } from './contexts'
import { useResource } from 'react-request-hook'

function App() {

  const [state, dispatch] = useReducer(appReducer, { user: '', todos: [] })

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
  
  const { user } = state;

  return (
    <div>
      <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
        <UserBar />
        <br /><br /><hr /><br />
        {user && <CreateTodo />}
        <br />
        {user && <ToggleTodo />}
        <br />
        {user && <DeleteTodo />}
        <br />
        <TodoList />
      </StateContext.Provider>
    </div>
  )
}

export default App;
