import React from 'react';

import './PostCard.css'
import {
  Link,
} from "react-router-dom";
import PostDetail from './PostDetail';

const PostCard = (props) => {
  const { data } = props

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