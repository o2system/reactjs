import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends React.Component {
    render() {
        return (
            <div className="welcome">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src="../../assets/img/logo/logo.png" alt="O2System Framework" height="200px"></img>
                            <h1 className="text-uppercase mt-5 mb-0">
                                O2System Framework
                            </h1>
                            <p className="lead text-uppercase mb-2">
                                The Next Generation of PHP Framework
                            </p>
                            <p>
                                This page is rendered using ReactJS.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <ul className="nav-bottom">
                                <li>
                                    <a href="https://github.com/o2system" target="_blank">
                                        <i className="fab fa-github"></i>
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a href="https://o2system.gitbooks.io" target="_blank">
                                        <i className="fas fa-book"></i>
                                        GitBook
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}