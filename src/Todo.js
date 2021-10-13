import React from 'react';

export default function Todo({ title, description, dateCreated, completed, dateCompleted }) {


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
            <div> {completed && <text> Date completed: {Date(Date.now()).toString()} </text>}</div>
            <br />
        </div>
    )
}
