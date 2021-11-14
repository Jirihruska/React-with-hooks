import React from 'react';
import { useState } from 'react';
import '../styles/Input.css';

const Input = ({ setInput }) => {

  const [ data, setData ] = useState('');

  const inputHandler = (e) => {
    setData(e);
  }

  const send = () => {
    setInput(data);
    setData('');
  }

  return (
    <div>
      <input value={ data } className="input" onChange={ (e) => inputHandler(e.target.value) } />
      <button className="button" onClick={ () => send() }>╬</button>
    </div>
  )
}

export default Input;
