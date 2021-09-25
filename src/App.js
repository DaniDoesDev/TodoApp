import UserBar from "./user/UserBar";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";
import React, {useState} from 'react'

function App() {

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

  return (
    <div>
      <UserBar /> <br /><br /><hr /><br />
      <CreateTodo />
      <TodoList posts={initialPosts} />
    </div>
  )
}

export default App;
