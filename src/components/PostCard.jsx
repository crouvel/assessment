
/***** POST CARD FUNCTIONAL COMPONENT ******/

import React from 'react';

//include style
import './PostCard.css'
//include react-router-dom
import {
  Link,
} from "react-router-dom";
//include Post Detail component
import PostDetail from './PostDetail';

const PostCard = (props) => {
  
  // Constant that stores the props given by the parent component to display Post's information in each card
  const { data } = props

  // Renders the post card
  return (
    <>
      <Link to={`/posts/${data.id}`} element={() => <PostDetail post={data.id} />} style={{ color: 'inherit', textDecoration: 'inherit' }} >
        <div className="card card-2">
          <div className="card__icon"><i className="fas fa-bolt"></i></div>
          <p className="card__exit"><i className="fas fa-times"></i></p>
          <div className="sub">
            <h2 className="card__title text-center"><img
              src={data.author.avatar}
              className="photo"
            /><b>{data.title}</b></h2>
            <h4 className="text-center pb-1">Written by <b>{data.author.name}</b></h4>
            <h4 className="pdate text-center"><b>Published by the </b>{data.publishDate.slice(0, 10)}</h4>
          </div>
          <div className="card__apply">
            <u>Click to see details</u>
          </div>
        </div>
      </Link>
    </>
  )
}

export {
  PostCard
};