import React from 'react';
import { Link } from 'react-navi'
import { Card } from 'react-bootstrap'

export default function Todo({ title, description, dateCreated, completed, dateCompleted, id, author }) {

    return (
        <Card>
            <Card.Body>
                <Card.Title>{title}
                </Card.Title>
                <Card.Subtitle>
                    <i>Written by <b>{author}</b></i>
                </Card.Subtitle>
                <Card.Text>
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
                </Card.Text>
                <Link href={`/users/${author}`}>View author page</Link>
            </Card.Body>
        </Card>

    )
}


