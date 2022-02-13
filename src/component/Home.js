import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import CoinDetail from './CoinDetail'
import '../css/home.css'

export default function Home() {

    const [d, setD] = useState({});
    const [search,setSearch] = useState('');

    async function getdata(currency) {
        try {
            const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=306d4bf2367046de1f083f0e2e2930d9f8a4c628&ids=${currency}&interval=1d,30d&convert=EUR&per-page=100&page=1`)
            const data = await res.json();
            const {
                id,
                name,
                logo_url,
                price,
                price_date, 
                market_cap ,  //volume.1d
                rank 
            } = data[0];
           const {volume,price_change} = data[0]['1d'];
            const newData = { id, name, logo_url, price, price_date ,market_cap,rank,volume,price_change}
            setD(newData);
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getdata("BTC");
    }, [])

    const handlechange = e=> {
        getdata(search.toUpperCase());
    }

    
    return (
        <>
            <div className="main-container effect">
              
                <Navbar/>
                <CoinDetail d ={d}/>
                <div className="search-div effect">
                   <h2>Search a currency</h2>
                   <input className="search-input effect-search" type="input" placeholder="search" onChange={e=>{setSearch(e.target.value)}}></input>
                   <button type="button" className="enter-button effect-search" onClick={handlechange}><i class="fas fa-search"></i></button>
                 
                        <div className="display-input effect-display">
                        <img className="small-img" src={d.logo_url} alt=""></img>
                        <h3>{d.name}</h3>
                        <p>$ {d.price}</p>
                        </div>
                        
                        {/* <div className="display-input effect-display">
                        <img className="small-img" src={d.logo_url}></img>
                        <h3>{d.name}</h3>
                        <p>$ {d.price}</p>
                        </div>
                        <div className="display-input effect-display">
                        <img className="small-img" src={d.logo_url}></img>
                        <h3>{d.name}</h3>
                        <p>$ {d.price}</p>
                        </div>
                        <div className="display-input effect-display">
                        <img className="small-img" src={d.logo_url}></img>
                        <h3>{d.name}</h3>
                        <p>$ {d.price}</p>
                        </div> */}
       
                        
            </div>
                
            </div>
        </>
    )
}
