import React, { Component } from "react";
import { Container, Row, Col } from 'react-bootstrap';

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
        </Row>

        <Row><Col>
        <h3>Finance Career</h3>
        <h6>Highlights</h6>
        <p>Financial Analyst</p>
        <h5>Examples</h5>
        <p>Director, Financial Planning & Analysis - Indeed</p>
        <p>Your job:
        Indeed is seeking a highly motivated Director to run our rapidly growing Financial Planning and Analysis team in our New York City office. You will assist with global financial operations, working collaboratively with a range of cross-functional partners to enable strategic decision-making.
        You approach projects with a flexible, innovative, service-oriented mindset, and a strong emphasis on system-based solutions. You possess an analytical mind, an ability to communicate complex ideas to senior business leaders, and a desire to make a meaningful impact on a dynamic, high-growth technology company. This position oversees a team of FP&A Analysts, and Managers, and reports to the VP of Finance.
        </p>
        <p>About you:Responsibilities:
Oversee financial planning and prepare leaders for review with executive management team
Support global headcount modeling and planning
Perform monthly financial reporting, including variance analysis and reconciliations
Develop and maintain financial forecasts and budgets (monthly and quarterly)
Assist Senior Management with special projects to support strategic decision-making (e.g., what if" strategic analysis, global business forecasting, new product P&L projections)
Identify and track key performance metrics pertaining to business operations, competitors, benchmarking, etc.
Manage a large global support team</p>
        </Col></Row>

      </div>
    );
  }
}

export default Career;


const styles: StyleSheet = {
  tab: {
    backgroundColor: "#fff",
    borderRadius: '5px',
    padding: '12px',
  },

}
