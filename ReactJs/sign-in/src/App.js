import logo from './logo.svg';

import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import AdminHome from './Components/Admin/AdminHome';
import Login from './Login';
import CustomerHome from './Components/Customer/CustomerHome';
import ShowAllCustomer from './Components/Admin/ShowAllCustomer';
import AddCategory from './Components/Admin/AddCategory';
import ViewCategory from './Components/Admin/ViewCategory';
import AddProduct from './Components/Admin/AddProduct';
import ShowAllProduct from './Components/Customer/ShowAllProduct';
import ViewOrder from './Components/Admin/ViewOrder';
import FindUserData from './Components/Customer/FindUserData';
import CategoryByName from './Components/Customer/CategoryByName';
import Navbar from "./Components/Navbar"
import UpdateCategory from './Components/Admin/UpdateCategory';
import ShowAllCategory from './Components/Customer/ShowAllCategory';
import ViewProduct from './Components/Admin/ViewProduct';
import UpdateProduct from './Components/Admin/UpdateProduct';
import SignUp from './SignUp';
import Order from './Components/Customer/Order';

function App() {
  
  return (
    <div className="App">
      {/* <h2>Welcome to the online pharmacy!</h2> */}
      {/* <Navbar></Navbar> */}
      {/* <Link to="/loginPage">SignIn</Link> */}
      {/* <hr /> */}
      <Routes>
        <Route path='/' element={<Navbar></Navbar>}></Route>
        <Route path='/loginPage' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/adminhome' element={<AdminHome></AdminHome>}></Route>
        <Route path='/customerhome' element={<CustomerHome></CustomerHome>}></Route>

        {/* admin page */}

        <Route path='/adminhome/showallcustomer' element={<ShowAllCustomer></ShowAllCustomer>}></Route>
        <Route path='/adminhome/addcategory' element={<AddCategory></AddCategory>}></Route>
        <Route path='/adminhome/viewcategory' element={<ViewCategory></ViewCategory>}></Route>
        <Route path='/adminhome/addproduct' element={<AddProduct></AddProduct>}></Route>
        <Route path='/adminhome/viewproduct' element={<ViewProduct></ViewProduct>}></Route>
        <Route path='adminhome/vieworder' element={<ViewOrder></ViewOrder>}></Route>
        <Route path='/adminhome/updatecategory/:_id' element={<UpdateCategory></UpdateCategory>}></Route>
        <Route path='/adminhome/updateproduct/:_id' element={<UpdateProduct></UpdateProduct>}></Route>

        {/* customer page */}
        <Route path='/customerhome/finduserdata' element={<FindUserData></FindUserData>}></Route>
        <Route path='/customerhome/showcategory' element={<ShowAllCategory></ShowAllCategory>}></Route>
        <Route path='/customerhome/showproduct' element={<ShowAllProduct></ShowAllProduct>}></Route>
        <Route path='/customerhome/categorybyname' element={<CategoryByName></CategoryByName>}></Route>
        <Route path='customerhome/order' element={<Order></Order>}></Route>
      </Routes>
    </div>
  );
}

export default App;
