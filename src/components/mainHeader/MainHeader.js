import React, {Component} from 'react';
import './MainHeader.css';
import logo from '../../assets/SkimmerLogoMain2.png'

class MainHeader extends Component{
    render() {
        return(
         <header className = "Main-header-container"> 
            {/* <img src = {logo}/> */}
            < h1 className = "Main-header">Main Header</h1> 
         </header>
        )
    }
    
}

export default MainHeader;