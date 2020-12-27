import React from 'react';
import Contact from '../data/contacts.json';

export default function Contacts({name}) {
    return (
        <section>
            <div className="page-name">{name}</div>
            {Contact.map((each) => {
                   return (  
                            <div key={each.id} className="product-container">
                                <div key={each.id} className="product-item">
                                    <div key={each.name}>{each.name}</div>
                                    <div key={each.contact}>{each.contact}</div>
                                </div>
                            </div>
                   )
               })}
        </section>
    )
}
