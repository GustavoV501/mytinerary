import React from 'react'
import data from './data'
import { Link } from "react-router-dom";


const Search = () => {
    return (
        <section className='py-4 container'>
            <div className='row justify-content-center'>


                {data.cardData.map((item, index)=>{
                    return(
                            
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
                            <Link to="/search">Show list</Link>
                            <div className='card p-0 overflow-hidden h-100 shadow'>
                                <img src={item.img} className='card-img-top'/>
                            <div className='card-body'>
                            <h5 className='card-title'>{item.title}</h5>
                            <p className='card-text'>{item.desc}</p>
                        </div>
                    </div>
                </div>
                )})}
                



            </div>


        </section>
            
        

    )
}


export default Search



























































// import React from 'react';
// import Footer from './Footer';


// class Services extends React.Component {
// 	render() {

// 		return(

// 			<>

        
// 			<main role="main" className="flex-shrink-0 mt-5">

//                     <section className="text-center">
//                         <div className="container">
//                         <h1 className="jumbotron-heading">Informes </h1>
//                         <p className="lead text-muted">
//                             A continuación los informes de cada país
//                         </p>				      
//                         </div>
//                     </section>
//                     <div className="album py-5 bg-light">
//                         <div className="container">
//                         <div className="row">
//                             <div className="col-md-4">
//                             <div className="card mb-4 shadow-sm">
//                                 <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 1"><title>Japón</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 1</text></svg>
//                                 <div className="card-body">
//                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>
                                    
//                                     </div>
                                    
//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                             <div className="col-md-4">
//                             <div className="card mb-4 shadow-sm">
//                                 <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 2"><title>Argentina</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 2</text></svg>
//                                 <div className="card-body">
//                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>
                                    
//                                     </div>
                                    
//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                             <div className="col-md-4">
//                             <div className="card mb-4 shadow-sm">
//                                 <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 3"><title>Perú</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 3</text></svg>
//                                 <div className="card-body">
//                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>
                                    
//                                     </div>
                                    
//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
    
//                             <div className="col-md-4">
//                             <div className="card mb-4 shadow-sm">
//                                 <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 4"><title>Egipto</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 4</text></svg>
//                                 <div className="card-body">
//                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>
                                    
//                                     </div>
                                    
//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                             <div className="col-md-4">
//                             <div className="card mb-4 shadow-sm">
//                                 <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="https://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Servicio 5"><title>Italia</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Servicio 5</text></svg>
//                                 <div className="card-body">
//                                 <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//                                 <div className="d-flex justify-content-between align-items-center">
//                                     <div className="btn-group">
//                                     <button type="button" className="btn btn-sm btn-outline-secondary">Leer</button>
                                    
//                                     </div>
                                    
//                                 </div>
//                                 </div>
//                             </div>
//                             </div>
//                         </div>
//                         </div>
//                     </div>
    
//                 </main>
    
//                 <Footer />
                
//                 </>
// 		)

// 	} 
// }

// export default Services;