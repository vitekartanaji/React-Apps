import { Route, Routes } from "react-router-dom"
import HomePage from "./homePage";
import ProductsList from "./product-List";
import products from '../Data/product.json'
import UserList from "./user-list";
import ErrorPage from "./Error";


const WebRoutes=()=>{
    return(
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/product-list/" element={<ProductsList data={products}/>}/>
            <Route path="/user-list/" element={<UserList/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    )
}

export default WebRoutes;
