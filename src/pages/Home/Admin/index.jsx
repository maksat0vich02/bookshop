import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [commit, setCommit] = useState("");
  const naviget = useNavigate();
  function getData() {
    const obj = {
      image,
      name,
      category,
      price,
      commit,
    };
    let storage = JSON.parse(localStorage.getItem("book")) || [];
    storage.push(obj);
    localStorage.setItem("book", JSON.stringify(storage));
  }
  return (
    <section id="admin">
      <div className="container">
        <div className="admin">
          <input
            type="text"
            className="imageInput"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <div className="adminInput">
            <input
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="nameInput"
              type="text"
              placeholder="Product Name"
            />
            <div className="inputs">
              <input
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className="categoryInput"
                type="text"
                placeholder="Category"
              />
              <input
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                className="priceInput"
                type="text"
                placeholder="Price"
              />
            </div>
            <input
              onChange={(e) => {
                setCommit(e.target.value);
              }}
              className="commitInput"
              type="text"
              placeholder="Product description..."
            />
            <button
              onClick={() => {
                getData();
                naviget("/gategory");
              }}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admin;
