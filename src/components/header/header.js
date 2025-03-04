import React, { useEffect, useRef, useState } from "react";
import '../header/header.css';
import Select from '../selectDrop/select.js';
import Nav from '../header/nav/nav.js';



import Logo from '../../assets/images/Logo.svg';
import SearchIcon from '@mui/icons-material/Search';
import LocationDropDown from "../LocationdropDown/LocationDropDown.js";
import Avatar from '@mui/material/Avatar';
import CART from '../../assets/images/shopping-cart.png';
import { useAppContext } from "../../context/Appcontext/AppContext.js";


const Header = () => {
    const [showCategories, setshowCategories] = useState(false)
    const [showLocations, setShowLocations] = useState(false)
    const { Currentcategory, currentLocation } = useAppContext();
    const headerRef = useRef();

    useEffect(() => {
        const hideCategories = () => {
            setshowCategories(false);
        }
        if (showCategories) {
            document.addEventListener("click", hideCategories);
        } else {
            document.removeEventListener("click", hideCategories);
        }

        return (
            () => {
                document.removeEventListener("click", hideCategories);
            }
        )
    }, [showCategories])

    useEffect(() => {
        const hideLocations = () => {
            setShowLocations(false);
        }
        if (showLocations) {
            document.addEventListener("click", hideLocations);
        } else {
            document.removeEventListener("click", hideLocations);
        }

        return (
            () => {
                document.removeEventListener("click", hideLocations);
            }
        )
    }, [showLocations])

    const handleCategoriesDropDownClick = (e) => {
        e.stopPropagation();
        setshowCategories(!showCategories)
    }

    const handleLocationsDropDownClick = (e) => {
        e.stopPropagation();
        setShowLocations(!showLocations)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            let position = window.pageYOffset;
            if (position > 100) {
                headerRef.current.classList.add('fixed');
            } else {
                headerRef.current.classList.remove('fixed');
            }
        })

    }, []);


    return (
        <>
        <div className="headerimg" ref={headerRef}>
            <div className="header1 ">
                <header>
                    <div className='header'>
                        {/* header logo */}
                        <div className="logo">
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="filter">
                            {showCategories && <Select />}<div onClick={handleCategoriesDropDownClick} className="btn">{(Currentcategory !== null) ? `${Currentcategory}` : `All Categories`} {!showCategories && "▼"} {showCategories && "▲"}</div>
                            <div className="search">
                                <div className="serachInputBox"><input className="searchInput" type="text" placeholder="Search for item..." /></div>
                                <div className="searchbutton"><SearchIcon className="searchIcon" /></div>
                            </div>
                        </div>
                        <div className="locations">
                            {showLocations && <LocationDropDown />}<div onClick={handleLocationsDropDownClick} className="btn">{currentLocation != null ? currentLocation : "Locations"} {!showLocations && "▼"} {showLocations && "▲"}</div>
                        </div>
                        <div className="ShopingCart">
                            <img src={CART} alt="Cart Logo" />
                        </div>
                        <div className="profileBox">
                            <Avatar alt="Abhishek" src="/static/images/avatar/1.jpg" />
                        </div>
                    </div>
                </header>
            </div>

            <Nav />
            </div>
        </>
    )
}
export default Header;