import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.js"
import NavBar from './Components/navBar';
import products from './Data/product.json'
import ProductsList from './Components/product-List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
        <ProductsList data={products}/>
    </div>
  );
}

export default App;
