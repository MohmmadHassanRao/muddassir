import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'
import axios from 'axios'
import './signup.css'


function Signup() {

    var url = "http://localhost:5000";

    function signUpForm() {


        console.log("function running");

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value.toLowerCase();
        let password = document.getElementById("password").value;

        var user = {
            name: name,
            email: email,
            password: password,
        }

        axios({
            method: 'post',
            url: url + "/auth/signup",
            data: user
        }).then((response) => {
            console.log("response", response);
            alert(response.data.message)
        }, (error) => {
            alert(error.response.data.message)
        }
        )

        return false;

    }





    return (
        <div className="signupDiv">
            <h1>
                Signup
            </h1>
            <div>
                <form onSubmit={(e) => signUpForm(e)}>
                    <div class="mb-3 ">
                        <label for="name" class="form-label">Name</label>
                        <input type="name" class="form-control" id="name" placeholder="Name" />
                    </div>
                    <div class="mb-3 ">
                        <label for="email" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3 ">
                        <label for="password" class="visually-hidden">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Password" />
                    </div>
                    <div className='mb-3 '>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">Submit</button>
                        </div>

                    </div>
                </form>

            </div>
        </div>
    )

}
export default Signup;