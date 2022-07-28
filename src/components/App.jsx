import './App.css';
import Home from './Home';
import Categories from './Categories';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
    <nav className="NavbarItems">
          <ul className="nav-menu">
            <li>
              <Link to="/" className="li-element"><p >Home</p></Link>
            </li>
            <li>
              <Link to="/categories" className="li-element"><p >Categories</p></Link>
            </li>
          </ul>
        </nav>
        
    <Routes>
    <Route path="/categories" element={<Categories />} />
      <Route path="/" element={<Home />} />
      {/* <Route path="invoices" element={<Invoices />} /> */}
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
