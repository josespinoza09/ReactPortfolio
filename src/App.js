import React from "react"
import { BrowserRouter, Route } from "react-router-dom"


import Contact from './pages/contact.js'
import Index from './pages/index.js'
import Portfolio from './pages/portfolio.js'

import NavBar from './components/NavBar.js'
import Footer from './components/Footer.js'


function App() {
  return (
    <BrowserRouter>
        <div class="container">
          <NavBar/>
            <Route exact path={["/","/contact"]} component={Contact} />
            <Route exact path="/index" component={Index} />
            <Route exact path="/portfolio" component={Portfolio} />
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
