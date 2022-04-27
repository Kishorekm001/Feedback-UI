import React from 'react'

import loader from 'C:/react main/feedback/src/components/assets/spinner.gif'

function Spinner() {
  return (
    <img src={loader} alt="Loading..." style={{width:'100px',margin:'auto',display:'block'}} />
  )
}

export default Spinner
