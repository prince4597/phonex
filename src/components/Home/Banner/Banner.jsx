import React from "react";
import "./Banner.scss";
import { useNavigate } from "react-router-dom";
import BannerImg from "../../../assets/banner.png"

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1><span className="pr">50%</span> OFF</h1>
                    <p>
                        Every Latest <span>iPhone</span> is available in our online mobile store.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2" onClick={() => navigate("/product/01")}>Shop Now</div>
                    </div>
                </div>
                {/* <img className="banner-img" src={BannerImg} alt="banner"/> */}
            </div>
        </div>
    );
};

export default Banner;
