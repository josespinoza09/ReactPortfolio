import React from "react"

function Contact() {
    const sectionStyle= {
        borderRadius: "2px",
        maxWidth: "800px",
        backgroundColor:" white"
    }
    return (
        <>
            <section class="card mt-5 mx-4" style={{sectionStyle}}>
                <div class="container ">
                    <div class="row">
                        <h1>Contact Me</h1>
                        <hr/>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name"/>
                </div>
                                <div class="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email Address"/>
                </div>
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Message"
                                            rows="3"></textarea>
                                    </div>
                                </div>
                                <input class="btn btn-primary btn-lg" type="submit" value="Submit"/>
        </div>
    </section>
    </>
    )
}
export default Contact