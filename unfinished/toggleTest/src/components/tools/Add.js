import React, { Component } from 'react';

export default class Add extends Component {
    render() {
        return (
            <div className="bg-light pt-2 ml-1">
                <h4>Přidat pacienta</h4>

                <div className="input-group flex-nowrap mt-2">                    
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">Jméno</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Jméno" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>

                <div className="input-group flex-nowrap mt-1">                    
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">Příjmení</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Příjmení" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>

                <div className="input-group flex-nowrap mt-1">                    
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">Kód pojišťovny</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Kód pojišťovny" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>

                <div className="input-group flex-nowrap mt-1">                    
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">Trvalé bydliště</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Ulice, číslo popisné, město, psč" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>

                <div className="input-group flex-nowrap mt-1">                    
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">Zaměstnavatel</span>
                    </div>
                    <input type="text" className="form-control" placeholder="Název zaměstnavatele" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>

                <div className="input-group flex-nowrap mt-1">                    
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="addon-wrapping">Kontakt</span>
                    </div>
                    <input type="text" className="form-control" placeholder="+420 / @" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>

                <button className="btn bg-dark text-white mt-1 mb-2 rounded-0">Přidat</button>

            </div>
        )
    }
}
