import {createContext, useState} from 'react'
import { v4 as uuid4} from 'uuid';

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This item is from context',
      rating: 10,
    },
  ])

  //Functions
  /* This handle even is being passed from the item, to the list, to here and we are making sure
  //That the user wants to delete first than we are deleting and modifying the list with the state
  That is define above*/
  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this?")){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuid4()
    /* 
    the ... is a spread operator, and you will be putting everything that is in the array of feeback and 
    we are going to make a copy of it to put into the new array
    */
    setFeedback([newFeedback, ...feedback])
    console.log(newFeedback)
  }
  
  return(
    <FeedbackContext.Provider value={{
      feedback,
      deleteFeedback,
      addFeedback,

    }}>
      {children}
    </FeedbackContext.Provider>
  )  
}

export default FeedbackContext