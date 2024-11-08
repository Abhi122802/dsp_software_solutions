import React, { useEffect, useState } from "react";
import '../header/header.css';
import Select from '../selectDrop/select';
import Nav from '../header/nav/nav';


import Logo from '../../assets/images/Logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import LocationDropDown from "../LocationdropDown/LocationDropDown";
import Avatar from '@mui/material/Avatar';
import CART from '../../assets/images/shopping-cart.png';


const Header =()=>{
    const [ showCategories, setshowCategories ] = useState(false)
    const [ showLocations, setShowLocations ] = useState(false)

    useEffect(()=>{
        const hideCategories = ()=>{
            setshowCategories(false);
        }
        if(showCategories){
            document.addEventListener("click",hideCategories);
        }else{
            document.removeEventListener("click", hideCategories);
        }

        return(
            ()=>{
                document.removeEventListener("click",hideCategories);
            }
        )
    },[showCategories])

    useEffect(()=>{
        const hideLocations = ()=>{
            setShowLocations(false);
        }
        if(showLocations){
            document.addEventListener("click",hideLocations);
        }else{
            document.removeEventListener("click", hideLocations);
        }

        return(
            ()=>{
                document.removeEventListener("click",hideLocations);
            }
        )
    },[showLocations])

    const handleCategoriesDropDownClick = (e)=>{
        e.stopPropagation();
        setshowCategories(!showCategories)
    }

    const handleLocationsDropDownClick = (e)=>{
        e.stopPropagation();
        setShowLocations(!showLocations)
    }

    return(
        <>
        <header>
            <div className='header'>
                    {/*header logo*/}
                    <div className="logo">
                        <img src={Logo} alt="Logo"/>
                    </div>
                    <div className="filter">
                        {showCategories && <Select/>}<div onClick={handleCategoriesDropDownClick} className="btn">All Categories {!showCategories && "▼"} {showCategories && "▲"}</div>
                        <div className="search">
                            <div className="serachInputBox"><input className="searchInput" type="text" placeholder="Search for item..."/></div>
                            <div className="searchbutton"><SearchIcon className="searchIcon"/></div>
                        </div>
                    </div>
                    <div className="locations">
                        {showLocations && <LocationDropDown/>}<div onClick={handleLocationsDropDownClick} className="btn">Locations {!showLocations && "▼"} {showLocations && "▲"}</div>
                    </div>
                    <div className="ShopingCart">
                        <img src={CART} alt="Cart Logo" />
                    </div>
                    <div class="profileBox">
                        <Avatar alt="Abhishek" src="/static/images/avatar/1.jpg" />
                    </div>
            </div>
        </header>

        <Nav/>
        </>
    )
}
export default Header;