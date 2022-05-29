
import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import LogIn from './Component/LogIn/Login'
import Blog from './Component/Blog/Blog'
import NotFound from './Component/NotFound/NotFound'
import Register from './Component/Register/Register';
import InventoryDetail from './Component/InventoryDetail/InventoryDetail';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import UpdateInventory from './Component/Manage Inventory/UpdateInventory';
import AddItems from './Component/Add items/AddItems';



function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path="/login" element={<LogIn></LogIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/manageInventory" element={<UpdateInventory></UpdateInventory>}></Route>
        <Route path="/addItem" element={<AddItems></AddItems>}></Route>
        <Route path="/inventory/:inventoryId" element={
          <RequireAuth>
        <InventoryDetail></InventoryDetail>
        </RequireAuth>
        }></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>

    </div>
  );
}

export default App;
