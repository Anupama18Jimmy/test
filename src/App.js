// import logo from './logo.svg';
import { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
// import './App.css';
import {DISHES} from './shared/dishes.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };
  }
  render(){
  return (
    <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">AIRLI</NavbarBrand>
          </div>
        </Navbar>
{/* ------------------------------------------- */}
        <Menu dishes={this.state.dishes} />
      </div>

  );}
}

export default App;

