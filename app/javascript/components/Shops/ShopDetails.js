import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Moment from 'react-moment';

const ShopDetails = (props) => {
  const { image_url, name, city, post_code, total_likes, id, updated_at } = props.attributes
  return <>
    <article className="col-sm-12 col-md-4 col-lg-4">
        <div className="card-group">
          <div className="card" style= {{ boxShadow: `${2}px ${5}px ${3}px rgb(0,0,0)/50%` }}>
              <div className="mx-auto d-block" style={{ maxWidth: `${350}px`}}>
                <img 
                  src={image_url} 
                  alt={name} 
                  className="card-img-top" 
                  style={{ borderRadius: `${0.25}rem` }}/>
              </div>
            <div className="card-body text-left">
              <h3 className="card-title">{name}</h3>
              <h4 className="card-text">{city}</h4>
              <p className="card-text">{post_code}</p>
              <p className="card-text">{total_likes} 
                <i className="fas fa-heart pl-2"></i> 
                {/* <span> 1 </span><i className="fas fa-thumbs-down"></i>  */}
              </p>
              {/* <a href={`${props.attributes.website}`} target="_blank" className="btn btn-primary" style={{marginRight: `${1}em`}}>Website</a> */}
              <Link 
                className="btn btn-info btn-details" 
                to={`/shops/${id}`}
              >Details</Link>
              <p 
                className="card-text">
                <small 
                  className="text-muted">Last updated <Moment date={ updated_at }/>
                </small>
              </p>
            </div>
          </div>
        </div>
    </article>
  </>
}

export default ShopDetails
