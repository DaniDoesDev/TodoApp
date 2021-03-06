import appReducer from './reducers';
import React, { useReducer } from 'react'
import { StateContext } from './contexts'
import HeaderBar from "./pages/HeaderBar";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import UsersPage from "./pages/UsersPage";
import { mount, route } from 'navi';
import { Router, View } from 'react-navi';
import { Container } from "react-bootstrap";


function App() {

  const [state, dispatch] = useReducer(appReducer, { user: {}, users: [], todos: [] })

  const routes = mount({
    '/': route({ view: <HomePage /> }),
    '/users': route({ view: <UsersPage /> }),
    '/users/:author': route(req => {
      return { view: <ProfilePage author={req.params.author} /> }
    }),
  })


  return (
    <div>
      <StateContext.Provider value={{ state: state, dispatch: dispatch }}>
        <Router routes={routes}>
          <Container>
            <HeaderBar />
            <hr />
            <View />
          </Container>
        </Router>
      </StateContext.Provider>
    </div>
  )
}

export default App;
