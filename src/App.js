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
import Finance from "./Pages/finance";
import Microeconomics from "./Pages/microeconomics";
import Career from "./Pages/career";
import Jobs from "./Pages/jobs";
import About from './Pages/about'

import { FaBook, FaHome, FaAddressBook, FaUsers, FaLandmark, FaBuilding, FaMoneyBillAlt, FaCalculator, FaBriefcase, FaChartLine, FaLightbulb} from 'react-icons/fa';
// https://github.com/react-icons/react-icons

class App extends Component {
  render() {
    return (
      <div class="container-fluid" style={styles.bg}>
        <Row>
        <HashRouter>

          <Col sm={3} style={styles.sidebar}>
            <h3 style={styles.logo}>React Dashboard</h3>
            <div className="header">
               <h3 class="navheader">Home</h3>
               <h3 class="navrow"><FaHome style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/">Home</NavLink></h3>
               <h3 class="navrow"><FaBook style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/about">About Us</NavLink></h3>
               <h3 class="navheader">Career</h3>
               <h3 class="navrow"><FaAddressBook style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/career">Business Careers</NavLink></h3>
               <h3 class="navrow"><FaAddressBook style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/jobs">Job Board</NavLink></h3>
               <h3 class="navheader">Learn</h3>
               <h3 class="navrow"><FaMoneyBillAlt style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/finance">Finance</NavLink></h3>
               <h3 class="navrow"><FaCalculator style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/stuff">Accounting</NavLink></h3>
               <h3 class="navrow"><FaLandmark style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/microeconomics">Microeconomics</NavLink></h3>
               <h3 class="navrow"><FaLandmark style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/microeconomics">Macroeconomics</NavLink></h3>
               <h3 class="navrow"><FaBuilding style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/contact">Real Estate</NavLink></h3>
               <h3 class="navrow"><FaBuilding style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/contact">Marketing</NavLink></h3>
               <h3 class="navrow"><FaLightbulb style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/contact">Entrepreneurship</NavLink></h3>
               <h3 class="navrow"><FaBuilding style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/contact">Venture Capital</NavLink></h3>
               <h3 class="navrow"><FaChartLine style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/contact">Data Analysis</NavLink></h3>
               <h3 class="navheader">Engage</h3>
               <h3 class="navrow"><FaHome style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/">Group projects</NavLink></h3>
               <h3 class="navrow"><FaUsers style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/jobs">Networking</NavLink></h3>
               <h3 class="navrow"><FaBriefcase style={styles.icon}/><NavLink activeStyle={{ color: '#ebebeb' }} class="navtext" to="/contact">Join our team</NavLink></h3>
            </div></Col>

          <Col sm={9}>
          <div className="content" style={styles.content}>
             <Route exact path="/" component={Home}/>
             <Route path="/stuff" component={Stuff}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/finance" component={Finance}/>
             <Route path="/microeconomics" component={Microeconomics}/>
             <Route path="/career" component={Career}/>
             <Route path="/jobs" component={Jobs}/>
             <Route path="/about" component={About}/>
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

  content: {
    margin: '25px',
  },

  bg: {
    backgroundColor: "#f2f2f2",
  }

}
