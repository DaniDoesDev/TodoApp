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

  // const initialPosts = [
  //   {
  //     title: "Complete CSC 436 Todo App",
  //     description: "Due on Tuesday!",
  //     dateCreated: Date(Date.now()).toString(),
  //     completed: false,
  //     dateCompleted: ''
  //   },
  //   {
  //     title: "Wash Clothes",
  //     description: "Don't forget to dry them!",
  //     dateCreated: Date(Date.now()).toString(),
  //     completed: false,
  //     dateCompleted: ''
  //   },
  //   {
  //     title: "Do Groceries",
  //     description: "Get healthier foods",
  //     dateCreated: Date(Date.now()).toString(),
  //     completed: false,
  //     dateCompleted: ''
  //   },
  // ]

  const [state, dispatch] = useReducer(appReducer, { user: '', todos: [] })

  const [todos, getTodos] = useResource(() => ({
    url: '/todos',
    method: 'get'
  }))

  useEffect(getTodos, [])

  useEffect(() => {
    if (todos && todos.data) {
      dispatch({ type: 'FETCH_TODOS', todos: todos.data })
      console.log("WE HAVE DATA")
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
