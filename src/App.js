import UserBar from "./user/UserBar";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import React, { useState, useReducer } from 'react'

function App() {

  const initialPosts = [
    {
      title: "Complete CSC 436 Todo App",
      description: "Due on Tuesday!",
      dateCreated: Date(Date.now()).toString(),
      completed: false
    },
    {
      title: "Wash Clothes",
      description: "Don't forget to dry them!",
      dateCreated: Date(Date.now()).toString(),
      completed: false
    },
    {
      title: "Do Groceries",
      description: "Get healthier foods",
      dateCreated: Date(Date.now()).toString(),
      completed: false
    },
  ]

  function userReducer (state, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'REGISTER':
            return action.username
        case 'LOGOUT':
            return ''
        default:
            throw new Error()
    }
  }

  function todoReducer (state, action) {
    switch (action.type) {
        case 'CREATE_TODO':
           const newTodo = { 
              title: action.title,
              description: action.description, 
              dateCreated: action.dateCreated,
              completed: action.completed 
            }
            return [ newTodo, ...state ]
        case 'TOGGLE_TODO':
           return state.map(todo => {
             if (todo.title !== action.title) {
               return todo;
             } else {
               return {
                 ...todo,
                 completed: !todo.completed
               };
             }
           });
         default:
            throw new Error()
    }
}


  const [ user, dispatchUser ] = useReducer(userReducer, '')
  const [ todos, dispatchTodos ] = useReducer(todoReducer, initialPosts)

  return (
    <div>
      <UserBar user={user} dispatchUser={dispatchUser} /> 
      <br /><br /><hr /><br />
      {user && <CreateTodo user={user} dispatch={dispatchTodos} />}
      <TodoList todos={todos} />
    </div>
  )
}

export default App;
