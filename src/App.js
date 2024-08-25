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


import Marketing from './pages/services/DigitalMarket'
import Webdesign from './pages/services/WebDesign'
import Webdevlopment from './pages/services/WebDevlopment'
import Android from './pages/services/Mobile'
import Ecommerce from './pages/services/Ecommerce'


import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Otp from './pages/auth/Otp';
import ForgotPassword from './pages/auth/Forgetpass';
import ApplyNow from './pages/Apply';

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
         <Route path='/apply' element={<ApplyNow />}/>

         {/* //sercices pages */}

         <Route path='/marketing' element={<Marketing />}/>
         <Route path='/webdesign' element={<Webdesign />}/>
         <Route path='/webdevelopment' element={<Webdevlopment />}/>
         <Route path='/ecommerce' element={<Ecommerce />}/>
         <Route path='/android' element={<Android />}/>


         {/* //auth pages */}

         <Route path='/login' element={<Login />}/>
         <Route path='/signup' element={<Signup />}/>
         <Route path='/forgotpassword' element={<ForgotPassword />}/>
         <Route path='/otp' element={<Otp />}/>
       
        
      </Routes>
      
      <Footer />

    </div>
  );
}

export default App;
