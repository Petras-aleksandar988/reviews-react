import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

function  Review () {
  const [index, setIndex] = useState(1);
  const { name, job, image, text } = people[index];

  function checkIndex(number) {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  }
  function prevButton() {
    setIndex((prevIndex) => {
      const prevPerson = prevIndex - 1;
      return checkIndex(prevPerson);
    });
  }
  function nextButton() {
    setIndex((prevIndex) => {
      const nextPerson = prevIndex + 1;
      return checkIndex(nextPerson);
    });
  }
  function randomPerson() {
    let randomNumber = Math.floor(Math.random() * people.length)
   
    if (randomNumber === index) {
    randomNumber = index + 1
   }
    setIndex(checkIndex(randomNumber))

}
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={image} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevButton}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextButton}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        suprise me
      </button>
    </article>
  );
};

export default Review;
