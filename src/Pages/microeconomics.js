import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

class Microeconomics extends Component {
  render() {
    return (
      <div>
        <Row><Col sm={3}>
          <h3 style={{marginLeft: '5px'}}>Microeconomics</h3>
          <br />
        </Col></Row>

        <Row>
          <Col sm={4}>
            <div style={styles.tab}>
              <h6 style={styles.tabheader}>What you need to know</h6>
              <div style={styles.course}>
                <h6><li>Supply and Demand</li></h6>
                <h6><li>Price Elasticity</li></h6>
                <h6><li>Comparative Advantage</li></h6>
                <h6><li>Competition</li></h6>
                <h6><li>Externalities</li></h6>
              </div>
            </div>

            <div style={styles.tab}>
              <h6 style={styles.tabheader}>Test your knowledge</h6>
              <div style={styles.course}>
                <h6>10 question practice quiz</h6>
                <h6>50 question practice quiz</h6>
              </div>
            </div>

            <div style={styles.tab}>
              <h6 style={styles.tabheader}>Economics Careers</h6>
              <div style={styles.course}>
                <p>Visit the careers page here</p>
              </div>
            </div>

            <div style={styles.tab}>
              <h6 style={styles.tabheader}>Top online courses</h6>
              <div style={styles.course}>
                <h6><a href="https://www.khanacademy.org/economics-finance-domain/microeconomics" target="_blank">1. Khan Academy</a></h6>
                <h6>1. First Course</h6>
                <h6>1. First Course</h6>
                <h6>1. First Course</h6>
                <h6>1. First Course</h6>
              </div>
            </div>

            <div style={styles.tab}>
              <h6 style={styles.tabheader}>Resources</h6>
              <div style={styles.course}>
                <h5>1. First Course</h5>
                <h5>1. First Course</h5>
                <h5>1. First Course</h5>
                <h5>1. First Course</h5>
                <h5>1. First Course</h5>
              </div>
            </div>
          </Col>

          <Col sm={8} style={styles.content} >
            <h6>Introduction</h6>
          </Col>
        </Row>

      </div>
    );
  }
}

export default Microeconomics;


const styles: StyleSheet = {
  tab: {
    backgroundColor: "#fff",
    borderRadius: '8px',
    padding: '12px',
    marginBottom: '24px',
  },

  tabheader: {
    color: "#2f68ad",
  },

  course: {
    marginTop: '10px',
  },

  content: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: '8px',
    padding: '12px',
  },

}
