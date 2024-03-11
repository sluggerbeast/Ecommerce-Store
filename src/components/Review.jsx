import React, { useState,useRef } from "react";
import Stars from "./Stars";

function ReviewItem({...props}) {
  return (
    <>
        
      <div className=" self-center border-2 ml-1 mb-1 p-2 pl-3 flex flex-col w-full sm:w-[60%] ">
        <div className="text-left">{props.name}</div>
        <div className="text-left"><Stars rating={props.rating} /></div>
        <div className=" flex flex-row justify-between"><span>{props.review}</span><span className="text-center">User</span></div>
      </div>
      
    </>
  );
}

function Review({rating,reviews}) {
    
    const [Initreview, setInitReviews] = useState(reviews)
    const [writeReview,  setWriteReview] = useState(false)
    const [reviewDone,setReviewDone] = useState(false);
    const reviewName = useRef();
    const reviewRating = useRef();
    const  reviewText = useRef();


    function handleWriteReview(){
        setWriteReview(true);
    }
    function handleSubmitReview(e){
        e.preventDefault();
        setInitReviews(prev=>[...prev,{name:reviewName.current.value,rating:3.2,review:reviewText.current.value}])
        setWriteReview(false);
        setReviewDone(true);
    }
  return (
    <>
      <div className="flex flex-col sm:flex-row m-2">
        <div className="flex-[40%] p-2 lg:flex-[20%]  border-2 border-black h-fit ">
          
          <div className="ml-5 ">
          customer reviews <br/>
          <Stars rating={rating} />
          </div>
          
          {!writeReview && <button className="px-3 ml-5 bg-black text-white" onClick={handleWriteReview}>Write Review</button>}
         { writeReview && <div className="flex flex-col text-center">
         <form className="flex flex-col text-center" onSubmit={handleSubmitReview}>
            <span>Rate</span>
            <div><Stars /></div>
            
            <label className="text-start">Review Title</label>
            <input ref={reviewName} required type="text" placeholder="Great product..." />
            <label className="text-start" >Review</label>
            <textarea ref={reviewText} required type="text" placeholder="I love it..." />
            <button type="submit" className="bg-slate-200 w-full" >Submit</button>
            </form>
          </div>}
        </div>
        <div className="flex-[60%] lg:flex-[80%]  ">
            {Initreview.length>0 && Initreview.map((item)=>(
              <ReviewItem name={item.name} rating={item.rating} review={item.review}  />
              ))}
        </div>
      </div>
    </>
  );
}

export default Review;
