import React from "react";
import './Navigation.css'

import twitter from '../images/twitter.png';

function Nav_Bar(){
    return(
        <div className="Hyperlinks">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Services</a></li>
            </ul>
            <div className="NameOfCompany">
                <h2>Tourie Mobile®</h2>
            </div>
            
            <div className="Social-Media-Icons-twitter">
            <a href="https://www.twitter.com"><img src={twitter} alt="" width={20}/></a>
            </div>
        </div>
        
        
    );
}

export default Nav_Bar;