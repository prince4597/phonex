import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import "./Search.scss";
import { useNavigate } from "react-router-dom";

const Search = ({ setSearchModal }) => {
  const navigate = useNavigate();

  return (
    <div className="search-modal">
      <div className="form-field">
        <input autoFocus type="text" placeholder="Search for products" />
        <MdClose className="close-btn" onClick={() => setSearchModal(false)} />
      </div>
      <div className="search-result-content">
        <div className="start-msg">
          Start typing to see products you are looking for.
        </div>
        <div className="search-results">
          <div
            className="search-result-item"
            onClick={() => {
              navigate("/product");
              setSearchModal(false);
            }}
          >
            <div className="image-container">
              <img src="" />
            </div>
            <div className="prod-details">
              <span className="name">titel</span>
              <span className="desc">desc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
