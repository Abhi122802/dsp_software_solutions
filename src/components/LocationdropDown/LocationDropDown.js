import React from "react";
import '../LocationdropDown/locationCss.css';
const LocationDropDown=()=>{
    return(
       <div className="selectDropLocations">
            <div className="searchResults">
            <div className="searchField" onClick={(e)=>{(e.stopPropagation())}}>
                <input type="text"/>    
            </div>
                <ul>
                    <li>Solapur</li>
                    <li>Parbani</li>
                    <li>Kolhapur</li>
                    <li>Pune</li>
                    <li>Noida</li>
                    <li>Mumbai</li>
                    <li>Osmanabad</li>
                    <li>Beed</li>
                    <li>Mumbai</li>
                    <li>Mumbai</li>
                    <li>Mumbai</li>
                </ul>
            </div>    
       </div>
    )
}
export default LocationDropDown;
