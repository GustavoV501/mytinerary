import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from './Components/Header';
import Titulo from './Components/Titulo';
import CarouselContainer from './Components/CarouselContainer';
import Footer from './Components/Footer';
import Search from './Components/Search';
// import SignUp from './Components/Register/Signin';
// import Login from './Components/Register/login';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
// import { Container } from '@material-ui/core';



function App() {
  return (
    

    <div className="App">
      {/* <Container maxWidth="md">
          <Routes>
              <Route path="/signup"  component={<SignUp/>}/>
              <Route path="/login" component={<Login/>}/>
          </Routes>
      </Container> */}
    
        <Header/>
        <Search/>
        <Titulo />
        <CarouselContainer/>
        <Footer/>
        <Router>
        <Route exact path="/" component={App} />
        <Route exact path="/search" component={Search} />
        </Router>

    </div>
  );
}
export default App;
