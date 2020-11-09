import React ,{useState, useEffect} from 'react';


import "./Mapp.css";



function Mapp() {

// code here:
const [ state, setState]=useState([]);
// componentDidMount
useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all').then(res => res.json()).then(res => {
        
        setState(res);
        console.log(res);
        
    }).catch(e => {
        console.log(e);
    });
},[]);
     // return
    return (
        <>
        <h1 id="head" align="center">REST COUNTRIES</h1>
    <div class="row" id="cards">
    {state.map((p)=>{
        return (<>
            
            <div class="card">
  <img src={p.flag} class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">{p.name}</h5>
        <p class="card-text">Capital: {p.capital}</p>
        <p class="card-text">Currencies: {p.currencies[0].name}</p>
        <p class="card-text">Symbol: {p.currencies[0].symbol}</p>
        <p class="card-text">Population: {p.population}</p>
    
  </div>
</div>

            </>)
        
    })}
</div>
       </>
    );
}

export default Mapp
