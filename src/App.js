import './App.css';
import Home from './Components/Home';
import Welcome from './Components/Welcome';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {

  const [user, setUser] = React.useState(JSON.parse(localStorage.getItem('user')));

  // console.log(user)

  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Redirect to="/welcome" /></Route>
        <Route path="/welcome" ><Welcome  setUser={setUser}/></Route>
        <Route path="/home" ><Home userName={user}/></Route>
      </Switch>
    </Router>
  );
}

export default App;
