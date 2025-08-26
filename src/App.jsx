import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Home";
import Playground from "./Playground";
import CAD from "./CAD";
import Resume from "./Resume";

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
            <Route path="/playground" element={<Playground/>}/>
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
