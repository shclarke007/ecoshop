import React from 'react';

const ShopForm = (props) => {
  return (
    <form>
      <small className="text-danger">* denotes fields that must be present</small>
      <div className="form-group">
        <label htmlFor="name">Business name <small className="text-danger">*</small></label>
        <input type="text" className="form-control" id="name" name="name" placeholder="ABC Market" onChange={props.handleChange} value={props.shops}/>
      </div>
      <div className="form-group">
        <label htmlFor="address_1">Business address <small className="text-danger">*</small></label>
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
        <label htmlFor="city">City <small className="text-danger">*</small></label>
        <input type="text" className="form-control" id="city" name="city" placeholder="London" onChange={props.handleChange} value={props.shops}/>
      </div>
      <div className="form-group">
        <label htmlFor="post_code">Postcode <small className="text-danger">*</small></label>
        <input type="text" className="form-control" id="post_code" name="post_code" placeholder="E23 6PQ" onChange={props.handleChange} value={props.shops}/>
      </div>
      <div className="form-group">
        <label htmlFor="image_url">Image URL</label>
        <input type="text" className="form-control" id="image_url" name="image_url" placeholder="https://www.google.com/image/100" onChange={props.handleChange} value={props.shops} />
      </div>
      <div className="form-group">
        <label htmlFor="website">Website</label>
        <input type="text" className="form-control" id="website" name="website" placeholder="https://www.google.com" onChange={props.handleChange} value={props.shops}/>
      </div>
      <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="terms_checkbox" />
        <label className="form-check-label" htmlFor="terms_checkbox">By ticking, you agree to terms and conditions</label>
      </div>
    </form>
  )
}
export default ShopForm

