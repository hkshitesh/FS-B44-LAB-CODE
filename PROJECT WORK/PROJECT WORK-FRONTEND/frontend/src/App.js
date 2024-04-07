import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import Login from './Components/Login';
import AddProduct from './Components/AddProduct';
import ProductList from './Components/ProductList';
import UpdateProduct from './Components/UpdateComponent';
import PrivateComponent from './Components/PrivateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
      <Route>
        <Route element={<PrivateComponent />}>
       <Route path="/" element={<ProductList />} />
       <Route path="/add" element={<AddProduct />} />
       <Route path="/update/:id" element={<UpdateProduct />} />
       <Route path="/logout" element={<h1> Logout Component</h1>} />
       <Route path="/profile" element={<h1>Profile Component</h1>} />
       </Route>

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        </Route>
      </Routes>
      </BrowserRouter>      
      <Footer />  
    </div>
  );
}

export default App;
