import React, { Component } from "react";
import { Container, Row, Col, Table } from 'react-bootstrap';

class Career extends Component {
  render() {
    return (
      <div>
        <Row><Col sm={3}>
          <h4>Business Careers</h4>
          <br />
        </Col></Row>

        <Row>
        <Col>
          <h6>How to have a sucessful business career</h6>
          <p><li>Understand how your company makes money</li></p>
          <p><li>Take the time to read about the industry</li></p>
        </Col>
        </Row><br /><br />

        <h3>Finance Careers</h3><br />
        <Table resposnive striped bordered hover style={{fontSize: "14px"}}>
          <thead>
            <tr>
              <th>Experience</th>
              <th>Entry Level</th>
              <th>2-3 years</th>
              <th>3-5 years</th>
              <th>5-10 years</th>
              <th>10-15 years</th>
              <th>15-20 years</th>
              <th>25+ years</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Title</td>
              <td>Associate</td>
              <td>Analyst</td>
              <td>Senior Analyst</td>
              <td>Assist. Vice President</td>
              <td>Vice President</td>
              <td>Director</td>
              <td>Executive</td>
            </tr>
            <tr>
              <td>Salary</td>
              <td>$45,000</td>
              <td>$60,000</td>
              <td>$80,000</td>
              <td>$120,000</td>
              <td>$150,000</td>
              <td>$175,000</td>
              <td>$250,000 +</td>
            </tr>
          </tbody>
        </Table>

        <br />
        <Row style={styles.bubble}>
          <Col sm={3}>
          <img src='https://www.spacex.com/static/images/share.jpg' style={styles.bubbleimage} />
          <h4 style={styles.bubblename}>SpaceX</h4>
          <h6 style={styles.bubblejob}>Financial Analyst</h6></Col>
          <Col sm={8} style={styles.bubbletext}>
          <h6>Responsibilities</h6>
            <li>Lead forecast of resource requirements for business groups, including headcount, capital, and operating expenses</li>
            <li>Work with business partners to understand processes and develop driver based forecasts</li>
            <li>Partner with accounting for period close analysis and group level reporting</li>
            <li>Provide insight on spending variances and department level reporting to business partners</li>
            <li>Coordinate capital expenditure tracking and related cash forecast across entire company</li><br />
          <h6>Role</h6>
            <li>Someone who is willing (and excited) to roll up their sleeves to dig through data, build ground up excel models, do the work</li>
            <li>Comfortable interacting with people of various backgrounds and levels from first-year analysts to senior executives, sales, engineering, legal, etc.</li>
            <li>Detail-oriented and data-driven, but can also understand the big picture and strategic elements of proposals</li>
            <li>Resourceful and can figure out solutions where there may not be clear-cut systems or established methodologies</li><br />
          <h6 style={{color: "#2f68ad"}}>Hamilton School Summary</h6>
          <p>Use spreadsheets to track company's spending in each department on a monthly, quarterly, and annual basis.
          Work with different internal departments to create forecasts and report budget variances.</p>

          </Col>
        </Row>

        <Row style={styles.bubble}>
          <Col sm={3}>
          <img src='https://logos.bugcrowdusercontent.com/logos/31c9/4eb4/c1f21362/77aca7a0c2e1d0a71ca2a2f404b6c17d_Untitled.png' style={styles.bubbleimage} />
          <h4 style={styles.bubblename}>Indeed</h4>
          <h6 style={styles.bubblejob}>Director, Financial Planning & Analysis</h6></Col>
          <Col sm={8} style={styles.bubbletext}>
          <h6>The Role</h6>
            <p>Indeed is seeking a highly motivated Director to run our rapidly growing Financial Planning and Analysis team in our New York City office. You will assist with global financial operations, working collaboratively with a range of cross-functional partners to enable strategic decision-making.
            You approach projects with a flexible, innovative, service-oriented mindset, and a strong emphasis on system-based solutions. You possess an analytical mind, an ability to communicate complex ideas to senior business leaders, and a desire to make a meaningful impact on a dynamic, high-growth technology company. This position oversees a team of FP&A Analysts, and Managers, and reports to the VP of Finance.</p>

          <h6>Responsibilities</h6>
            <li>Oversee financial planning and prepare leaders for review with executive management team</li>
            <li>Support global headcount modeling and planning</li>
            <li>Perform monthly financial reporting, including variance analysis and reconciliations</li>
            <li>Develop and maintain financial forecasts and budgets (monthly and quarterly)</li>
            <li>Assist Senior Management with special projects to support strategic decision-making (e.g., what if" strategic analysis, global business forecasting, new product P&L projections)</li>
            <li>Identify and track key performance metrics pertaining to business operations, competitors, benchmarking, etc.</li>
            <li>Manage a large global support team</li>
          <br /><h6 style={{color: "#2f68ad"}}>Hamilton School Summary</h6>
            <p>Manage the entire FP&A department and report all "big picture" analysis to company executives. Lead projects for executive team
            when they want to explore new ideas.</p>

          </Col>
        </Row>
      </div>
    );
  }
}

export default Career;


const styles: StyleSheet = {
  bubble: {
    backgroundColor: "#fff",
    borderRadius: '5px',
    padding: "12px",
    paddingBottom: "20px",
    marginTop: "25px",
  },

  bubbleimage: {
    width: "150px",
    height: "150px",
  },

  bubblename: {
    paddingTop: "15px",
  },

  bubbletext: {
    fontSize: "14px",
  },
}
