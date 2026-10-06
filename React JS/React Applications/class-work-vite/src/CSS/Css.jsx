import React from 'react'
import './style.css'

function Css() {
      let htmldata = {
        background:"linear-gradient(to bottom, #ff7e5f, #feb47b, #ff7e5f)",
        color:"white",
        
    }
  return (
    <div>
        <h1 style={{background: 'linear-gradient(to bottom, #ff7e5f, #feb47b, #ff7e5f)', fontSize: '35px' }}>Hello This Inline CSS</h1>
        <h1 style={htmldata}>Hello This Internal CSS</h1>   
        <h1 className="external-css">Hello This External CSS</h1>
    </div>
  )
}

export default Css
