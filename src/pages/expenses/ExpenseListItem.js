import React, { Component } from "react";
import { connect } from "react-redux";
import { removeExpense } from "../../actions";

class ExpenseListItem extends Component {
  handleRemoveExpense = removeExpenseId => {
    const { removeExpense } = this.props;
    removeExpense(removeExpenseId);
  };

  render() {
    const { expenseId, expenseVal } = this.props;
    return (
      <tr key="expenseName" className="table-row">
        <td>
          {expenseVal.name}{" "}
        </td>
        <td>
        {expenseVal.category}
        </td>
        <td>
        {expenseVal.price}
        </td>
        <td>
          Editar
        </td>
        <td>
        <button
            onClick={() => this.handleRemoveExpense(expenseId)}
            className="btn-danger btn-small"
          >Remover</button>
        </td>
      </tr>
    );
  }
}

export default connect(null, { removeExpense })(ExpenseListItem);
