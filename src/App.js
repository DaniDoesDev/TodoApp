import UserBar from "./user/UserBar";
import CreateTodo from "./CreateTodo";
import DeleteTodo from "./DeleteTodo";
import ToggleTodo from "./ToggleTodo";
import TodoList from "./TodoList";
import appReducer from './reducers';
import React, { useReducer, useEffect } from 'react'
import { StateContext } from './contexts'
import { useResource } from 'react-request-hook'
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import UsersPage from "./pages/UsersPage";
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';


function App() {

  const [state, dispatch] = useReducer(appReducer, { user: '', users: [], todos: [] })

  // const [todos, getTodos] = useResource(() => ({
  //   url: '/todos',
  //   method: 'get'
  // }))

  // useEffect(getTodos, [])

  // useEffect(() => {
  //   if (todos && todos.data) {
  //     dispatch({ type: 'FETCH_TODOS', todos: todos.data.reverse() })
  //   }
  // }, [todos])
  
  const { user } = state;

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/users':route({ view: <UsersPage /> }),
    '/users/:author': route(req => {
        return { view: <ProfilePage author={req.params.author} /> }
    }),
})


  return (
    <div>
      <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
        {/* <HeaderBar />
        <HomePage /> */}
        <Router routes={routes}>
          <div style={{ padding: 8 }}>
            <HeaderBar />
            <hr />
            <View />
          </div>
        </Router>
        {/* <UserBar />
        <br /><br /><hr /><br />
        {user && <CreateTodo />} */}
        <br />
        {user && <ToggleTodo />}
        <br />
        {user && <DeleteTodo />}
        <br />
        {/* <TodoList /> */}
        {/* <ProfilePage author = {user}/> */}
        {/* <UsersPage /> */}
      </StateContext.Provider>
    </div>
  )
}

export default App;
