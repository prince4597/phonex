import { useContext, useState } from "react";
import { Context } from "../../utils/context";
import { useParams } from "react-router-dom";
import Product from "../Products/Product/Product";
import productss from "../ALLProducts/products";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";
import "./SingleProduct.scss";

const SingleProduct = () => {
  const [quantity1, setQuantity] = useState(1);
  const { handleAddToCart } = useContext(Context);

  const { id } = useParams();
  const product = productss.find((product) => product.id === id);
  const { title, price, category, desc, img } = product;
  const relatedProduct = productss.filter((item) => category === item.category);
  const decrement = () => {
    setQuantity((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };
  const increment = () => {
    setQuantity((prevState) => prevState + 1);
  };
  const addCart = () => {
    handleAddToCart(product, quantity1);
  };

  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={img} alt="" />
          </div>
          <div className="right">
            <span className="name">{title}</span>
            <span className="price">&#8377;{price}</span>
            <span className="desc">{desc}</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span onClick={decrement}>-</span>
                <span>{quantity1}</span>
                <span onClick={increment}>+</span>
              </div>
              <button className="add-to-cart-button" onClick={addCart}>
                ADD TO CART
              </button>
            </div>

            <span className="divider" />
            <div className="info-item">
              <span className="text-bold">Category: {category} </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "50px" }} className="sec-heading">Related product</div>
        <div
          className="products"
          style={{ marginTop: "50px" }}
        >
          {relatedProduct.map((item) => (
            <Product item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
