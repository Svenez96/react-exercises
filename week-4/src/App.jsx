import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";

const App = () => {
  
  return (
    <>
      <Router>
        <Layout />
        {/* <nav>
          <Link className="link" to="/">Home</Link>
          <Link className="link" to="/about">About</Link>
        </nav> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
