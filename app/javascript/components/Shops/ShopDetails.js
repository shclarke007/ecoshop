import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Moment from 'react-moment';

const ShopDetails = (props) => {
  // const updated_at = 
  return <>
    <article className="col-sm-12 col-md-4 col-lg-4">
        <div className="card-group">
          <div className="card" style= {{ boxShadow: `${2}px ${5}px ${3}px rgb(0,0,0)/50%` }}>
              <div className="mx-auto d-block" style={{ minWidth: `${350}px`}}>
                <img 
                  src={props.attributes.image_url} 
                  alt={props.attributes.name} 
                  className="card-img-top" 
                  style={{ borderRadius: `${0.25}rem` }}/>
              </div>
            <div className="card-body text-left">
              <h3 className="card-title">{props.attributes.name}</h3>
              <h4 className="card-text">{props.attributes.city}</h4>
              <p className="card-text">{props.attributes.post_code}</p>
              {/* <a href={`${props.attributes.website}`} target="_blank" className="btn btn-primary" style={{marginRight: `${1}em`}}>Website</a> */}
              <Link 
                className="btn btn-info btn-details" 
                to={`/shops/${props.attributes.id}`}
              >Details</Link>
              <p 
                className="card-text">
                <small 
                  className="text-muted">Last updated <Moment date={ props.attributes.updated_at }/>
                </small>
              </p>
            </div>
          </div>
        </div>
    </article>
  </>
}

export default ShopDetails
