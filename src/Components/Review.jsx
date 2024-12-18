import React from "react";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Review(props) {
  return (
    <div>
      <div className="py-4">
        <div className="flex flex-col items-center gap-4 ml-4 lg:ml-8">
          <h1 className="text-3xl text-[#c6d8c0]">
            <FontAwesomeIcon icon={faQuoteLeft} />
          </h1>
          <p>{props.review}</p>
          <img src={props.reviewImg} alt="Reviewer" className="w-12 rounded-full" />
          <p>{props.reviewerName}</p>
        </div>
      </div>
    </div>
  );
}

export default Review;
