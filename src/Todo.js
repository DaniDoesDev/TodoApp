import React, {useState} from 'react';

export default function Todo({ title, description, dateCreated, completed}) {
     const [checked, setChecked] = useState(completed);

    function handleChange() {
        completed = !completed;
      }

    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <div> Date created: {dateCreated} </div>
            <form> 
                <label> Complete?
                    <input type="checkbox" name="box-id" value={completed} onChange={handleChange} />
                </label> 
            </form>
            <div> {completed && <text> Date completed: {Date(Date.now()).toString()} </text> }</div>
            <br />
        </div>
    )
}
