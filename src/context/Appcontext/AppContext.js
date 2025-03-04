import { createContext, useContext } from "react";
import { useState } from "react";


export const AppContext = createContext();

export const useAppContext = () => {
    const context = useContext(AppContext);
    if(!context){
        throw new Error("useAppContext must be used within an AppContextProvider")
    }
    return context;
}


export const AppContextProvider = ({ children }) => {
    const [ Currentcategory, setCurrentCategory ] = useState(null);
    const [ currentLocation, setCurrentLocation ] = useState(null);
    const [ categoryList, setCategoryList ] = useState(["camera", "Bill software", "bill machine", "john doe", "printer", "eor"])
    const [ locationList, setLocationList ] = useState(["Solapur", "Kolhapur", "Pune", "Dharashiv", "Parbani", "Mumbai", "Beed", "Noida"])
    return (
        <AppContext.Provider value={{Currentcategory, setCurrentCategory, categoryList, setCategoryList, currentLocation, setCurrentLocation, locationList, setLocationList}}>{children}</AppContext.Provider>
    )
}