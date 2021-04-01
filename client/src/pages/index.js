/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react"
import 'index.css'

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
                                    <img class="img-fluid" src="Assets/me.jpg" alt="me" />
                                </div>
                                <div class="col-md-7">
                                    <div class="card-body">
                                        <p class="card-text " style={{fontSize:"20px"}}>I have a wide set of skills from being involved in warehousing companies.
                                        I spent one year at Agrimport and one year in Bronte Import were I was the warehouse supervisor that included:
                                        -Certified Forklift Operator
                                        -Knowledgeable in computers – Oracle NetSuite,SOS Inventory, Zoho Inventory and Java.
                                        -Well-organized, detailed approach to work.
                                        -Leadership skills.
                                        -Works well within a team environment.
                                        -Articulates instructions clearly.
                                </p>
                                        <button><a href="Assets/Jose_Espinoza_-_Software_Engineer.pdf">Download Resume</a></button>


                                    </div>
                                    <a href="https://www.linkedin.com/in/jose-antonio-espinoza-morales-16888716a/" />
                                    <img src="Assets/LinkedIn.png" alt="Linked in" width="150" height="80" />
                                    <a href="https://github.com/josespinoza09" />
                                    <img src="Assets/Github.png" alt="GitHub" width="150" height="80" />
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