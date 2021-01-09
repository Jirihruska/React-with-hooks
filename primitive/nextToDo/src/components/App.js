import React, { useState } from 'react';

//Imported components
import Header from './Header';
import Body from './Body';
import Form from './Form';
import Footer from './Footer';

const App = () => {

    //formStates
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [option, setOption] = useState('');
    const [bg, setBg] = useState('');
    //dataState
    const [group, setGroup] = useState([]);

    return (
        <React.Fragment>
            <Header />
            <Form group={group} setGroup={setGroup} name={name} setName={setName}  surname={surname} setSurname={setSurname} option={option} setOption={setOption} bg={bg} setBg={setBg} />
            <Body name={name} surname={surname} option={option} group={group} bg={bg} />
            <Footer />
        </React.Fragment>
    )
}

export default App
