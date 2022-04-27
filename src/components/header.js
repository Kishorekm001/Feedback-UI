import React from 'react'
import PropTypes from 'prop-types'


function Header({text,bgcolor,color}) {


    const headerStyles = {
        backgroundColor : bgcolor,
        color:color,
    }
    
  return (
    
   <header style={headerStyles}>
       <div className='container'>

           <h2> {text} </h2>

       </div>
   </header>
  )
}



Header.defaultProps = {
    text : 'Feedback UI',
    bgcolor : 'rgb(0,0,0,0.4)',
    color: '#ff6a95'
}

export default Header
