import React, { useState, useEffect, Fragment, Link } from 'react';
import axios from 'axios';
import ShopForm from '../Shops/ShopsForm';

const PageHeader = () => {

  const [shops, setShops] = useState([]);
  const [shop, setShop] = useState({});

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
    console.log(shop);
  };
  const handleSubmit = (e) => {
    e.preventDefault;
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    axios.post('/api/v1/shops', shop)
      .then(res =>{
        // debugger
        console.log('Success!');

      })
      .catch (res => console.log(res));
  };

  return(
  <>
      <div className="container" style={{ padding: `${0}px` }}>
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "rgb(25, 202, 202)" }}>
          <img src={process.env.PUBLIC_URL + "/public/img/logo.svg"} alt="Logo"/>
          <a className="navbar-brand" href="#">ECO SHOPPING</a>
          {/* <Link className="navbar-brand" to="/">ECO SHOPPING</Link> */}
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto topnav">
              <li className="nav-item">
                <a className="nav-link btn btn-success text-white" type="button" href="#" data-toggle="modal" data-target="#submit_shop_modal">Add Item</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Learning Center</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-primary text-white" type="button" href="#" data-toggle="modal" data-target="#signin_modal">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-danger text-white" type="button" href="#" data-toggle="modal" data-target="#register_modal">Register</a>
              </li>
            </ul>
          </div>

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
          {/* Sign In Modal */}
          <div className="modal" id="signin_modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Sign In</h4>
                  <button type="button" className="close" data-dismiss="modal">X</button>
                </div>
                <div className="modal-body">
                  <form>
                    <label htmlFor="signin_email">Username/Email:</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-user"></i></span>
                      </div>
                      <input type="text" className="form-control" placeholder="Username/Email" aria-label="Email" aria-describedby="basic-addon1" />
                      </div>

                    <label htmlFor="signin_password">Password:</label>
                      <div className="input-group mb-2">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon2"><i className="fa fa-key"></i></span>
                        </div>
                        <input type="password" id="signin_password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon2" />
                        </div>
                    </form>
                  </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary" >Sign In</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          {/* Register Modal */}
          <div className="modal" id="register_modal">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">Sign up</h4>
                  <button type="button" className="close" data-dismiss="modal">X</button>
                </div>

                <div className="modal-body">
                  <form>
                    <label className="sr-only" htmlFor="username">Username</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon3"><i className="fa fa-user"></i></span>
                      </div>
                      <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon3" />
                    </div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon4"><i className="fas fa-at"></i></span>
                      </div>
                      <input type="text" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon4" />
                    </div>

                    <label className="sr-only" htmlFor="password">Password</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon5"><i className="fa fa-key"></i></span>
                      </div>
                      <input id="password" type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon5" />
                    </div>
                    <label className="sr-only" htmlFor="password_confirmation">Password Confirmation</label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon6"><i className="fas fa-check"></i></span>
                      </div>
                      <input id="password_confirmation" type="password" className="form-control" placeholder="Password Confirmation" aria-label="Password Confirmation" aria-describedby="basic-addon6" />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="submit" className="btn btn-primary" >Register</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
  </>
  )
}
export default PageHeader
