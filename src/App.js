import SideBar from "./components/sidebar/sideBar";
import TopBar from "./components/topbar/topBar";
import "./app.css";
import Home from "./pages/home/home";
import { Routes, Route} from "react-router-dom";
import UserList from "./pages/userlist/userlist";
import User from "./pages/user/user";
import NewUser from "./pages/newuser/newUser";
import ProductList from "./pages/productList/productList";
import Product from "./pages/product/product";
import NewProduct from "./pages/newProduct/newProduct";


function App() {
  return (
    <> 
     <TopBar/>
     <div className="container">
      <SideBar/>
      <Routes>
       <Route exact path="/" Component={Home}/>
       <Route path="/users" Component={UserList}/>
       <Route path="/users/:userId" Component={User}/>
       <Route path="/users/:userId/newUser" Component={NewUser}/>
      </Routes>
      <Routes>
        <Route path="/product" Component={ProductList}/>
        <Route path="/product/:productId" Component={Product}/>
        <Route path="/product/:productId/newProduct" Component={NewProduct}/>
      </Routes>
    </div>
    </>
  )
};

export default App;
