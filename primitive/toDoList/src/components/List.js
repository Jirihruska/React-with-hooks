import React from 'react';
//imported components
import Post from './Post';

const List = ({todo}) => {
    return (
        <div>
            {todo.map((everyTodo) => (
                <Post text={everyTodo.text} />
            ))}
        </div>
    )
}

export default List;