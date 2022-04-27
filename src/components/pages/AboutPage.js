import React from 'react'
import { NavLink } from 'react-router-dom'
import Card from '../shared/Card'

function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h1>About This Project</h1>
            <p>Feedback Project using React</p>
            <p>Version 16.1.1</p>

            <p>
                <NavLink to="/">Back To Home Page</NavLink>
            </p>

        </div>
    </Card>
  )
}

export default AboutPage
