import React, { useState } from 'react';
// import DeleteTodo from './DeleteTodo';

export default function Todo({ title, description, dateCreated, completed, dateCompleted }) {

     const [dateComplete, setDateComplete] = useState(dateCompleted)
     const [complete, setComplete] = useState(completed)

    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <div> Date created: {dateCreated} </div>
            {/* <div> Completed?: {completed.toString()} </div> */}
            <div> 
                <label> Completed? 
                    <input type="checkbox" name="box-id" value={completed} checked={completed} onChange={e => {
                        completed = !completed;
                    }} />
                </label>
            </div>
                
            {/* <form>
                <label> Complete?
                    <input type="checkbox" name="box-id" value={checked} checked={checked} onClick={e => {
                        setChecked(prevCheck => !prevCheck);
                        completed = checked;
                        if (!checked) {
                            setDateComplete(Date(Date.now()).toString());
                        } else {
                            setDateComplete('');
                        }
                        dateCompleted = dateComplete;
                    }} />
                </label>
            </form> */}
            <div> {completed && <text> Date completed: {Date(Date.now()).toString()} </text> }</div>
            {/* <div> Date completed: {dateCompleted} </div> */}
            <br />
        </div>
    )
}
