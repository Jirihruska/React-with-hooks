import React, { useState } from 'react';
//imported components
import Input from './components/Input';
import List from './components/List';

const App = () => {

  const [text, setText] = useState('');
  const [todo, setTodo] = useState([]);

  return (
    <>
      <Input setText={setText} setTodo={setTodo} todo={todo} text={text} />
      <List todo={todo} />
    </>
  );
}

export default App;
