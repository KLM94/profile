import React from 'react'
import Profile from './Components/Profile'

function App() {
  return (
    <div className="App">
      <Home path="/" loggedInUser={loggedInUser} />
    </div>
  );
}

export default App;
