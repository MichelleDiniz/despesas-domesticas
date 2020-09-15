import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import "../../assets/stylesheet/Table.css";
import "../../assets/stylesheet/Button.css";
import "../../assets/stylesheet/ColorBox.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faMobileAlt, faUtensils, faCocktail, faUserTag } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard-container">
        <h1>Dashboard</h1>
        <div className="row">
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps)(Dashboard);
