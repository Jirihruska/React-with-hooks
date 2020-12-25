import React, { Component } from 'react';
import Add from './tools/Add';
import Update from './tools/Update';
import Delete from './tools/Delete';

export default class Tools extends Component {

    state = {
        addOn: false,
        updateOn: false,
        deleteOn: false
    }

    toggleAdd = () => {
        this.setState({addOn: !this.state.addOn, updateOn: false, deleteOn: false})
    }

    toggleUpdate = () => {
        this.setState({updateOn: !this.state.updateOn, addOn: false, deleteOn: false })
    }

    toggleDelete = () => {
        this.setState({deleteOn: !this.state.deleteOn, updateOn: false, addOn: false})
    }

    render() {
        return (
            <div>
                <div className="bg-light d-flex">
                    <button onClick={this.toggleAdd} className="btn btn-dark ml-1 rounded-0"> Přidat pacienta</button>
                    <button onClick={this.toggleUpdate} className="btn btn-dark ml-1 rounded-0">Upravit kartu pacienta</button>
                    <button onClick={this.toggleDelete} className="btn btn-dark ml-1 rounded-0">Odstranit pacienta</button>
                </div>

                {this.state.addOn && <Add />}
                {this.state.updateOn && <Update />}
                {this.state.deleteOn && <Delete />}


            </div>
        )
    }
}
