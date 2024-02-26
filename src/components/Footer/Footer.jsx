import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        We PhoneX Developer provide you the best mobile phone and it's accessories based on your need.
                        Thank you for visiting our website.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Gota, Ahmedabad-382481
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone:+91 9328608883</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: phonex@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Phones</span>
                    <span className="text">Headphones</span>
                    <span className="text">Airdopes</span>
                    <span className="text">AR-VR</span>
                    
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        Phone<span style={{color:"red"}}>X</span>
                    </span>
                    <img src={Payment} alt="payment" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
