import React from 'react';
import '../App.css'
import { Typewriter} from 'react-simple-typewriter'
import "react-simple-typewriter/dist/index.js";
import logo from './Images/logo.png';
import { NavLink } from 'react-router-dom';
import CarouselContainer from './CarouselContainer';

class Titulo extends React.Component {
    render() {

    return ( 
        
        <div className="titulo" >
            <div className="planet">
            </div>
            <div className="container">
                <h1 className="display-2 text-center" ><img src={logo} alt='logo' width="80" height="80" />  MyTinerary </h1>
                <div>
                    <h2 style={{paddingTop:'8rem', margin:'auto 0'}}>
                        Find your perfect trip, designed by experts who know and love <br/>tourism from all countries!
                        <br/>
                        Come and travel to<br/>
                        <span style={{color: '#900C3F', fontWeight:'bold', marginLeft: '10px'}}>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={60}
                                delaySpeed={1000}
                                words={['Argentina', 'Perú', 'Inglaterra','Colombia', 'Chile', 'China', 'Japón']}
                            />
                        </span>
                    </h2>
                    <br/>
                    <div className="col text-center">
                        <p><NavLink className="btn btn-primary btn-lg " to="/Search" role="button">Cities</NavLink></p> 
                    </div>

                </div>
            </div>
            <CarouselContainer/>
            <br/><br/><br/><br/>
            <br/><br/><br/><br/>
            <br/><br/>
        </div>
        )
    
    }

}


export default Titulo;