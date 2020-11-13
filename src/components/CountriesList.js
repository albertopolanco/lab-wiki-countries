import React from "react";
import { Link } from 'react-router-dom';
import countries from '../countries.json';


const CountriesList = (props) => {
    // console.log(props.location.search) // string
    // const parsed = queryString.parse(props.location.search) 
    // console.log(parsed) // object


    return (
        <div className="col-5" style={{maxHeight: "90vh", overflow:"scroll"}}> 
        <div className="list-group"> 
            {props.countries.map((eachCountries, index) => {
                return (
                    // <div key={eachCountries.cca3}>
                        
                       <Link key={index} className="list-group-item list-group-item-action" to={`/countries/${eachCountries.cca3}`}><img src={"www.countryflags.io/"+eachCountries.cca2+"/flat/64.png"} height="20" alt="flag"></img>{eachCountries.name.common}</Link>

                       
                        // <hr />
                    // </div>
                );
            })}
        </div>
        </div>
    );
};


export default CountriesList;