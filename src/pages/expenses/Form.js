import React, { Component } from "react";
import { connect } from "react-redux";
import { addExpense, fetchExpenses, removeExpense } from "../../actions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar, faMobileAlt, faUtensils, faCocktail, faUserTag } from '@fortawesome/free-solid-svg-icons';
import "../../stylesheet/Form.scss";
import "../../stylesheet/Button.scss";
import "../../stylesheet/ColorBox.scss";
import "./Expenses.scss";

class ExpensesForm extends Component {
  constructor(props) {  
    super(props);
    this.state = {
      addExpenseName: "",
      addExpenseCategory: "",
      addExpensePrice: ""
    };

    this.handleInputExpenseNameChange = this.handleInputExpenseNameChange.bind(this);
    this.handleInputExpenseCategoryChange = this.handleInputExpenseCategoryChange.bind(this);
    this.handleInputExpensePriceChange = this.handleInputExpensePriceChange.bind(this);
    this.handleFormSubmitExpense = this.handleFormSubmitExpense.bind(this);  
  }

  handleInputExpenseNameChange = event => {
    this.setState({ addExpenseName: event.target.value });
  };

  handleInputExpenseCategoryChange = event => {
    this.setState({ addExpenseCategory: event.target.value});
  }

  handleInputExpensePriceChange = event => {
    this.setState({ addExpensePrice: parseFloat(event.target.value)});
  }

  handleFormSubmitExpense = event => {
    event.preventDefault();

    const { addExpenseName } = this.state;
    const { addExpenseCategory } = this.state;
    const { addExpensePrice } = this.state;
    const { addExpense } = this.props;

    addExpense({
      name: addExpenseName,
      category: addExpenseCategory,
      price: addExpensePrice
    });

    this.setState({
      addExpenseName: "",
      addExpenseCategory: "",
      addExpensePrice: ""
    });
  };

  render() {
    const { addExpenseName, addExpensePrice } = this.state;
    return (
      <div id="expenses-add-form">
        <form onSubmit={this.handleFormSubmitExpense}>
          <h2>Nova Despesa</h2>
          <div className="input-field">
            <label htmlFor="addExpenseName">Nome</label>
            <input
              value={addExpenseName}
              onChange={this.handleInputExpenseNameChange}
              id="addExpenseName"
              type="text"
            />
          </div>
        
          <div className="input-field">
            <label htmlFor="addExpensePrice">Valor (R$)</label>
            <input
              value={addExpensePrice}
              onChange={this.handleInputExpensePriceChange}
              id="addExpensePrice"
              type="text"
            />
          </div>

          <div className="row">
            <label>Categoria</label>

            <div className="category-icons" onChange={this.handleInputExpenseCategoryChange.bind(this)}>
              <input type="radio" name="category" id="catHouse" value="Casa" />
              <label htmlFor="catHouse" className="color-box color-box--brown category-box">
                <FontAwesomeIcon icon={faHome} size="4x" />
                <div>Casa</div>
              </label>

              <input type="radio" name="category" id="catTransportation" value="Transporte" />
              <label htmlFor="catTransportation" className="color-box color-box--blue category-box">
                <FontAwesomeIcon icon={faCar} size="4x" />
                <div>Transporte</div>
              </label>

              <input type="radio" name="category" id="catComunication" value="Comunicação" />
              <label htmlFor="catComunication" className="color-box color-box--green category-box">
                <FontAwesomeIcon icon={faMobileAlt} size="4x" />
                <div>Comunicação</div>
              </label>

              <input type="radio" name="category" id="catFood" value="Alimentação" />
              <label htmlFor="catFood" className="color-box color-box--red category-box">
                <FontAwesomeIcon icon={faUtensils} size="4x" />
                <div>Alimentação</div>
              </label>

              <input type="radio" name="category" id="catDrinks" value="Bebidas" />
              <label htmlFor="catDrinks" className="color-box color-box--orange category-box">
                <FontAwesomeIcon icon={faCocktail} size="4x" />
                <div>Bebedeira</div>
              </label>

              <input type="radio" name="category" id="catPersonal" value="Pessoal" />
              <label htmlFor="catPersonal" className="color-box color-box--purple category-box">
                <FontAwesomeIcon icon={faUserTag} size="4x" />
                <div>Pessoal</div>
              </label>
            </div>
            
          </div>

          <div className="row">
            <button className="btn-success" onClick={this.handleFormSubmitExpense}>Salvar despesa</button>
          </div>
        </form>
      </div> 
    )
  };
}

const mapStateToProps = ({ data }) => {
  return {
    data
  };
};

export default connect(mapStateToProps, { addExpense, fetchExpenses, removeExpense })(ExpensesForm);
