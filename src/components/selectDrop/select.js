import React from "react";
import '../selectDrop/select.css';
import { useAppContext } from "../../context/Appcontext/AppContext.js";
const Select=()=>{
    const { setCurrentCategory, categoryList } = useAppContext();

    return(
       <div className="selectDrop">
            <div className="searchResults">
            <div className="searchField" onClick={(e)=>{(e.stopPropagation())}}>
                <input type="text"/>    
            </div>
                <ul>
                    {categoryList.map((category)=>{
                        return (<li onClick={()=>{setCurrentCategory(category)}}>{category}</li>)
                    })}
                </ul>
            </div>    
       </div>
    )
}
export default Select;
