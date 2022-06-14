import {useState} from 'react';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

const App = () => {

/* 
This is grabbing data from data/FeedBackData.js and we are using a state to send in data 
to the list so the list can display all the data objects that are stored.  
  -> This will be converted to something better later on 
*/
const [feedback, setFeedback] = useState(FeedbackData)

// This handle even is being passed from the item, to the list, to here and we are making sure
//That the user wants to delete first than we are deleting and modifying the list with the state
//That is define above
const deleteFeedback = (id) => {
    if(window.confirm("Are you sure you want to delete this?")){
        setFeedback(feedback.filter((item) => item.id !== id))
    }

}

    return (
        <>
            <Header/>
            <div className="container">
                <FeedbackForm></FeedbackForm>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}></FeedbackList>
            </div>
        </>
        
    );
}

export default App;
