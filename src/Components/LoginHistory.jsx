import React, { Component } from "react";
import { data } from "../data/data.json";

const { loginHistory } = data;

class LoginHistory extends Component {
  state = {
    showHistory: false,
  };
  // Always show Login history button on page

  toggleHistory = (event) => {
    this.setState({ showHistory: !this.state.showHistory });
    // console.log(event);
  };
  /* When the button is clicked, the contents will hide*/

  render() {
    return (
      <div>
        <div className="login-history-contents">
          <button className="login-history-btn" onClick={this.toggleHistory}>
            View login history
          </button>
          {this.state.showHistory && (
            /* if showHistory is true, it will excecute the following: */
            <ul className="history-li">
              {loginHistory.map((login) => (
                <li key={login.id}>{login.date}</li>
              ))}
            </ul>
            /* Map through each login history and list each one */
          )}
        </div>
      </div>
    );
  }
}

export default LoginHistory;
