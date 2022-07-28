import React from 'react';

import './PostCard.css'
import {
  Link,
} from "react-router-dom";

const PostCard = (props) => {
  const { data } = props
  return (
    <>     
         {/* <Link to={"/sheets/" + data.categorieNom} style={{ color: 'inherit', textDecoration: 'inherit'}} > */}
        <div className="card card-2">
          <div className="card__icon"><i className="fas fa-bolt"></i></div>
          <p className="card__exit"><i className="fas fa-times"></i></p>
          <h2 className="card__title">{data.title}</h2>
          <h3></h3>
          <div className="card__apply">
              {/* <p className="card__link">Liste des {data.categorieNom}s</p> */}
          </div>    
        </div>
        {/* </Link> */}
    </>
  )
}

export {
    PostCard
};