import React, { useState } from 'react';
import './App.css';
//imported components
import Inputs from './components/Inputs';

const App = () => {

  const [ r, sr ] = useState(0);
  const [ g, sg ] = useState(0);
  const [ b, sb ] = useState(0);
  const [ t, st] = useState('');

  const [ todos, setTodos ] = useState([]);

  const styled = { //RGB MIXING
    backgroundColor: `rgb(${r},${g},${b})`
  }

  return (
    <div className="container">
      <div style={styled} className="panel">{t || "COLOR"}</div>
      <div className="panel">
      <Inputs r={r} g={g} b={b} t={t} sr={sr} sg={sg} sb={sb} st={st} styled={styled} todos={todos} setTodos={setTodos} />
      </div>
      {
      // TODOLIST 
      <div className="panel">
        {todos.map((todo) => (
        <div style={{backgroundColor: `rgb(${todo.bgR},${todo.bgG},${todo.bgB})`}} key={todo.id} className="panel-item">{todo.text}</div> 
        ))}
      </div>
      }
    </div>
  );
}

export default App;
