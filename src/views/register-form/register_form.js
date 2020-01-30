import React, { Component } from 'react';

export default class RegisterForm extends Component {
    render() {
        return (
            <div className="main-register-wrap modal">
                <div className="reg-overlay" />
                <div className="main-register-holder">
                    <div className="main-register fl-wrap">
                        <div className="close-reg color-bg">
                            <i className="fal fa-times" />
                        </div>
                        <ul className="tabs-menu">
                            <li className="current">
                                <a href="#tab-1">
                                    <i className="fal fa-sign-in-alt" /> Login
          </a>
                            </li>
                            <li>
                                <a href="#tab-2">
                                    <i className="fal fa-user-plus" /> Register
          </a>
                            </li>
                        </ul>
                        {/*tabs */}
                        <div id="tabs-container">
                            <div className="tab">
                                {/*tab */}
                                <div id="tab-1" className="tab-content">
                                    <h3>
                                        Sign In
                                        <span>
                                            Easy<strong>Book</strong>
                                        </span>
                                    </h3>
                                    <div className="custom-form">
                                        <form method="post" name="registerform">
                                            <label>
                                                Username or Email Address <span>*</span>
                                            </label>
                                            <input
                                                name="email"
                                                type="text"
                                                onclick="this.select()"

                                            />
                                            <label>
                                                Password <span>*</span>{" "}
                                            </label>
                                            <input
                                                value=""
                                                autoCapitalize="none"
                                                autoComplete={false}
                                                autoCorrect={false}

                                                name="password"
                                                type="password"
                                                onclick="this.select()"

                                            />
                                            <button type="submit" className="log-submit-btn color-bg">
                                                <span>Log In</span>
                                            </button>
                                            <div className="clearfix" />
                                            <div className="filter-tags">
                                                <input id="check-a" type="checkbox" name="check" />
                                                <label htmlFor="check-a">Remember me</label>
                                            </div>
                                        </form>
                                        <div className="lost_password">
                                            <a href="#">Lost Your Password?</a>
                                        </div>
                                    </div>
                                </div>
                                {/*tab end */}
                                {/*tab */}
                                <div className="tab">
                                    <div id="tab-2" className="tab-content">
                                        <h3>
                                            Sign Up{" "}
                                            <span>
                                                Easy<strong>Book</strong>
                                            </span>
                                        </h3>
                                        <div className="custom-form">
                                            <form
                                                method="post"
                                                name="registerform"
                                                className="main-register-form"
                                                id="main-register-form2"
                                            >
                                                <label>
                                                    Full Name <span>*</span>
                                                </label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    onclick="this.select()"

                                                />
                                                <label>
                                                    Email Address <span>*</span>
                                                </label>
                                                <input
                                                    name="email"
                                                    type="text"
                                                    onclick="this.select()"

                                                />
                                                <label>
                                                    Password <span>*</span>
                                                </label>
                                                <input
                                                    name="password"
                                                    type="password"
                                                    onclick="this.select()"

                                                />
                                                <button
                                                    type="submit"
                                                    className="log-submit-btn color-bg"
                                                >
                                                    <span>Register</span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                {/*tab end */}
                            </div>
                            {/*tabs end */}
                            <div className="log-separator fl-wrap">
                                <span>or</span>
                            </div>
                            <div className="soc-log fl-wrap">
                                <p>For faster login or register use your social account.</p>
                                <a href="#" className="facebook-log">
                                    <i className="fab fa-facebook-f" />
                                    Connect with Facebook
          </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    };

}

