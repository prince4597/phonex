import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";



const Product = (props) => {
    const navigate = useNavigate();
    const {id, title, img, price} = props.item
    return (
        <div
            className="product-card"
            onClick={() => navigate("/product/" + id)}
        >
            <div className="thumbnail">
                <img src={img} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{title}</span>
                <span className="price">&#8377;{price}</span>
            </div>
        </div>
    );
};

export default Product;