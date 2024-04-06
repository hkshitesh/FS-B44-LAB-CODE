import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Nav from './Components/Nav';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
      </BrowserRouter>
    </div>
  );
}

export default App;
