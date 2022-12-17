import React from "react";
import "./star.styles.scss";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const generateStar = (arr, rating) => {
  for (let i = 0; i < rating; i++) {
    arr.push(<AiFillStar />);
  }
  while (arr.length < 5) {
    arr.push(<AiOutlineStar />);
  }
};
export function Star({ rating, reviews }) {
  const arr = [];
  generateStar(arr, rating);
  const listOfStar = arr.map((star) => star);

  return (
    <div className="star-container">
      {listOfStar}
      {reviews}
    </div>
  );
}
