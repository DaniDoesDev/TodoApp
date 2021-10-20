import React from 'react';

export default function Todo({ title, description, dateCreated, completed, dateCompleted, id }) {


    return (
        <div>
            <h3>{title}</h3>
            <div>{description}</div>
            <div>Todo ID: {id}</div>
            <div> Date created: {dateCreated} </div>
            <div>
                <label> Completed?
                    <input type="checkbox" name="box-id" value={completed} checked={completed} onChange={e => {
                        completed = !completed;
                    }} />
                </label>
            </div>
            <div> {completed && <text> Date completed: {dateCompleted} </text>}</div>
            <br />
        </div>
    )
}
