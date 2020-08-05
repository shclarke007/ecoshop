import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Shop = (props) => {
  const web = props.attributes.website;
  return (
        <div class="col-sm-12 col-md-4 col-lg-6">
          <div className="card-group">
              <div className="card" >
                <img src={props.attributes.image_url} alt={props.attributes.name} className="card-img-top"/>
                  <div className="card-body text-center">
                    <h4 className="card-title">{props.attributes.name}</h4>
                    <p className="card-text">{props.attributes.address_1}</p>
                    <p className="card-text">{props.attributes.address_2}</p>
                    <p className="card-text">{props.attributes.town}</p>
                    <p className="card-text">{props.attributes.city}</p>
                    <p className="card-text">{props.attributes.post_code}</p>
                    <a href={`${props.attributes.website}`} target="_blank" className="btn btn-primary">Website</a>
                    <Link className="btn btn-info" to={`/shops/${props.attributes.id}`}>View Shop</Link>
                  </div>
                </div>
            </div>
        </div>
  )
}

export default Shop
