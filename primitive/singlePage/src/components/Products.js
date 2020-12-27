import React from 'react';
import Data from '../data/products.json';

export default function Products({name}) {

    return (
        <section>
            <div className="page-name">{name}</div>
               {Data.map((each) => {
                   return (  
                            <div key={each.id} className="product-container">
                                <div key={each.id} className="product-item">
                                    <div key={each.name}>{each.name}</div>
                                    <div key={each.id}>{each.info}</div>
                                    <div key={each.recommendedPrice}>{each.recommendedPrice + ` $`}</div>
                                </div>
                            </div>
                   )
               })}
        </section>
    )
}
