import React from 'react'

function ReviewItem(){

    return(
        <>
        <div className='bg-slate-200 border-black border-2 m-1'>
            <div>Name</div>
            <div>Ratings</div>
            <div>Review</div>
        </div>
        
        </>
    )
}

function Review() {
  return (
    <>
    <div className='flex flex-row'>
        <div className='flex-[40%] lg:flex-[20%] bg-zinc-400 h-[200px]'>
            customer reviews
            <p>stars</p>
            <div>
               <span>Review this project</span><br/>
                <span>Give stars</span>
                <input type="text" placeholder='Write a Review'/>
            </div>
        </div>
        <div className='flex-[60%] lg:flex-[80%]'>
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
            <ReviewItem />
        </div>
    </div>
    </>
  )
}

export default Review