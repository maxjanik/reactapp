import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Jobs extends Component {
  render() {
    return (
      <div>
        <Row>
          <h1 style={{marginBottom: "30px"}}>Job Board</h1>
        </Row>

        <Row>
        <div style={styles.box}>
          <h6 style={styles.category}>Job Category</h6>
          <h4>Job Title One</h4>
          <h6 style={styles.location}>New York, NY</h6>
        </div>

        <div style={styles.box}>
          <h6 style={styles.category}>Job Category</h6>
          <h4>Job Title One</h4>
          <h6 style={styles.location}>New York, NY</h6>
        </div>
        </Row>

      </div>
    );}}

export default Jobs;


const styles: StyleSheet = {
  tab: {
    backgroundColor: "#fff",
    borderRadius: '5px',
    padding: '12px',
  },

  box: {
    backgroundColor: "#fff",
    width: "100%",
    padding: '7px',
    borderRadius: '5px',
    marginBottom: "12px",
  },

  category: {
    fontSize: "12px",
    color: "#2076f7",
  },

  location: {
    fontSize: "12px",
  },

}
