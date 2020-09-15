import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { addExpense, fetchExpenses, removeExpense } from "../../actions";
import ExpenseListItem from "./ExpenseListItem";
import FormExpense from "./Form";
import "../../assets/stylesheet/Table.scss";
import "../../assets/stylesheet/Form.scss";
import "../../assets/stylesheet/Button.scss";
import "../../assets/stylesheet/ColorBox.scss";
import "./Expenses.scss";

class ExpensesList extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      addFormVisible: false
    };

    props.fetchExpenses();
  }

  renderAddForm = () => {
    const { addFormVisible } = this.state;
    if (addFormVisible) {
      return (
        <FormExpense />
      );
    }
  };

  renderExpensesList() {
    const { data } = this.props;
    const expenses = _.map(data, (value, key) => {
      return <ExpenseListItem key={key} expenseId={key} expenseVal={value} />;
    });

    if (!_.isEmpty(expenses)) {
      return expenses;
    } else {
      return(
        <tr>
          <td colSpan="4">
            <h4>Acho que você não tem nehuma despesa cadastrada</h4>
            <p>Comece cadastrando clicando no botão abaixo</p>
          </td>
        </tr>
      );
    }
  }

  totalExpenses = () => {
    const { data } = this.props;
    let total = 0;

    _.map(data, (expense) => {
      return total += expense.price;
    });

    return total;
  }

  // totalExpenses = () => {
  //   const { data } = this.props;
  //   let total = 0;
    
  //   console.log(data);
  //   data.forEach(item => {
  //     total += item.value;
  //   });
  //   return total;
  // }

  // TODO: Verificar a necessidade
  // static getDerivedStateFromProps(props) {
  //   if (_.isEmpty(props) ) {
  //     props.fetchExpenses();
  //   }
  //   return null;
  // }

  render() {
    const { addFormVisible } = this.state;
    return (
      <div className="expenses-list-container">
        <h1>Despesas</h1>
        <div className="row">
          <span
            onClick={() => this.setState({ addFormVisible: !addFormVisible })}
            className="btn-primary"
          >
            {addFormVisible ? (
              <span>Fechar formulário</span>
            ) : (
              <span>Adicionar nova despesa</span>
            )}
          </span>
        </div>

        <div className="row">
          {this.renderAddForm()}
        </div>

        <div className="row">
          <h2>Lista de Despesas</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Categoria</th>
                <th>Valor</th>
                <th className="action">Editar</th>
                <th className="action">Excluir</th>
              </tr>
            </thead>
            <tbody>
              {this.renderExpensesList()}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2" className="total">Total: </td>
                <td colSpan="3">{this.totalExpenses()}</td>
              </tr>
            </tfoot>
          </table>
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

export default connect(mapStateToProps, { addExpense, fetchExpenses, removeExpense })(ExpensesList);
