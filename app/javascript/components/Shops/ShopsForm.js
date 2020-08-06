import React from 'react';

const ShopsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Business name*</label>
        <input type="text" className="form-control" id="name" name="shop_name" placeholder="ABC Market" onChange={props.handleChange} value={props.shops}/>
      </div>
      <div className="form-group">
        <label htmlFor="address_1">Business address*</label>
        <input type="text" className="form-control" id="address_1" name="address_1" placeholder="123 Random Road" onChange={props.handleChange} value={props.shops}/>
      </div>
      <div className="form-group">
        <label htmlFor="address_2">Business unit/no.</label>
        <input type="text" className="form-control" id="address_2" name="address_2" placeholder="Unit 23" onChange={props.handleChange} value={props.shops}/>
      </div>
      <div className="form-group">
        <label htmlFor="town">Town</label>
        <input type="text" className="form-control" id="town" name="town" placeholder="Hackney" onChange={props.handleChange} value={props.shops}/>
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input type="text" className="form-control" id="city" name="city" placeholder="London" onChange={props.handleChange} value={props.shops}/>
      </div>
      <div className="form-group">
        <label htmlFor="post_code">Postcode</label>
        <input type="text" className="form-control" id="post_code" name="post_code" placeholder="E23 6PQ" onChange={props.handleChange} value={props.shops}/>
      </div>
      <div className="form-group">
        <label htmlFor="website">Website</label>
        <input type="text" className="form-control" id="website" name="website" placeholder="https://www.google.com" onChange={props.handleChange} value={props.shops}/>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">By ticking, you agree to terms and conditions</label>
      </div>
    </form>
  )
}

export default ShopsForm
