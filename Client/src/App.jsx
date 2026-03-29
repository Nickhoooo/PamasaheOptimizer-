import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/Landing';
import Home from './pages/Home';
import Feature from './pages/Feature';
import About from './pages/About';
import Footer from './components/common/Footer/Footer';
import Header from './components/common/Header/Header';
function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/feature' element={<Feature/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;
