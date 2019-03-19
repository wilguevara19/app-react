import React, { Component } from "react";
//import Contador from "./components/contador";
// import logo from "./logo.svg";
import "./App.css";
import "../src/dashboard.css";
import Navsuperior from "./components/Navsuperior";
import Navlaterral from "./components/Navlateral";
import Listado from './components/Listado';

class App extends Component {
  render() {
    return (
<React.Fragment>
<Navsuperior/>
<div className="container-fluid">
<div className="row">
<Navlaterral/>
<Listado></Listado>
</div>

</div>
</React.Fragment>
    );
  }
}

export default App;
