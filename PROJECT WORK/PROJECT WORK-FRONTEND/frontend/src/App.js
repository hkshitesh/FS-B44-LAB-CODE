import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route>
        <Route path="/signup" element={<Signup />} />

        </Route>
        </Routes>
      </BrowserRouter>
      
      <Footer />  
    </div>
  );
}

export default App;
