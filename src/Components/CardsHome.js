import React from 'react';
import CardHome from './CardHome';
import image5 from './Images/Japon-4.jpg';
import image6 from './Images/Ingla-2.jpg';
import image7 from './Images/Brazil-4.jpg';



const cardshome= [
    {
        id:1,
        title: 'Tokio',
        image: image5,
        url: 'http://localhost:3000',
        text: 'Tokyo was originally known as Edo, a kanji compound of 江  and 戸. The name, which can be translated as "estuary", is a reference to the original settlement location at the meeting of the Sumida River and Tokyo Bay. '
    },
    {
        id:2,
        title:'London',
        image: image6,
        url: 'http://localhost:3000',
        text: 'London is the capital and largest city of England and the United Kingdom. It stands on the River Thames in south-east England at the head of a 50-mile (80 km) estuary down to the North Sea, and has been a major settlement for two millennia.'
    },
    {
        id:3,
        title:'Rio de Janeiro',
        image: image7,
        url: 'http://localhost:3000',
        text: 'Rio de Janeiro, or simply Rio,is the second-most populous city in Brazil and the sixth-most populous in the Americas. Rio de Janeiro is the capital of the state of the same name, after São Paulo and Minas Gerais.'
    }
]

function CardsHome() {
    return (
        <div className='container d-flex justify-content-center align-items-center h-100 '>
            <div className='row'>
                {
                    cardshome.map(cardshome =>(
                        <div className='col-md-4' key={cardshome.id}>
                        <CardHome title={cardshome.title} img={cardshome.image} url={cardshome.url} text={cardshome.text}/>
                        </div>
                    ))
                }
            </div>
        </div>        
    )
}

export default CardsHome
