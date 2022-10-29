import React from 'react';
import { TodoItem } from './TodoItem';

export const Todos = (props) => {
    let l = props.todos.length;
    // console.log(l);
    return (
        <div className='container bg-light'>
            <h3 className='my-3'>Todos List</h3>
            {/* {console.log(props.todos.length)} */}
            {l === 0 ? <h1>No Todos to Display</h1> : (
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
                }))
            }
        </div>

    )
}
