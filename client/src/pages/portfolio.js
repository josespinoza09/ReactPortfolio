import React from 'react'
import 'portfolio.css'

function Portfolio (){
    return(
        <>
        <section class="container" style= {{margin:"5%"}}>
    <div class="row">
      <div class="col">
        <div class="row">
          <h1 style={{color: "white",backgroundColor: "black",width:"25%"}}><strong>Portfolio</strong></h1>
        </div>
        <div class="row">
          <div style={{backgroundColor: "white"}} class="col-sm-6 col-md-4">
            <a href="https://jose-budget.herokuapp.com/">
              <h5>Budget Tracker</h5>
            <img src="Assets/Screenshot.PNG" class="img-thumbnail" alt="placeholder" />
          </a>
            <p style={{backgroundColor: "white"}}>Giving users a fast and easy way to track their money is important, but allowing them to access that information anytime is even more important.</p>
          </div>
          <div style={{backgroundColor: "white"}} class="col-sm-6 col-md-4">
            <a href="https://teamcirclealpha.github.io/GetMeEmployed/">
              <h5>Get Me Employed</h5>
            <img src="Assets/Screenshot1.PNG" class="img-thumbnail" alt="placeholder" />
          </a>
          <p>The web page "Get me Employed" provides a user with a clear and clean experience, that allows them to search for jobs across a couple of platforms in one place.</p>
          </div>
        </div>
        <div class="row">
          <div style={{backgroundColor: "white"}} class="col-sm-6 col-md-4">
            <a href="https://josespinoza09.github.io/Scheduler/">
              <h5>Scheduler</h5>
            <img src="Assets/Screenshot2.PNG" class="img-thumbnail" alt="placeholder" />
          </a>
          <p>This web page provides a daily planner.</p>
          </div>
          <div style={{backgroundColor: "white"}} class="col-sm-6 col-md-4">
            <a href="https://note-taker-joselu.herokuapp.com/">
              <h5>Scheduler</h5>
            <img src="Assets/Screenshot3.PNG" class="img-thumbnail" alt="placeholder" />
          </a>
          <p>This is a Note taking application.</p>
          </div>
      </div>
    </div>
    </div>
  </section>
        </>
    )
}
export default Portfolio