import UserBar from "./user/UserBar";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import React, { useState, useReducer } from 'react'

function App() {

  // const [ user, setUser ] = useState('')
  


  const initialPosts = [
    {
      title: "Complete CSC 436 Todo App",
      description: "Due on Tuesday!",
      dateCreated: Date(Date.now()).toString()
    },
    {
      title: "Wash Clothes",
      description: "Don't forget to dry them!",
      dateCreated: Date(Date.now()).toString()
    },
    {
      title: "Do Groceries",
      description: "Get healthier foods",
      dateCreated: Date(Date.now()).toString()
    },
  ]

  const [ posts, setPosts ] = useState(initialPosts)

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

  const [ user, dispatchUser ] = useReducer(userReducer, '')

  return (
    <div>
      <UserBar user={user} dispatchUser={dispatchUser} /> 
      <br /><br /><hr /><br />
      {user && <CreateTodo user={user} posts={posts} setPosts={setPosts} />}
      <TodoList posts={posts} />
    </div>
  )
}

export default App;
