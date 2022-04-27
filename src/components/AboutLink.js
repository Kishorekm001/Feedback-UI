import React from 'react'

import {FaQuestion} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function AboutLink() {
  return (
    <div className='about-link'>
        <NavLink to="/aboutpage" >
             <FaQuestion  size={30} />
        </NavLink>
    </div>
  )
}

export default AboutLink
