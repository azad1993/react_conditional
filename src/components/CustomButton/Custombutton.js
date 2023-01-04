import React from 'react'
import './Custombutton.css'
const Custombutton = (props) => {
    let {myClass, mytext, buttonClick, buttonHover, buttonLeave} = props
    return (
    <button className={myClass} onClick={buttonClick} onMouseEnter = {buttonHover} onMouseLeave = {buttonLeave}>
        {mytext}
    </button>
    
  )
}

export default Custombutton