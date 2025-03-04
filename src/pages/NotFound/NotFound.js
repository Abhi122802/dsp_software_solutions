import React from 'react';
import './NotFound.css';
import NotfoundImg from "../../assets/images/page-404.png";
import { Button, Link } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';


const NotFound=()=>{
    return(
        <section className='notFound'>
            <div className='container-fluid'>
                <div className='box'>
                    <img src={NotfoundImg} alt=""/>
                    <br/><br/>
                    <h1>Page not Found</h1>
                    <p>The link you clicked may be broken or the page may have been removed.
                    visit the Homepage or Contact us about the problem</p>

                </div>
                <div className="search_ICON">
                                <div className="serachInputBox"><input className="searchInput" type="text" placeholder="Search for item..." /></div>
                                <div className="searchbutton"><SearchIcon className="searchIcon" /></div>
                            </div>
                <div className="d-flex backtohome">
                    <Button className='btn-g btn-lg'><Link to={'/'}>Back to Home Page</Link></Button>
                </div>
            </div>
        </section>
    )
}
export default NotFound;
