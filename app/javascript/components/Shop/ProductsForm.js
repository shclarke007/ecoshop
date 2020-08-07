import React, {useState} from 'react';
import axios from 'axios';
import MultiSelect from "react-multi-select-component";

const ProductForm = (props)=> {
  const options = [
    { label: "Fruits 🍇", value: "fruits" },
    { label: "Vegetables 🥬", value: "vegetables" },
    { label: "Grains 🌾", value: "grains"},
    { label: "Household cleaners 🧼", value: "household_cleaners" },
    { label: "Nuts 🥜", value: "nuts" },
  ];

  // const [selected, setSelected] = useState([]);
  const [category_name, setProduct] = useState([]);

  // const handleChange = (e) => {
  //   e.preventDefault;
  //   // console.log('name:', e.target.name, 'value:', e.target.value);
  //   setProduct(Object.assign({}, product, { [e.target.name]: e.target.value }))
  //   console.log('product:', product)
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault;
  // };

  const handleSubmit = (e) => {
    e.preventDefault;
    const shop_id = 1
    const csrfToken = document.querySelector('[name=csrf-token]').content
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken
    // setProduct(Object.assign({}, product, { [e.target.name]: e.target.value }))
    console.log(category_name)
    axios.post('/api/v1/products', { category_name, shop_id})
      .then(res => {
        debugger
        // console.log('Success!');
        // console.log(props.attributes)
      })
      .catch(res => console.log(res));
  };
  return(
    <section>
      <button type="submit" className="btn btn-success" data-toggle="modal" data-target="#submit_product_modal">Add Product</button>
      {/* Submit Product Form Modal */}
      <div className="modal" id="submit_product_modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add a Product</h4>
              <button type="button" className="close" data-dismiss="modal">X</button>
            </div>
            <div className="modal-body">
              <label htmlFor="categories">Select and submit missing categories of products for this shop:</label><br />
              {/* <pre>{selected.value}</pre> */}
              <MultiSelect
                options={options}
                value={category_name}
                onChange={setProduct}
                labelledBy={"category_name"}
              />
              {/* <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="categories">Select missing categories of products for this shop:</label><br />
                  <i>Hold shift to select multiple categories</i><br />
                  <select multiple={true} onChange={props.handleChange} id="product_selection">
                    <option onChange={props.handleChange} value="vegetables">Fruits</option>
                    <option onChange={props.handleChange} value="vegetables">Vegetables</option>
                    <option onChange={props.handleChange} value="dry_goods">Dry Goods</option>
                    <option onChange={props.handleChange} value="household_cleaners">Household Cleaners</option>
                  </select>
                </div>
              </form> */}
            </div>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit Selection</button>
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
        {/* <div className="field">
          <h2>Add products </h2>
          <p>Add products available at the shop using the form below</p>
          <label>Categories: </label> <br/>
          <i>Hold shift to select multiple categories</i><br />
          <select multiple={true} onChange={props.handleChange}>
            <option onChange={props.handleChange} value="vegetables">Fruits</option>
            <option onChange={props.handleChange} value="vegetables">Vegetables</option>
            <option onChange={props.handleChange} value="dry_goods">Dry Goods</option>
            <option onChange={props.handleChange} value="household_cleaners">Household Cleaners</option>
          </select>
        </div>
         <button type="submit">Add Products</button> */}
    </section>
  )
};

export default ProductForm;
