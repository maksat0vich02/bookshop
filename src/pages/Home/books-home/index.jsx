import React from "react";
import { data } from "../../../bookKey";

const Books = () => {
  return (
    <div>
      <book>
        <div className="container">
          <div className="book">
            <div className="books_text">
              <h1>Books</h1>
              <p>View all</p>
            </div>
            <div className="book_display">
              {data.map((el) => (
                <div className="book_div">
                  <img src={el.image} alt="img-one" />
                  <h1>{el.name}</h1>
                  <p>{el.surName}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </book>
    </div>
  );
};

export default Books;
