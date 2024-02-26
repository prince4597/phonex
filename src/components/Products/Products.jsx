import "./Products.scss";
import React, { useState, useEffect } from "react";
import Product from "./Product/Product";
import productss from "../ALLProducts/products";
import Dropdown from "react-bootstrap/Dropdown";

const Products = ({ innerPage, headingText }) => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(productss);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(productss);
    }

    if (category === "PHONE") {
      const filteredProducts = productss.filter(
        (item) => item.category === "phone"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "HEADPHONE") {
      const filteredProducts = productss.filter(
        (item) => item.category === "headphone"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "AIRPORDUS") {
      const filteredProducts = productss.filter(
        (item) => item.category === "ear"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);
  return (
    <div className="products-container">
      {!innerPage && <div className="sec-heading">{headingText}</div>}
      <div>
        <Dropdown>
          <Dropdown.Toggle variant="primary" id="dropdown-basic">
            Categories
          </Dropdown.Toggle>

          <Dropdown.Menu>
          <Dropdown.Item
              className={`d-flex align-items-center gap-2 ${
                category === "ALL"
              } `}
              onClick={() => setCategory("ALL")}
            >
              ALL
            </Dropdown.Item>
            <Dropdown.Item
              className={`d-flex align-items-center gap-2 ${
                category === "PHONE"
              } `}
              onClick={() => setCategory("PHONE")}
            >
              Phone
            </Dropdown.Item>
            <Dropdown.Item
              className={`d-flex align-items-center gap-2 ${
                category === "HEADPHONE"
              } `}
              onClick={() => setCategory("HEADPHONE")}
            >
              Headphone
            </Dropdown.Item>
            <Dropdown.Item
              className={`d-flex align-items-center gap-2 ${
                category === "AIRPORDUS"
              } `}
              onClick={() => setCategory("AIRPORDUS")}
            >
              Airpodus
            </Dropdown.Item>
            <Dropdown.Item>AR-VR</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div
        style={{ marginTop: "40px" }}
        className={`products ${innerPage ? "innerPage" : ""}`}
      >
        {allProducts.map((item) => (
          <Product key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
