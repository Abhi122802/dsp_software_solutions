import React from "react";
import '../selectDrop/select.css';
const select=()=>{
    return(
       <div className="selectDrop">
            <div className="searchResults">
            <div className="searchField" onClick={(e)=>{(e.stopPropagation())}}>
                <input type="text"/>    
            </div>
                <ul>
                    <li>camera</li>
                    <li>Bill software</li>
                    <li>bill machine</li>
                    <li>john doe</li>
                    <li>printer</li>
                    <li>eor</li>
                </ul>
            </div>    
       </div>
    )
}
export default select;
