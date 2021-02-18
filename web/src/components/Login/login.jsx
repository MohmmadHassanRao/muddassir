import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'
import axios from 'axios'

import './login.css'


function Login() {

    var url = "http://localhost:5000";

    function signIn() {

        let email = document.getElementById("email").value.toLowerCase();
        let password = document.getElementById("password").value;

        var user = {
            email: email,
            password: password,
        }

        axios({
            method: 'post',
            url: url + "/auth/login",
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
        <div className="loginDiv">
            <h1>
                Login</h1>


            <div>
                <form onSubmit={(e) => signIn(e)} >
                    <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div class="mb-3 ">
                        <label for="inputPassword2" class="visually-hidden">Password</label>
                        <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
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
export default Login;;