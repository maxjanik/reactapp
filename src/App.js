import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Pages/home";
import Stuff from "./Pages/stuff";
import Contact from "./Pages/contact";


import { FaBook, FaHome, FaAddressBook } from 'react-icons/fa';
// https://github.com/react-icons/react-icons

class App extends Component {
  render() {
    return (
      <div class="container-fluid">
        <Row>
        <HashRouter>
          <Col sm={3} style={styles.sidebar}>
            <h3 style={styles.logo}>React Dashboard</h3>
            <div className="header">
               <h3 class="navheader">Header</h3>
               <h3 class="navrow"><FaHome style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/">Home</NavLink></h3>
               <h3 class="navrow"><FaBook style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/stuff">Stuff</NavLink></h3>
               <h3 class="navrow"><FaAddressBook style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/contact">Contact</NavLink></h3>
               <h3 class="navheader">Header</h3>
               <h3 class="navrow"><FaHome style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/">Home</NavLink></h3>
               <h3 class="navrow"><FaBook style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/stuff">Microeconomics</NavLink></h3>
               <h3 class="navrow"><FaAddressBook style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/contact">Commerical Real Estate</NavLink></h3>
               <h3 class="navrow"><FaHome style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/">Home</NavLink></h3>
               <h3 class="navrow"><FaBook style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/stuff">Accounting</NavLink></h3>
               <h3 class="navrow"><FaAddressBook style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/contact">Global Finance</NavLink></h3>
               <h3 class="navheader">Careers</h3>
               <h3 class="navrow"><FaHome style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/">Home</NavLink></h3>
               <h3 class="navrow"><FaBook style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/stuff">Stuff</NavLink></h3>
               <h3 class="navrow"><FaAddressBook style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/contact">Contact</NavLink></h3>

            </div></Col>

          <Col sm={9}>
          <div className="content">
             <Route exact path="/" component={Home}/>
             <Route path="/stuff" component={Stuff}/>
             <Route path="/contact" component={Contact}/>
          </div></Col>

        </HashRouter>
        </Row>
        </div>
    );
  }
}

export default App;

const styles: StyleSheet = {
  sidebar: {
    backgroundColor: "#354866",
    minHeight: '100vh',
    display: 'flex',
    flexFlow: 'column nowrap',
    paddingTop: '20px',
    paddingLeft: '25px',
  },

  logo: {
    color: '#fff',
    marginBottom: '10px',
    fontSize: '22px',
  },

  icon: {
    color: '#bcbec2',
    margin: '10px',
    fontSize: '20px',
    marginBottom: '10px',
    marginRight: '25px',

  },

}
