import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import './App.css';

function App() {
  return (
    <BrowserRouter>
        <div class="container">
            <Route exact path={["/","/tasks"]} component={Tasks} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/logout" component={Logout} />
        </div>
      </BrowserRouter>
  );
}

export default App;
