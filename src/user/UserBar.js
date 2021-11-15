import React, { useContext, useState } from 'react';
import Login from './Login'
import Logout from './Logout'
import Register from './Register'
import { StateContext } from '../contexts';
import { Button } from 'react-bootstrap'

export default function UserBar() {

    const Logout = React.lazy(() => import('./Logout'))

    const { state } = useContext(StateContext)
    const { user } = state

    const [showLogin, setShowLogin] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    if (user) {
        return <Logout />
    } else {
        return (

            <div className="justify-content-end">
                <Button variant="primary" onClick={(e) => setShowLogin(true)}>
                    Login
                </Button>
                <Login show={showLogin} handleClose={() => setShowLogin(false)} />
                <Button variant="primary" onClick={(e) => setShowRegister(true)}>
                    Register
                </Button>
                <Register show={showRegister} handleClose={() => setShowRegister(false)} />
            </div>


        )
    }
}
