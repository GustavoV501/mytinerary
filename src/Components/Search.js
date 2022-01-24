import React, {useState} from 'react'
import data from './data'

const Search = () => {
    const [filter, setFilter] = useState('');
    const searchText=(event)=>{
        setFilter(event.target.value);
    }
    let dataSearch=data.cardData.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
    });
    return (
        
        <section className='py-4 container'>
            <div className='row justify-content-center'>

            <div className='col-12 mb-5'>
                <div className='mb-3 col-4 mx-auto text-center' key='{value}'>
                <h1>Cities</h1>
                    <label className='form-lable h4'>Search: </label>
                    <input
                        type='text'
                        className='from-control'
                        value={filter}
                        onChange={searchText.bind(this)}
                        />
                </div>
            </div>
                {dataSearch.map((item, index)=>{
                    return(
                            
                        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4' key={item.id}>
                            <div className='card p-2 overflow-hidden h-100' key={item.img} >
                                <img  src={item.img} alt= "img-card" width="300" height="300" className='card-img-top'/>
                            <div className='card-body' >
                            <h5 key={item.title} className='card-title' >{item.title}</h5>
                            <p key={item.desc} className='card-text'>{item.desc}</p>
                        </div>
                    </div>
                </div>
                
                )})}
            </div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            </section>
 

    )
}


export default Search
























































