import React, { Component, Fragment } from 'react';
import _ from "lodash";
import "./table.css";

class TableComponent extends Component {
  getHeaders() {
    const { headers } = this.props;
    console.log(headers);
    const cellHeader = _.map(headers, (value, key) => {
      return(
        <td key={key}>
          {value}
        </td>
      );
    });

    if (!_.isEmpty(cellHeader)) {
      return cellHeader;
    }
  }

  getRows() {
    const { rows } = this.props;
    const cellRow = _.map(rows, (value, key) => {
      return(
        <tr key={key}>
          {value}
        </tr>
      );
    });

    if (!_.isEmpty(cellRow)) {
      return cellRow;
    }
  }

  render() {
    return(
      <Fragment>
        <table>
          <thead>
            <tr>
              {this.getHeaders()}
            </tr>
          </thead>
          <tbody>
            {this.getRows()}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default TableComponent;
