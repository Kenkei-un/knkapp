import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import CAD from "./CAD";
import Resume from "./Resume";
import Webdev from "./Webdev";
import Speaking from "./Speaking";

function App() {

  return (
    <>
    <div className="screen">
      <Router>
        <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CAD" element={<CAD />} />
            <Route path="/webdev" element={<Webdev />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/*" element={<Home/>} />
          </Routes>
        </main>  
      </Router>
      <Footer/>
    </div>
    </>
  )
}

export default App
