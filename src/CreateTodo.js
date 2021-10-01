import React, {useState} from 'react'

export default function CreateTodo({user, posts, setPosts}) {

    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')

    function handleTitle (evt) { setTitle(evt.target.value) }

    function handleDescription (evt) { setDescription(evt.target.value) }

    function handleCreate () {
        const dateCreated = Date(Date.now()).toString();  
        const newPost = { title, description, dateCreated }
        setPosts([ newPost, ...posts ])
    }


    return (
        <form onSubmit={e => {e.preventDefault(); handleCreate();} }>

            <div>Author: <b>{user}</b></div>

            <div>
                <label htmlFor="create-title">Todo Item Title:</label>
                <input type="text" value={title} onChange={handleTitle} name="create-title" id="create-title" />
            </div>

            {/* <div>
                Todo Item Submitted At: <b>{Date(Date.now()).toString()}</b>
            </div> */}

            <textarea value={description} onChange={handleDescription} />
            <input type="submit" value="Create" />

           

        </form>
    )
}
