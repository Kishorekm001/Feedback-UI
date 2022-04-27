import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import { FaTimes  } from 'react-icons/fa'
import {FaEdit} from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedbackItem( {item } ) {

const { deleteFeedback,editFeedback } = useContext(FeedbackContext)

    const [rating,setRating] = useState(0)
    const [text,setText] = useState('Example Feedback')

    


  return (
      
    <Card >
      
        <div className='num-display'> {item.rating} </div>

        <button className='close' onClick={() => deleteFeedback(item.id) } > 
            <FaTimes color="purple" />
        </button>    
        <button className='edit' onClick={() => editFeedback(item) } > 
            <FaEdit color="purple" />
        </button> 

        <div className='text-display'> {item.text} </div>
    </Card>
  )
}

export default FeedbackItem
