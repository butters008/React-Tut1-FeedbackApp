import { useState } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
//for the context
import {useContext} from 'react' //I know I can combine these into one line, for now its better to split for learning
import FeedbackContext from '../context/FeedbackContext'
//This is for FeebackEdit 
import {udeEffect} from 'react' //I know I can combine these into one line, for now its better to split for learning
import { useEffect } from 'react'

//Got rid of {handleAdd} because of context
function FeedbackForm() {
    const [text, setText] = useState('')
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    const {addFeedback, feedbackEdit} = useContext(FeedbackContext)

    useEffect(() => {
        console.log("Hello from feedbackForm useEffect")
        if(feedbackEdit.edit === true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleTextChange = ({ target: { value } }) => { 
        if (value === '') {
            setBtnDisabled(true)
            setMessage(null)
        } 
        else if (value.trim().length < 10) {
            setMessage('Text must be at least 10 characters')
            setBtnDisabled(true)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }
        setText(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
            text,
            rating,
            }

        addFeedback(newFeedback)
        setBtnDisabled(true) 
        setRating(10) 
        setText('')
        }
    }

    return (
        <Card>
        <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        {/* <RatingSelect select={(rating) => setRating(rating)}/> */}
        <div className='input-group'>
            <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text} />
            <Button type='submit' isDisabled={btnDisabled}>
                Send
            </Button>
        </div>

        {message && <div className='message'>{message}</div>}
        </form>
        </Card>
)}

export default FeedbackForm
