
import React from "react";

export default function Contact (){
    return (
        <div className="contact" >
            <div className="container" >
                <div className="form-container">
                    <form>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label> name</label>
                            <input type="text" placeholder="Enter your Name"/>
                        </div>
                        <div>
                            <label> Email</label>
                            <input type="email" placeholder="Enter your Email"/>
                        </div>
                        <div>
                            <label> Message</label>
                            <textarea rows="10" placeholder="Enter your Email"/>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}