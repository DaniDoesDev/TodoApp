import MyName from "./MyName";
import UserBar from "./user/UserBar";
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

function App() {
  const posts = [
    {
      title: "My Post",
      content: "Some text",
      author: "Danielle"
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Danielle"
    },
    {
      title: "My Post",
      content: "Some text",
      author: "Danielle"
    },
  ]

  return (
    <div>
      <UserBar /> <br /><br /><hr /><br />
      {/* <Post title="My Title" content="My first post." author="Danielle" /><br /><br /><hr /><br /> */}
      <CreateTodo user="Danielle" />
      <TodoList posts={posts} />
    </div>
  )
}

export default App;
