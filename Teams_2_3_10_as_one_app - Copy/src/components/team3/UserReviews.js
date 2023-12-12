import React from "react"
import { useState, useEffect } from 'react';

import "./css/UserReviews.css"
import userImg from "./image/userIcon.png"


function UserReviews(props) { 

  console.log("Rating component " + props.reviews)
  const avgRating = props.reviews.averageRatings;

  let avgRatingComponent = [];

  const avgRatingInt = Math.round(avgRating);
  const numberOfReviews = props.reviews.numberOfReviews;
  const comments = props.reviews.comments;

  for (let i = 1.0; i <= avgRatingInt; i++) {
    avgRatingComponent.push(<span className="fa fa-star checked"></span>);
    // avgRatingComponent=avgRatingComponent+<span className="fa fa-star checked"></span>

  }

  for (let i = 5 - avgRatingInt; i >= 1; i--) {
    avgRatingComponent.push(<span className="fa fa-star"></span>);
    //avgRatingComponent=avgRatingComponent+<span className="fa fa-star"></span>
  }



  const userStarRating=(userRate)=>{

    
    let userRatingComponent = [];

    for (let i = 1.0; i <= userRate; i++) {
      userRatingComponent.push(<span className="fa fa-star checked" style={{fontSize: "10px"}}></span>);
  
    }
  
    for (let i = 5 - userRate; i >= 1; i--) {
      userRatingComponent.push(<span className="fa fa-star" style={{fontSize: "10px"}}></span>);
    }
  
    return userRatingComponent;
  }



  return (

    <div>

      <div className="reviewDiv">
        <h4><span className="heading">User Rating</span></h4>
        {avgRatingComponent}
        <p>{avgRating} average based on {numberOfReviews} reviews.</p>
        <hr className="hr1" />

        {comments.map((comment) => {

          return  <div>     
                    <img src={userImg} className="userImgDiv" height={"16px"} width={"16px"} alt="user"/>&nbsp;<div className="userDiv">{comment.user.user_id}:</div>
                    <div className="commentDiv">
                      <p>{comment.user.comment}</p>
                    </div>

                      {userStarRating(comment.user.rate)}

                      <hr className="hr2" />
                  </div>
        })}
      </div>
    </div>
  )
}

export default UserReviews;