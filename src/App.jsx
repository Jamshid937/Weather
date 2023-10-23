import { useState } from "react";


const api = {
key: '7bfaf55a80976c0a17490842f382acf9',
url:'https://api.openweathermap.org/data/2.5/',

}

function App() {
const [query, setQuery] = useState('')
const [weather, setWeather] = useState({})

const search = (e) => {
if(e.key === 'Enter'){
 fetch( `${api.url}weather?q=${query}&units=metric&APPID=${api.key}` )
 .then(res => res.json())
 .then((result) =>{  
  setWeather(result)
  setQuery('')
  console.log(result);
}
  )}

  
}
  const dataBuilder = (j) => {
    let months= [
      "January","February","March","April","May","June","July","August","September","October","November","December"
    ];
  
  let days = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
  ];
  let day = days[j.getDay()]
  let date = j.getDate();
  let month = months[j.getMonth()];
  let year = j.getFullYear()
  return `${day} ${date} ${month} ${year}`
  }


  return (
 <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 'App ' : 'App cold') : 'App'}>
   <main>
      <div className="search-box">
        <input type="text" clasname='search' placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search}/>
      </div>
      {(typeof weather.main != 'undefined') ? (
            <div className="location-box">
        <div className="location">{weather.name},{weather.sys.country}</div>
        <div className="data">{dataBuilder(new Date())}</div>
      <div className="weather-box">
        <div className="temp">{Math.round(weather.main.temp)}</div>
        <div className="weather">{weather.weather[0].main}</div>
      </div>
      </div>
      ) : (
        ""
      )}


   </main>
 </div>
  );
}

export default App;
