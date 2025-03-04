// import React, { useState } from "react";
import '../LocationdropDown/locationCss.css';
import { useAppContext } from "../../context/Appcontext/AppContext";
const LocationDropDown=()=>{
    const { locationList, setCurrentLocation } = useAppContext();
    return(
       <div className="selectDropLocations">
            <div className="searchResults">
            <div className="searchField" onClick={(e)=>{(e.stopPropagation())}}>
                <input type="text"/>    
            </div>
                <ul>
                {locationList.map((location)=>{
                        return (<li onClick={()=>{setCurrentLocation(location)}}>{location}</li>)
                    })}
                </ul>
            </div>    
       </div>
    )
}
export default LocationDropDown;
