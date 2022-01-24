import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Components/Header';
import Titulo from './Components/Titulo';
import Footer from './Components/Footer';
import Search from './Components/Search';
import MensajeSignUp from './Components/Register/MensajeSignUp';
import MensajeSignin from './Components/Register/MensajeSignin';

import SignUp from './Components/Register/SignUp';
import SignIn from './Components/Register/Signin';



function App() {
  return (
    

    <div className="App">
        <BrowserRouter>
        <Header/>
        
        <Routes>
        <Route path="/" element={<Titulo/>}/>
        <Route  path="/search" element={<Search />} />
        <Route path="/signup"  element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/welcome" element={<MensajeSignUp />}/>
        <Route path="/user" element={<MensajeSignin />}/>

        </Routes >
        
        </BrowserRouter>
      
        <Footer/> 
      </div>
  );
}
export default App;
