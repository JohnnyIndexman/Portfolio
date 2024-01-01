import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

function Header() {
    const isClicked = true
    const [styles, setStyles] = useState({
        display: 'none'
    })

    const handleOpen = () =>{
        if(isClicked){
            setStyles({
                display:"block"
            })
        }
        
    }

    const handleClose = () =>{
        if(isClicked){
            setStyles({
                display: 'none'
            })
        }
        
    }

/*const style = {
    display: "block"
}*/



    return (
        <div className='header'>
            <div className="header1">
                <h1><Link to='/'>Nn<span>A</span>md<span>I</span></Link></h1>
                <nav className='nav'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='about'>About Me</Link>
                        </li>
                        <li>
                            <Link to='projects'>Porfolio</Link>
                        </li>
                        <li>
                            <Link to='contact'>Contact</Link>
                        </li>
                    </ul>
                    <HiOutlineMenuAlt1 size='30px' 
                    className='hamburger'
                    onClick={handleOpen}
                    />
                    
                </nav>
            </div>
            {<div className="header2" style={styles}>
                <MdOutlineClose size='30px' className='close' 
                style={styles}
                onClick={handleClose}
                />
                <nav className='nav1'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='about'>About Me</Link>
                        </li>
                        <li>
                            <Link to='projects'>Porfolio</Link>
                        </li>
                        <li>
                            <Link to='contact'>Contact</Link>
                        </li>
                    </ul>
                </nav>

            </div>}

        </div>
    )
}

export default Header