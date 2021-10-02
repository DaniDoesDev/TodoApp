import React, { useState } from 'react';

export default function Todo({ title, description, dateCreated, completed }) {
    const [checked, setChecked] = useState(completed);
    const [dateCompleted, setDateCompleted] = useState('')

    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <div> Date created: {dateCreated} </div>
            <form>
                <label> Complete?
                    <input type="checkbox" name="box-id" value={completed} checked={checked} onClick={e => {
                        setChecked(prevCheck => !prevCheck);
                        if (!checked) {
                            setDateCompleted(Date(Date.now()).toString());
                        } else {
                            setDateCompleted('');
                        }
                    }} />
                </label>
            </form>
            <div> <text> Date completed: {dateCompleted} </text> </div>
            <br />
        </div>
    )
}
