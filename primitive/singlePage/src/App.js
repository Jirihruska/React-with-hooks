import React, { useState } from 'react';
//Components
import MenuItem from './components/MenuItem';
import Home from './components/Home';
import Products from './components/Products';
import Contacts from './components/Contacts';
import About from './components/About';
//styles
import './App.css';

const App = () => {

  const [open, setOpen] = useState('Home');

  return (
    <>
      {/*Menu-bar*/}
      <div className="menu">
        <MenuItem setOpen={setOpen} name="Home" />
        <MenuItem setOpen={setOpen} name="Products" />
        <MenuItem setOpen={setOpen} name="Contacts" />
        <MenuItem setOpen={setOpen} name="About" />
      </div>

      {/*Pages*/}
      <div>
        { open === "Home" && <Home name={open} /> }
        { open === "Products" && <Products name={open} /> }
        { open === "Contacts" && <Contacts name={open} /> }
        { open === "About" && <About name={open} /> }
      </div>

    </>
  );
}

export default App;
