import React from 'react'

import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'


function FeedbackStats() {

   const {feedback} = useContext(FeedbackContext)
 
    const sum = feedback.reduce((accumulator,current) => {

        return accumulator+current.rating

    } ,0 )   // accumulator = 0

    const Average = (sum/feedback.length).toFixed(1).replace(/[.,]0$/,'')




  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(Average) ? 0 : Average} </h4>
    </div>
  )
}



export default FeedbackStats
