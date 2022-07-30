//Include style
import './App.css';

//Include Home Component
import Home from './Home';

//Include Posts Component
import Posts from './Posts';

//Include Post Detail Component
import PostDetail from './PostDetail';

//Include react-router-dom
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
     
    //Navigation Bar with associated links
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

      {/*Routes declaration*/}
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostDetail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
