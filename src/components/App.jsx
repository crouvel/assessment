import './App.css';
import Home from './Home';
import Posts from './Posts';
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
              <Link to="/posts" className="li-element"><p >Posts</p></Link>
            </li>
          </ul>
        </nav>
        
    <Routes>
    <Route path="/posts" element={<Posts />} />
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>

   
  );
}

export default App;
