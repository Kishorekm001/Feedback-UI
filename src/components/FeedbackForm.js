import React,{useState,useEffect} from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

import { useContext } from 'react'
import FeedbackContext from './context/FeedbackContext'

function FeedbackForm() {


  const {addFeedback , feedbackEdit , updateFeedback} = useContext(FeedbackContext)

  useEffect(() =>{
    
      if(feedbackEdit.edit === true)
      {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }


  },[feedbackEdit])



  const [text,setText] = useState('')
  const [btnDisabled,setBtnDisabled] = useState(true)
  const [message,setMessage] = useState('')
  const [rating,setRating] = useState(10)


  const handleTextchange = (e) => {

    if(text === '')
    {
      setBtnDisabled(true)
      setMessage(null)
    }
    else if(text !== '' && text.trim().length <= 10 )
    {
      setBtnDisabled(true)
      setMessage('Text must be atleast 10 characters')
    }
    else{
      setBtnDisabled(false)
      setMessage(null)
    }

      setText(e.target.value)

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if( text.trim().length >= 10 )
    {
      const newFeedback = {
        text : text,
        rating : rating
      }


      if(feedbackEdit.edit === true)
     {
        updateFeedback(feedbackEdit.item.id , newFeedback)
      }
      else{
        addFeedback(newFeedback)
      }

      //addFeedback(newFeedback)

      setText('')
      setBtnDisabled(true)
    }

  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>

          <h2>How would you rate your service with us?</h2>

          <RatingSelect select ={(rating) => setRating(rating) }/>

          <div className='input-group'>

              <input onChange={handleTextchange} type="text"  placeholder='Write a review' value={text}  />

             <Button type="submit" version = "primary" isDiabled={btnDisabled} > Send </Button>

          </div>

          {message && <div className='message'> {message} </div>}

      </form>
    </Card>
  )
}

export default FeedbackForm
