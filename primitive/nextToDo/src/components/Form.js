import React from 'react';

const Form = ({ name, setName, surname, setSurname, group, setGroup, option, setOption, setBg, bg }) => {

    const inputHandlerName = (e) => {
        e.preventDefault();
        setName(e.target.value);
        console.log(e.target.value);
    }

    const inputHandlerSurname = (e) => {
        e.preventDefault();
        setSurname(e.target.value);
        console.log(e.target.value);
    }

    const selectHandlerNum = (e) => {
        e.preventDefault();
        setOption(e.target.value);
        console.log(e.target.value);
    }

    const selectHandlerBg = (e) => {
        e.preventDefault();
        setBg(e.target.value);
        console.log(e.target.value);
    }

    const buttonHandler = (e) => {
        e.preventDefault();
        //All states will be saved into array of "group" !
        if(name !== '' && surname !== '' && option !== '' && bg !== '') {
            setGroup([...group, {firstName: name, lastName: surname, select: option, color: bg, id: Math.random()} ]);
        }
        else {console.log(`Please fill all entry`)}
        //After confirm set data to default !
        setName('');
        setSurname('');
        setOption('');
        setBg('');
    }

    return (
        <div>
            <form>
                <input placeholder="Name" value={name} onChange={inputHandlerName} />
                <input placeholder="Surname" value={surname} onChange={inputHandlerSurname} />

                <select onChange={selectHandlerNum}>
                    <option value="">SelectNum</option>
                    <option value="First">First</option>
                    <option value="Second">Second</option>
                    <option value="Third">Third</option>
                </select>    

                <select onChange={selectHandlerBg}>
                    <option value="">BgColor</option>
                    <option value="grey">Grey</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="pink">Pink</option>
                </select>

                <button onClick={buttonHandler}>Confirm</button>
            </form>
        </div>
    )
}

export default Form
