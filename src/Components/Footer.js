import React from 'react';
import '../App.css'

class Footer extends React.Component { 
    
    render() {

    return ( 
            <div className="main-footer">
            <div className="container">
            <div className="row">
                {/* Column1 */}
                <div className="col">
                <h4>The world is yours</h4>
                <h1 className="list-unstyled">
                    <li>My Tinerary</li>
                    
                </h1>
                </div>
                {/* Columna 2 */}
                {/* <div className="col">
                <h4>Sections</h4>
                <ul className="list-unstyled">
                    <li>Home</li>
                    <li>Cities</li>
                </ul>
                </div> */}
                {/* Columna 3 */}
                <div className="col">
                <h4>Social networks</h4>
                <ul className="list-unstyled">
                    <li><a href='https://www.youtube.com/'  target='_blank' rel="noopener noreferrer">Youtube</a></li>
                    <li><a href='https://es-la.facebook.com/' target='_blank' rel="noopener noreferrer">Facebook</a></li>
                    <li><a href='https://www.instagram.com/?hl=es-la' target='_blank' rel="noopener noreferrer">Instagram</a></li>
                </ul>
                </div>
            </div>
            <hr />
            <div className="row">
                <p className="col-sm">
                &copy;{new Date().getFullYear()} Villegas Company | MyTinerary | All rights reserved.
                Terms Of Service | Privacy 
                </p>
            </div>
            </div>
        </div>
    )
    
}

}

export default Footer;