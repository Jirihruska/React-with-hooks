import React, { Component } from 'react';
import Tools from '../src/components/Tools';
import List from '../src/components/List';
import Support from '../src/components/Support';

export default class App extends Component {

  constructor(){
    super();

    this.state = {
      toolsOn: false,
      listOn: false,
      supportOn: false
    }
  }


  toggleTools = () => {
    this.setState({toolsOn: !this.state.toolsOn, listOn: false, supportOn: false})
  }

  toggleList = () => {
    this.setState({listOn: !this.state.listOn, toolsOn: false, supportOn: false})
  }

  toggleSupport = () => {
    this.setState({supportOn: !this.state.supportOn, listOn: false, toolsOn: false})
  }



  render() {
    return (
      <div>

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand p-2" href="#">
            <h1>Medic System</h1>
          </a>
        </nav>

        <div className="bg-light d-flex">
          <button onClick={this.toggleList} className="btn btn-dark mt-1 mb-1 ml-1 rounded-0"> Seznam pacientů</button>
          <button onClick={this.toggleTools} className="btn btn-dark mt-1 mb-1 ml-1 rounded-0"> Nástroje</button>
          <button onClick={this.toggleSupport} className="btn btn-dark mt-1 mb-1 ml-1 rounded-0"> Podpora</button>
        </div>

        {this.state.listOn && <List />}
        {this.state.toolsOn && <Tools />}
        {this.state.supportOn && <Support />}

      </div>
    )
  }
}
