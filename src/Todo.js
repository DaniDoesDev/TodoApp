import React, {useState} from 'react'

export default function Todo({ title, content, author}) {
    const [checked, setChecked] = useState(false);
    const dateCreated = Date(Date.now()).toString();

    function handleChange(evt) {
        setChecked(!checked);
        <div> Date completed: {Date(Date.now()).toString()} </div>
      }

    return (
        <div>
            <h3>{title}</h3>
            <div>{content}</div>
            <div> Date created: {dateCreated} </div>
            <form> 
                <label> Complete?
                    <input type="checkbox" name="box-id" value="choice-id" defaultChecked={checked} onChange={handleChange} />
                </label> 
            </form>
            <div> {checked && <text> Date completed: {Date(Date.now()).toString()} </text> }</div>
            <br />
        </div>
    )
}
