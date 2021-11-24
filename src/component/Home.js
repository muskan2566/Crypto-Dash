import React,{useEffect,useState} from 'react'
import Showdata from './Showdata';
export default function Home() {
     const[d,setD] = useState();

     async function getdata(){
        try { const res=await fetch("https://api.nomics.com/v1/currencies/ticker?key=306d4bf2367046de1f083f0e2e2930d9f8a4c628&ids=BTC&interval=1d,30d&convert=EUR&per-page=100&page=1")
         const data= await res.json();
         setD(data);}
         catch(error){
             console.log(error);
         }
        }
     useEffect(() => {
        getdata();   
     },[])
    return (
        <>
         <Showdata send={d}/>   
       </>
    )
}
