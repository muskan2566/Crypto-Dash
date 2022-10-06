import React from 'react'
export default function CoinDetail( {d} ) {
    const {
        id,
        name,
        logo_url,
        price,
        volume,
        market_cap,
        price_change,
        volume_change,
        rank,  
        volume_change_pct,
        price_change_pct
    } = d;
    return (
        <>
         <div style={{width:"56%"}} >
            {/* left-div  */}
            <div style={{width:"100%"}} className="sub-div">
                {/* 1st-section */}
                <div style={{width:"50%",marginLeft:"3%"}}>
                    <div style={{width:"50%",marginLeft:"3%"}} className="symbole-div">
                        <img  className="currency-icon" src={logo_url} alt="coin"/>
                        <div className="symbole-name">
                            <h1>{name}</h1>
                            <h3>{id}</h3>
                        </div>
                    </div>
                    <div style={{width:"90%"}} className='effect price sub-div'>
                        <div  style={{width:"45%"}}className='last-price'>
                            <h3>Last Price</h3>
                            <p>${price}</p>
                        </div>
                        <div style={{width:"45%"}}className='effect price '>
                            <h4>Price change</h4>
                            <h4 className='color'>{price_change}</h4>
                        </div>
                    </div>
                    
               </div> 

                {/* 2nd-section */}
                <div style={{width:"50%"}}>
                    <div style={{width:"100%"}} className="sub-div">
                        <div  style={{width:"40%"}} className="market-cap effect">
                            <h3>Rank</h3>
                            <p>{rank}</p>
                        </div>
                        <div style={{width:"60%"}} className="market-cap effect">
                            <h3>Volume</h3>
                            <p>{volume}</p>
                        </div>
                    </div>
                    <div style={{width:"80%"}}  className=" sub-div market-cap effect ">
                        <div className="market-cap"><i className=" market-icon fa-2x far fa-chart-bar"></i></div>
                        <div style={{width:"50%"}}>
                        <h3> Market cap </h3>
                        <p>{market_cap} </p>
                        </div>
                    </div>
                </div>
                <div >
                </div>
            </div>
             {/* 3rd section */}
            <div style={{width:"92%" ,margin:" 1% 5% " }}>
                <h4>1 Day</h4>
                <div className='effect effect-inchange sub-div'>
                    <div style={{width:"50%" ,margin:" 0% 3%" }} className='sub-div'>
                        <h4 >Volume</h4>
                        <h4 className='price-chng'>{volume_change}</h4>
                    </div>
                    <div style={{width:"50%" ,margin:" 0% 3% " }} className='sub-div'>
                        <h4 >Price</h4>
                        <h4 className='price-chng'>{price_change}</h4>
                    </div>
                </div>
               
                <h4>30 Day</h4>
                <div className='effect effect-inchange sub-div'>
                        <div style={{width:"50%" ,margin:" 0% 3%" }}className='sub-div'>
                            <h4 >Volume</h4>
                            <h4 className='price-chng'>{volume_change_pct}</h4>
                        </div>
                        <div style={{width:"50%" ,margin:" 0% 3%" }} className='sub-div'>
                            <h4 >Price</h4>
                            <h4 className='price-chng'>{price_change_pct}</h4>
                        </div>
                </div>

            </div>
           </div>
        </>
    )
}
