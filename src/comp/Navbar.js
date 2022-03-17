
import React ,{useState} from "react";
import {SiDatabricks} from 'react-icons/si';
import {FaBars , FaTimes} from 'react-icons/fa';
import {Link} from "react-router-dom"

export default function Navbar (){

    const [nav,setNav] = useState (false)
    
    function HandleNav (){
        setNav(()=>!nav)
    }
    return (
        <div name="top" className="navbar">
            <div className="container">
                <div className="logo" >
                    <SiDatabricks className="icon"/>
                   <h1>Secured</h1>
                </div>
                <ul className=  {nav?"nav-menu active":"nav-menu"}  >
                  <li> <Link to='/'>Home</Link> </li>
                  <li> <Link to='/recovery'>Recovery</Link> </li>
                  <li> <Link to='/cloud'>Cloud</Link> </li>
                  <li> <Link to='/contact'>Contact</Link> </li>
                  <button> Sing in</button>
                </ul>
                <div className="hamburger" onClick={HandleNav} >
                 { !nav? <FaBars className="icon" /> : <FaTimes className="icon" />}

                </div>
            </div>
        </div>
    )
}