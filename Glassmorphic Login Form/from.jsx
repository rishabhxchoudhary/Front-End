import React from "react";
import './form.css'

const Form = () =>{
    return (
        <div className="glass">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="box">
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="square"></div>
                <div className="container">
                    <div className="form">
                        <h2>Login Form</h2>
                        <form action="">
                            <div className="inputBox">
                                <input type="text" placeholder="Username"/>
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Password"/>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Login"/>
                            </div>
                            <p className="forget">Forgor Password ? <a href="https://google.com">Click Here</a> </p>
                            <p className="forget">Don't have an account ? <a href="https://google.com">Sign Up</a> </p>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Form;
