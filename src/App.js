import UserBar from "./user/UserBar";
import CreateTodo from "./CreateTodo";
import DeleteTodo from "./DeleteTodo";
import ToggleTodo from "./ToggleTodo";
import TodoList from "./TodoList";
import appReducer from './reducers';
import React, { useReducer } from 'react'

function App() {

  const initialPosts = [
    {
      title: "Complete CSC 436 Todo App",
      description: "Due on Tuesday!",
      dateCreated: Date(Date.now()).toString(),
      completed: false,
      dateCompleted: ''
    },
    {
      title: "Wash Clothes",
      description: "Don't forget to dry them!",
      dateCreated: Date(Date.now()).toString(),
      completed: false,
      dateCompleted: ''
    },
    {
      title: "Do Groceries",
      description: "Get healthier foods",
      dateCreated: Date(Date.now()).toString(),
      completed: false,
      dateCompleted: ''
    },
  ]

  const [state, dispatch] = useReducer(appReducer, { user: '', todos: initialPosts })
  const { user, todos } = state;

  return (
    <div>
      <UserBar user={user} dispatchUser={dispatch} />
      <br /><br /><hr /><br />
      {user && <CreateTodo user={user} dispatch={dispatch} />}
      <br />
      {user && <ToggleTodo dispatch={dispatch} />}
      <br />
      {user && <DeleteTodo dispatch={dispatch} />}
      <br />
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
