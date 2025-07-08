import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layouts/Layout";
import TodoDetails from "./pages/TodoDetails";

const App = () => {
  
  return (
    <>
      <Router>
          {/* <nav>
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/about">About</Link>
            </nav> */}
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />}/>
              <Route path='todo/:id' element={<TodoDetails />}/>
            </Route> 
          </Routes>
      </Router>
    </>
  )
}

export default App;
