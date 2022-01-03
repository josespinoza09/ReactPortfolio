/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react"
import './style.css'

//Images
import me from '../Assets/me.jpg'
import Github from '../Assets/Github.png'
import LinkedIn from '../Assets/LinkedIn.png'

function Index() {
    return (
        <>
            <section class="container outline">
                <div class="container" >
                    <div class="row">
                        <h1>About Me</h1>
                        <hr />
                        <div id="crd" class="card mb-3">
                            <div class="row">
                                <div class="col-sm-7 col-md-5">
                                    <img class="img-fluid" src={me} alt="me" />
                                </div>
                                <div class="col-md-7">
                                    <div class="card-body">
                                        <p class="card-text " style={{fontSize:"20px"}}>I am Jose Espinoza, a new Software Developer passionate about the field of development
                                         who graduated from the Full Stack Development Bootcamp at the University of Toronto. I have the skills required for the position you 
                                         are posting and some more extras. I am eager to learn, adapt and develop in a team environment.  
                                         My work experience shows high proficiency to work as part of a team and supervising/managing multiple people and they were working 
                                         for startup companies so I am willing to go the extra step to succeed. I have 16 projects in my Github that show my 
                                         understanding and usage of languages and technologies required for this job, like Javascript, React, Node.js, Express.js, API calls, 
                                         and SQL databases. I hope you consider me as an option to add on to the development team.
                                </p>
                                        <button><a href="Assets/JoseEspinozaResume.pdf">Download Resume</a></button>


                                    </div>
                                    <a href="https://www.linkedin.com/in/jose-antonio-espinoza-morales-16888716a/" />
                                    <img src={LinkedIn} alt="Linked in" width="150" height="80" />
                                    <a href="https://github.com/josespinoza09" />
                                    <img src={Github} alt="GitHub" width="150" height="80" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Index