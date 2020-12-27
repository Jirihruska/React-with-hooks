import React from 'react';

export default function MenuItem({name, setOpen}) {

    const handler = (e) => {
        e.preventDefault();
        setOpen(name);
        console.log(name);
      }

    return (
            <div onClick={handler} className="menu-item">{name}</div>
    )
}
