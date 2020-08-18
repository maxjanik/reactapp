import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

class Finance extends Component {
  render() {
    return (
      <div>
        <Row><Col sm={3}>
          <h3 style={{marginLeft: '5px'}}>Finance</h3>
          <br />
        </Col></Row>

        <Row>
          <Col sm={4}>
            <div style={styles.tab}>
              <h6 style={styles.tabheader}>What is finance?</h6>
              <div style={styles.course}>
                <h6>Finance is the management of money.</h6>
                <p>Finance professionals indentify, evaluate, and measure financial decisions for the company.</p>
                <p>This page will cover all the information you need to be a successful finance professional.</p>
              </div>
            </div>

            <div style={styles.tab}>
              <h6 style={styles.tabheader}>What you need to know</h6>
              <div style={styles.course}>
                <h6><li>Present Value</li></h6>
                <h6><li>Risk and Return</li></h6>
                <h6><li>Stock Research and Analysis</li></h6>
                <h6><li>Financial Analysis and Modeling</li></h6>
                <h6><li>Fixed Income</li></h6>
                <h6><li>Global Finance</li></h6>
              </div>
            </div>

            <div style={styles.tab}>
              <h6 style={styles.tabheader}>Finance Careers</h6>
              <div style={styles.course}>
                <h6>Visit the careers page here</h6>
              </div>
            </div>

            <div style={styles.tab}>
              <h6 style={styles.tabheader}>Resources</h6>
              <div style={styles.course}>
                <h6>Stock Pitch Competitions</h6>
                <h6>Stock Analyst Program</h6>
              </div>
            </div>

            <div style={styles.tab}>
              <h6 style={styles.tabheader}>Top online courses</h6>
              <div style={styles.course}>
                <h6><a href="https://courses.corporatefinanceinstitute.com/courses/introduction-to-corporate-finance" target="_blank" style={{color: "black"}}>1. Introduction to Corporate Finance</a></h6>
              </div>
            </div>

          </Col>

          <Col sm={8} style={styles.content} >
            <h6 style={styles.tabheader}>Learn (everything you need to know about finance)</h6>
            <p>Walmart makes $25 billion in cash every year, what should they do with the cash?</p>
            <p>This is the question that Walmart's finance department attempts to answer every day. Let's look at what they could spend it on:</p>
            <li>Open new stores</li>
            <li>Acquire another company</li>
            <li>Give employees a raise</li>
            <li>Buyback shares</li>
            <li>Issue a dividend to shareholders</li>
            <li>Pay off debt</li>
            <li>Invest in technology for stores</li>
            <li>A little bit of all of the above?</li>
            <br />
            <p>Don't worry if you don't understand the terms above, we will cover all of them! As you can see,
            companies have almost infinite ways they can do with their cash, and the <i>strategy of making financial decisions is key
            to the short-term and long-term success of the company.</i></p>
            <h6><b>Present Value</b></h6>
            <p>Companies make financial management decisions based on the expected return of the decision. One way to measure the expected
            return is from caculating the present value of the decision.</p>
            <p>Two articles on NPV: <a href="https://hbr.org/2014/11/a-refresher-on-net-present-value" target="_blank">Harvard Business Review</a>, <a href="https://corporatefinanceinstitute.com/resources/knowledge/valuation/net-present-value-npv/" target="_blank">Corporate Finance Institute</a></p>
            <h6><b>Recap</b></h6>
            <ul>1. Company makes a profit, giving them extra cash to spend</ul>
            <ul>2. Company explores all options to invest or save the cash</ul>
            <ul>3. Use valuation techniques to measure the impact of each option</ul>
            <ul>4. Make allocation decisions</ul>
            <ul>5. Measure the returns of each allocation decision</ul>
            <ul>6. Repeat constantly</ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Finance;


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
