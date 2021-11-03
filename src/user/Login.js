import React, { useContext, useState, useEffect } from 'react';
import { useResource } from 'react-request-hook'
import { StateContext } from '../contexts';
import { useNavigation } from 'react-navi'


export default function Login() {

    const navigation = useNavigation()

    const { dispatch } = useContext(StateContext)

    const [username, setUsername] = useState('');
    const [loginFailed, setLoginFailed] = useState(false)
    const [password, setPassword] = useState('')

    function handleUsername(evt) { setUsername(evt.target.value) }
    function handlePassword(evt) { setPassword(evt.target.value) }

    const [user, login] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }))

    useEffect(() => {
        if (user && user.data) {
            if (user.data.length > 0) {
                setLoginFailed(false)
                dispatch({ type: 'LOGIN', username: user.data[0].username })
                navigation.navigate(`/users/${user.data[0].username}`)
            } else {
                setLoginFailed(true)
            }
        }
    }, [user])

    return (
        <form onSubmit={e => { e.preventDefault(); login(username, password) }}>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" id="login-username" value={username} onChange={handleUsername} />
            <label htmlFor="login-password">Password:</label>
            <input type="password" value={password} onChange={handlePassword} name="login-password" id="login-password" />
            <input type="submit" value="Login" />
            {loginFailed && <span style={{ color: 'red' }}>Invalid username or password</span>}
        </form>
    )
}
