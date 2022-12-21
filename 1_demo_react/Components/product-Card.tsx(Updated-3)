import React from "react";
import { ReactNode } from "react";
import { product } from "./product-List";
import ModelBox from "./product-ModelBox";

class ProductCard extends React.Component<product>{
  constructor(props:product){
    super(props);
  }

  render(): ReactNode {
    return (
      <>
      <div className="card mb-2">
    <div className="product">
      <div className="card-header">{this.props.title}</div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item"><b>Style:</b>{this.props.style}</li>
        <li className="list-group-item"><b>Price:</b>{this.props.price}</li>
        <li className="list-group-item"><b>Description:</b>{this.props.description}</li>
        <li className="list-group-item"><b>Free Shipping:</b>{this.props.isFreeShipping}</li>
      </ul>
      <div className="card-footer">
      <button type="button" className="btn btn-dark btn-sm" data-bs-toggle="modal" data-bs-target={"#id"+this.props.sku}>Add to Cart</button>
      <button type="button" className="btn btn-dark btn-sm float-end">More Details</button>
      </div>
    </div>
    </div>
    <ModelBox idValue={this.props.sku} sizes={this.props.availableSizes}/>
    </>
  );
  }
    
  };

  export default ProductCard;
