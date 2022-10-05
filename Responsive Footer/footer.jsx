import React from "react";
import './footer.css'

const Footer = () =>{
    return (
        <>
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> */}
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4>company</h4>
                        <ul>
                            <li><a href="#adjbck">about us</a></li>
                            <li><a href="#ajdb">our services</a></li>
                            <li><a href="#,nabdh">privacy policy</a></li>
                            <li><a href="#a,jbch">affiliate program</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>get help</h4>
                        <ul>
                            <li><a href="#1">FAQ</a></li>
                            <li><a href="#1">shipping</a></li>
                            <li><a href="#1">returns</a></li>
                            <li><a href="#1">order status</a></li>
                            <li><a href="#1">payment options</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>online shop</h4>
                        <ul>
                            <li><a href="#1">watch</a></li>
                            <li><a href="1#">bag</a></li>
                            <li><a href="#1">shoes</a></li>
                            <li><a href="#1">dress</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>follow us</h4>
                        <div className="social-links">
                            <a href="1#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#1"><i className="fab fa-twitter"></i></a>
                            <a href="#1"><i className="fab fa-instagram"></i></a>
                            <a href="#1"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;
