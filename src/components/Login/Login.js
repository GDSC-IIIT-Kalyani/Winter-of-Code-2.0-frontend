import React from "react";
import "./Login.css";
import Login from "../src/assets/login.jpg"
import SignUp from "../src/assets/signup.jpg"

const Login = () => {
    return (
        <section id="Login">
            <div className="container">
                <div className="user signinBx">
                    <div className="imgBx"><img src={Login} /></div>
                    <div className="formBx">
                        <form>
                            <h2>Sign In</h2>
                            <input type="text" name="" placeholder="Username">
                            <input type="password" name="" placeholder="Password">
                            <input type="submit" name="" value="Login">
                            <p className="signup">don't have an account? <a href="#" onclick="toggleForm();">Sign up.</a></p>
                        </form>
                    </div>
                </div>
                <div className="user signupBx">
                    <div className="formBx">
                        <form>
                            <h2>Create an account</h2>
                            <input type="text" name="" placeholder="Username">
                            <input type="email" name="" placeholder="Email Address">
                            <input type="password" name="" placeholder="Create Password">
                            <input type="password" name="" placeholder="Confirm Password">
                            <input type="submit" name="" value="Sign up">
                            <p className="signup">Already have an account? <a href="#" onclick="toggleForm();">Sign in.</a></p>
                        </form>
                    </div>
                    <div className="imgBx"><img src={SignUp} /></div>
                </div>
            </div>
        </section>
        <script type="text/javascript">
            function toggleForm(){
                var container = document.querySelector('.container');
                var section = document.querySelector('section');
                container.classNameList.toggle('active')
                section.classNameList.toggle('active')
            }
        </script>
        );
};

export default Login;