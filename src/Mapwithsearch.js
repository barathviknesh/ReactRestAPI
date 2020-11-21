import React ,{useState, useEffect} from 'react';


const searchAll = "https://restcountries.eu/rest/v2/all";

const searchSpec = "https://restcountries.eu/rest/v2/name/";


function Mapwithsearch() {

const  [state, setstate] = useState([]);
const [stateSearch , setstateSearch] = useState('');



useEffect(()=>{

    getFlags(searchAll);
    

},[]);



const getFlags =(url)=> {
    fetch(url) 
   .then(res => res.json())
   .then((data) => {
       console.log(data, "data");
       setstate(data);
   })
   .catch(err =>  console.log(err));

}

const HandleOnsubmit =(e)=> {
    e.preventDefault();
    if(stateSearch.length > 0){
        getFlags(searchSpec + stateSearch);  
    }
    if(state.length == 0) {
        getFlags(searchAll);
    }
}

const HandleOnchange = (e)=> {
    setstateSearch(e.target.value);

}


return (
<>
<header>
    <form onSubmit={HandleOnsubmit}>
        <input
        className="search"
        onChange={HandleOnchange}
        placeholder="search here!!!"
        value={stateSearch}
        
        />
    </form>
</header>
    <div class="row" id="cards">
        {
         state.map((p) => {
                return (
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
                )
        })
       }
    </div>
    
    
    
    </>
    )
    





}



export default Mapwithsearch;
