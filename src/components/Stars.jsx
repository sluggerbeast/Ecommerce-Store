import React from "react";

function Stars({ rating = 4.7, size }) {
  //   console.log(rating);
  //2.3 3.4

  const stars = [];
  let half = 0;
  for (let i = 0; i < parseInt(rating); i++) {
    stars.push(
      <i
        className={size ? `fa fa-star text-[${size}]` : `fa fa-star`}
        aria-hidden="true"
      ></i>
    );
  }
  if (rating - parseInt(rating) > 0) {
    stars.push(
      <i
        className={
          size ? `fa fa-star-half-o text-[${size}]` : `fa fa-star-half-o`
        }
        aria-hidden="true"
      />
    );
    half++;
  }
  for (let i = 0; i < 5 - parseInt(rating) - half; i++) {
    stars.push(
      <i
        className={size ? `fa fa-star-o text-[${size}]` : `fa fa-star-o`}
        
        aria-hidden="true"
      ></i>
    );
  }
  return (
    <>
      {stars}
      {" " + rating}
    </>
  );
}

export default Stars;
