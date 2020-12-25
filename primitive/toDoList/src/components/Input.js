import React from 'react';
import '../css/Input.css';

 const Input = ({ setText, setTodo, todo, text }) => {

    const inputHandler = e => {
        console.log(e.target.value);
        setText(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        setTodo([ ...todo, {text: text, id: Math.random()}]);
        setText('');
    }

    return (
        <div>
            Task
            <input value={text} onChange={inputHandler} />
            <button type="submit" onClick={submitHandler}>Post</button>
        </div>
    )
}

export default Input