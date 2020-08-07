import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Shop = (props) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-4 d-flex align-items-stretch">
      <div className="card-group">
      <div className="card">
        <img src={props.attributes.image_url} alt={props.attributes.name} className="card-img-top mx-auto d-block" style={{maxWidth: `${250}px`}}/>
        <div className="card-body text-center">
          <h4 className="card-title">{props.attributes.name}</h4>
          <p className="card-text">{props.attributes.address_1}</p>
          <p className="card-text">{props.attributes.address_2}</p>
          <p className="card-text">{props.attributes.town}</p>
          <p className="card-text">{props.attributes.city}</p>
          <p className="card-text">{props.attributes.post_code}</p>
          <a href={`${props.attributes.website}`} target="_blank" className="btn btn-primary" style={{marginRight: `${1}em`}}>Website</a>
          <Link className="btn btn-info" to={`/shops/${props.attributes.id}`}>View Shop</Link>
          <p className="card-text"><small className="text-muted">Last updated {props.attributes.updated_at}</small></p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
