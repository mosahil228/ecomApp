import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Login from './pages/Auth/Login';
import Signup from './pages/Auth/Signup';
import Home from './pages/Home';
// import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import Category from './pages/Category';
import Cart from './pages/Cart';




const App = () => {
  const [progress, setProgress] = useState(50)
  
  return (
    <div>
      <BrowserRouter >
        <LoadingBar
          color='#1778F2'
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
          <Navbar />
        <Routes>
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="/login" element={<Login setProgress={setProgress} />} />
          <Route path="/signup" element={<Signup setProgress={setProgress} />} />
          <Route path="/category" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
          {/* <Footer /> */}

      </BrowserRouter>
    </div>
  )
}
export default App;
