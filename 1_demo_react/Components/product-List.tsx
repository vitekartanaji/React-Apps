import products from "../Data/product.json";
import ProductCard from "./product-Card";

export interface product {
  availableSizes: string[];
  currencyFormat: string;
  currencyId: string;
  description: string;
  id: number;
  installments: number;
  isFreeShipping: boolean;
  price: number;
  sku: number;
  style: string;
  title: string;
}

const ProductsList = (props:{data:product[]}) => {
  let {data:products}=props;
  return (
    <div>
      <div>
        <div>
          <h2 className='text-center'>Product-List</h2>
        </div>
      </div>
      <div className="row">
        {products.map((product) => {
          return <div className="col-3"><ProductCard key={product.sku} {...product} /></div>
        }
        )};
      </div>
    </div>
  )};
export default ProductsList;
