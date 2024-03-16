import React, { useState,useRef,useContext, useEffect } from "react";
import Stars from "./Stars";
import { totList } from "../App";

function ReviewItem({...props}) {
  return (
    <>
        
      <div className=" self-center border-2 ml-1 mb-1 p-2 pl-3 flex flex-col w-full sm:w-[60%] ">
        <div className="text-left">{props.title}</div>
        <div className="text-left"><Stars rating={props.rating} /></div>
        <div className=" flex flex-row justify-between"><span>{props.review}</span><span className="text-center">{props.userId}</span></div>
      </div>
      
    </>
  );
}

function Review({id,rating,reviews}) {
    
    const [Initreview, setInitReviews] = useState(reviews)
    const [writeReview,  setWriteReview] = useState(false)
    const [reviewDone,setReviewDone] = useState(false);
    const reviewTitle = useRef();
    const reviewRating = useRef();
    const  reviewText = useRef();
    const  totLis = useContext(totList);

    function handleWriteReview(){
        setWriteReview(true);
    }
    
    function handleSubmitReview(e){
        let userId = "You"
        e.preventDefault();
        setInitReviews(prev=>[{title:reviewTitle.current.value,rating:3.2,review:reviewText.current.value,userId:userId},...prev])
        // totLis.onReviewAdd(id,Initreview);
        setWriteReview(false);
        setReviewDone(true);
    }
    useEffect(()=>{
      totLis.onReviewAdd(id,Initreview);
    },[Initreview])
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
            <input ref={reviewTitle} required type="text" placeholder="Great product..." />
            <label className="text-start" >Review</label>
            <textarea ref={reviewText} required type="text" placeholder="I love it..." />
            <button type="submit" className="bg-slate-200 w-full" >Submit</button>
            </form>
          </div>}
        </div>
        <div className="flex-[60%] lg:flex-[80%]  ">
            {Initreview.length>0 && Initreview.map((item)=>(
              <ReviewItem title={item.title} rating={item.rating} review={item.review} userId={item.userId}  />
              ))}
        </div>
      </div>
    </>
  );
}

export default Review;
