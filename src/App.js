import React, { Component } from "react";
import ExpensesList from "./pages/expenses/ExpensesList";
import "./Assets/stylesheet/Base.scss";

class App extends Component {
  render() {
    return (
      <main id="app" className="full-width">
        <div className="full-width__content">
          <ExpensesList />
        </div>
      </main>
    )
  }
}

export default App;
