import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import CoinDetail from "./CoinDetail";
import "../css/home.css";

export default function Home() {
  const [d, setD] = useState({});
  const [search, setSearch] = useState("");
  const [all, setAll] = useState([]);

  async function getdata(currency) {
    try {
      const res = await fetch(
        `https://api.nomics.com/v1/currencies/ticker?key=306d4bf2367046de1f083f0e2e2930d9f8a4c628&ids=${currency}&interval=1d,30d&convert=EUR&per-page=100&page=1`
      );
      const data = await res.json();

      if(res.status !== 200){ return []};
      // setAll([...data,...all]);

      const {
        id,
        name,
        logo_url,
        price,
        price_date,
        market_cap, //volume.1d
        rank,
      } = data[0];
      const { volume, volume_change, price_change } = data[0]["1d"];
      const { volume_change_pct, price_change_pct } = data[0]["30d"];
      const newData = {
        id,
        name,
        logo_url,
        price,
        price_date,
        market_cap,
        rank,
        volume,
        volume_change,
        price_change,
        volume_change_pct,
        price_change_pct,
      };
      setD(newData);
      return data ;
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const initialData = async () => {
      const data = await fetch(
        "https://api.nomics.com/v1/currencies/ticker?key=306d4bf2367046de1f083f0e2e2930d9f8a4c628&ids=&interval=1d,30d&convert=EUR&per-page=10&page=1"
      );
      const result = await data.json();

      setAll(result);
      const {
        id,
        name,
        logo_url,
        price,
        price_date,
        market_cap, //volume.1d
        rank,
      } = result[0];
      const { volume, volume_change, price_change } = result[0]["1d"];
      const { volume_change_pct, price_change_pct } = result[0]["30d"];
      const newData = {
        id,
        name,
        logo_url,
        price,
        price_date,
        market_cap,
        rank,
        volume,
        volume_change,
        price_change,
        volume_change_pct,
        price_change_pct,
      };
      setD(newData);
    };
    initialData();
  }, []);

  const handlechange = (e) => {
    const text = search.toUpperCase();
    const newArray = all.filter((e)=>{

        return text !== e.id ;
    })

    // setAll(newArray);
    
     getdata(text)
    .then((data)=>{
       if(data)
       setAll([...data,...newArray]);
    })
    
  };

  return (
    <>

      <div className="main-container effect">
        <Navbar />
        <CoinDetail d={d} />
        <div className="search-div effect set">
          <h2>Search a currency</h2>
          <input
            className="search-input effect-search"
            type="input"
            placeholder="search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
          <button
            type="button"
            className="enter-button effect-search"
            onClick={handlechange}
          >
            <i className="fas fa-search"></i>
          </button>

          <div className="scroll-effect">
            {all &&
              all.map((e) => {
                const { logo_url, name, price ,id} = e;
                return (
                  <div key={id} className="display-input effect-display">
                    <img className="small-img" src={logo_url} alt=""></img>
                    <h3>{name}</h3>
                    <p>${price}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
