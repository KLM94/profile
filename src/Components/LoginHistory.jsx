import React, { Component } from "react";
import { data } from "../data/data.json";

const { loginHistory } = data;

class LoginHistory extends Component {
  state = {
    showHistory: true,
  };

  toggleHistory = (event) => {
    this.setState({ showHistory: !this.state.showHistory });
    // console.log(event);
  };

  render() {
    return (
      <div>
        <div className="login-history">
          <button onClick={this.toggleHistory}>Login History:</button>
          {this.state.showHistory && (
            /* if showHistory is true, it will excecute the following: */
            <ul className="history-li">
              {loginHistory.map((login) => (
                <li key={login.id}>{login.date}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default LoginHistory;
