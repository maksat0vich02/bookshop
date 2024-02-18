import React, { useEffect, useState } from "react";

const Gategory = () => {
  const [card, setCard] = useState([]);
  function getGategory() {
    let storage = JSON.parse(localStorage.getItem("book")) || [];
    setCard(storage);
  }
  useEffect(() => {
    getGategory();
  }, []);
  return (
    <section id="gategory">
      <div className="container">
        <div className="gategory">
          {card.map((el) => (
            <div>
              <img src={el.image} alt="" />
              <div className="booksGategory">
                <h1>{el.name}</h1>
                <h1>{el.category}</h1>
                <h1>{el.price}$</h1>
                <h1>{el.commit}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gategory;
