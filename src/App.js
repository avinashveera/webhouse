import './App.css';
import { Route, Routes } from 'react-router-dom';

import Footer from './component/Footer/Footer';
import TopNav from './component/Header/Topnav';
import Navbar from './component/Header/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ClientComponent from './component/client/Client';
import Career from './pages/Career';
import Contact from './pages/Contact'


function App() {
  return (
    
    <div className="App">
         <TopNav/>
         <Navbar />
   
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/about' element={<About />} />
         <Route path='/portfolio' element={<Portfolio />}/>
         <Route path='/clients' element={<ClientComponent />}/>
         <Route path='/career' element={<Career />}/>
         <Route path='/contact' element={<Contact />}/>
        
      </Routes>
      
      <Footer />

    </div>
  );
}

export default App;
