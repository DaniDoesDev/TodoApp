import React, { useContext } from 'react'
import CreateTodo from '../CreateTodo'
import UserBar from '../user/UserBar'
import Header from '../Header'
import { StateContext } from '../contexts'
import ProfilePage from './ProfilePage'
import UsersPage from './UsersPage'
import { Link } from 'react-navi';


export default function HeaderBar() {

    const { state } = useContext(StateContext)
    const { user } = state

    return (
        <>
            <Header text="My Todo List - Homepage" />
            <React.Suspense fallback={"Loading..."}>
                <UserBar />
            </React.Suspense> <br />
            <Link href="/users"> Access Users Page</Link>
            {/* <CreateTodo /> */}
             <br /> 
            {/* {user && <ProfilePage author = {user} />}<br /> */}
        </>
    )
}