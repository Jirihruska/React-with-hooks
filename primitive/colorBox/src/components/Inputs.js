import React from 'react'

 const Inputs = ({ r,g,b,sr,sg,sb,t,st, styled, todos, setTodos}) => {

    const handleR = (e) => sr(e.target.value); 
    const handleG = (e) => sg(e.target.value);
    const handleB = (e) => sb(e.target.value);
    const handleT = (e) => st(e.target.value);

    const buttonHandler = (e) => {
        e.preventDefault();
        if( (r,g,b) < 255 && t !== ''){
            setTodos([...todos, { text: t, bgR: r, bgG: g, bgB: b, id: Math.random()}])
            st('');
        }
        else {st(`Something is wrong!`)};
        
    }

    const clear = (e) => {
        e.target.value = '';
    }

    return (

        <div className="panel">
            <input onClick={clear} value={r} onChange={handleR} maxLength="3" type="text"  />
            <input onClick={clear} value={g} onChange={handleG} maxLength="3" type="text"  />
            <input onClick={clear} value={b} onChange={handleB} maxLength="3" type="text"  />
            <input onClick={clear} value={t} onChange={handleT} style={{width: 430}} placeholder="note 32 char" maxLength="32" type="text"  />
            <button style={styled} onClick={buttonHandler} className="add">Add</button>
        </div>

    )
}

export default Inputs;
