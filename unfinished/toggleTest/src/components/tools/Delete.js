import React, { Component } from 'react'

export default class Delete extends Component {
    render() {
        return (
            <div className="bg-light pt-2 ml-1">

                <h4>Odstranit pacienta</h4>

                <form className="form-inline ">
                    <input className="form-control mr-block" type="search" placeholder="Vyhledat pacienta" aria-label="Search" />          
                    <button className="btn bg-dark text-white rounded-0 ml-2">Hledat</button>
                </form>
                
            </div>
        )
    }
}
