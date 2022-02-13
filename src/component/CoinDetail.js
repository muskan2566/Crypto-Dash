import React from 'react'
import Image from './download.png'
import PriceGraph from './graph.jpg'
export default function CoinDetail( {d} ) {
    const {
        id,
        name,
        logo_url,
        price,
        volume,
        market_cap,
        price_change,
        rank,  

    } = d;
    return (
        <>
            {/* upper-div  */}
            <div style={{width:"58%"}} className="sub-div">
                {/* 1st-section */}
                <div style={{width:"50%",marginLeft:"3%"}}>
                    <div className="symbole-div">
                        <img className="currency-icon" src={logo_url} alt="coin-image.."></img>
                        <div className="symbole-name">
                            <h1>{name}</h1>
                            <h2>{id}</h2>
                        </div>
                    </div>
                    <div className=" price effect sub-div">
                        <div style={{width:"30%"}}>
                            
                           {/* <p className="changeprice-icon1"><i class="fas fa-2x fa-caret-up"></i></p>
                           <p className="changeprice-icon2"><i class="fas fa-2x fa-caret-down"></i></p> */}
                            <p className="effect-price change-percent">{price_change}%<i class="fas fa-2x changeprice-icon1 fa-caret-up"></i></p> 
                        </div>
                        <div className="last-price" style={{width:"70%"}} >
                        <h3>Last Price</h3>
                        <p> $ {price} </p>
                        </div>
                    </div>
                </div>

                {/* 2nd-section */}
                <div style={{width:"50%"}}>
                    <div className="sub-div">
                        <div  style={{width:"50%"}} className="market-cap effect">
                            <h3>Rank</h3>
                            <p>{rank}</p>
                            {/* <img className="graph" src={PriceGraph} alt="graph.."></img> */}
                        </div>
                        <div style={{width:"50%"}} className="market-cap effect">
                            <h3>Volume</h3>
                            <p>{volume}</p>
                        </div>
                    </div>
                    <div className=" sub-div market-cap effect ">
                        <div className="market-cap"><i class=" market-icon fa-2x far fa-chart-bar"></i></div>
                       <div>
                        <h3> Market cap </h3>
                        <p>{market_cap} </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
