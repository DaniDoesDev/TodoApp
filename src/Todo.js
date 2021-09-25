import React, {useState} from 'react';

export default function Todo({ title, description, dateCreated}) {
    const [checked, setChecked] = useState(false);

    function handleChange(evt) {
        setChecked(!checked);
      }

    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
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
