// This is for code that is written out and no longer needed - Want to record everything so code and notes will be
// moved here.

//App.js from Section 3
//You use to have to write this in all files but not anymore!
import React from 'react';
import Header from './components/Header';

/*
IMPORTANT NOTE - States are like Data and there are two types we have to work with.  
There are comp level (instance)
and then there is app level (global)
*/


const App = () => {
    //return React.createElement('div', {className: 'container'},
    //React.createElement('h1', {}, 'My App'))
    //That was the old way, to complicated

    // These are vars
    const title = 'Blog Post';
    const body = 'This is my blog post';
    const comments = [
        {id: 1, text: "Comment One"},
        {id: 2, text: "Comment Two"},
        {id: 3, text: "Comment Three"}
    ]
    const loading = false;
    const showComments = true;
    // const showComments = false;

    // You can put all the div into a variable
    const commentBlock = (
        <div className='comments'>
        <h3>Comments ({comments.length})</h3>
        <ul>
            {/* This loops through all the elements in the array!
                Also, when you loop you need to have a key, which can be passed in dynamically with index */}
            {comments.map((comment, index) => 
                <li key={index}>{comment.text}</li>
            )}
        </ul>
    </div>
    );


    // Conditionals
    if (loading) return <h1>Loading...</h1>

    return (
        // You can just do <> which is called an empty fragment and this works in jsx and in DOM it shows the inside tags and no outside div!
        <div className="container">
            {/* Calling the header comp and sending data to it */}
            {/* <Header text="Going from App to Header!"/> */}

            {/* For default props in comps - you don't put anything in header tag and all is done within Header.js file */}
            <Header/>

            <h1>{title}</h1>
            <p>{body}</p>
            {/* This evaluates in the {} */}
            <p>{5 + 5 + 10}</p>

            {/* You can do conditionals with the {} as well */}
            {/* {showComments ? 'yes' : 'no'} */}
            
            {/* We moved the <div> for the comments into the function so it shows the entrie div if functionis 
            true or not */}
            {showComments ?
            //This is the array of comments in a var
            commentBlock
            
            /* This is the div for the array of comments */  
            // <div className='comments'>
            //     <h3>Comments ({comments.length})</h3>
            //     <ul>
            //         {/* This loops through all the elements in the array!
            //             Also, when you loop you need to have a key, which can be passed in dynamically with index */}
            //         {comments.map((comment, index) => 
            //             <li key={index}>{comment.text}</li>
            //         )}
            //     </ul>
            // </div>
            : 
            <p>There is nothing to load!</p>
            } {/* This is the end of the function */}
        </div>
        
    );
}

// export default App;



/* 
// -------------------------------------------------------------------------------------------------------------------------
Now that we are using states we no longer needed the code that we had placed inside the FeedbackItem comp
*/ 

const [rating, setRating] = useState(7);
const [text, setText] = useState("This is sample text for the state");

//This is how we are changing value
const handleClick = () => {
    //Hard coded
    // setRating(10);

    //Using the setRating with a function on the inside. 
    setRating((prev) => {
        console.log(prev);
        return prev + 1;
    })
};

<button onClick={handleClick}>Click</button>

/* 
// -------------------------------------------------------------------------------------------------------------------------
Debugging the form, it is not working.
*/ 

import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const [btnDisabled, setButtonDisabled] = useState()
    const [message, setMessage] = useState('')

    const handleTextChange = (e) => {
        if(text === ''){
            setButtonDisabled(true)
            setMessage("Is this working")
        }
        else if(text !== '' && text.trim().length <= 10){
            setButtonDisabled(true)
            setMessage('Text must be at least 10 charaters')
        }
        else{
            setButtonDisabled(false)
            setMessage(null)
        }
        console.log(e.target.value)
    }

    return(
        <Card>
            <form>
                <h2>How would you rate your service?</h2>
                {/* @todo - rating select component */}
                <div className="input-group">
                    <input type='text' placeholder="Write a review" onChange={handleTextChange} value={text}/>
                    <Button type="submit" version="secondary" isDisabled={btnDisabled} >Send</Button>
                </div>
            </form>

            {message && <div className="message">{message}</div>}
        </Card>
    );
}

// export default FeedbackForm

//------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------
//SECTION 6 PURGE!


//FeedbackList
import PropTypes from 'prop-types';

//We dont need this because of context - moving to scratch
// I dont know why but it says in my VSCode that I am not using proptype import but I am
FeedbackList.propTypes = {
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    )

}

//App.js
//Modified this by taking out feedback
<FeedbackList feedback={feedback} handleDelete={deleteFeedback}></FeedbackList>

//moved this into context file from App.js
  // This handle even is being passed from the item, to the list, to here and we are making sure
  //That the user wants to delete first than we are deleting and modifying the list with the state
  //That is define above
  const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this?")){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

//Got rid of this state since this moved to context
  /* 
This is grabbing data from data/FeedBackData.js and we are using a state to send in data 
to the list so the list can display all the data objects that are stored.  
  -> This will be converted to something better later on 
*/
const [feedback, setFeedback] = useState(FeedbackData)