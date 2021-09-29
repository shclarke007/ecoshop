import React, { useState, useEffect} from 'react';
import ShopForm from '../Shop/ShopForm';
import axios from 'axios';


export const ShopModal = () => {

  const [shops, setShops] = useState([]);
  const [shop, setShop] = useState({
    name: '',
    address_1: '',
    address_2: '',
    town: '',
    city: '',
    post_code: '',
    image_url: '',
    website: '',
    terms_checkbox: false
  });
  
  useEffect(() => {
    const url = '/api/v1/shops.json'
    axios.get(url)
      .then(res => {
        setShops(res.data.data);
      })
      .catch(res => console.log(res));
  }, [shops.length]);

  const handleChange = (e) => {
    e.preventDefault;
    // console.log('name:', e.target.name, 'value:', e.target.value);
    setShop(Object.assign({}, shop, { [e.target.name]: e.target.value }));
  };

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault;
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    axios.post('/api/v1/shops', shop)
      .then(res =>{
        setSubmitted(true);
        const newShop = {...shop}
        setShops([...shops, newShop])
        console.log(shops);
        setShop({
          name: '',
          address_1: '',
          address_2: '',
          town: '',
          city: '',
          post_code: '',
          image_url: '',
          website: '',
          terms_checkbox: false})
        setSubmitted(false);
      })
      .catch (res => console.log(res));
  };
  return (
  <>
    {/* Submit Shop Form Modal */}
    <div className="modal" id="submit_shop_modal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Submit an Item</h4>
          <button type="button" className="close" data-dismiss="modal">X</button>
        </div>
        <div className="modal-body">
          <ShopForm
            handleChange={handleChange}
            attributes={shops.attributes}
          />
        </div>
        <div className="modal-footer">
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit Shop</button>
          <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
    </div>
</>
)}
