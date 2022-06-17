import {useState} from 'react';
import { v4 as uuid4} from 'uuid';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';

const App = () => {

/* 
This is grabbing data from data/FeedBackData.js and we are using a state to send in data 
to the list so the list can display all the data objects that are stored.  
  -> This will be converted to something better later on 
*/
const [feedback, setFeedback] = useState(FeedbackData)

const addFeedback = (newFeedback) => {
  newFeedback.id = uuid4()
  /* 
  the ... is a spread operator, and you will be putting everything that is in the array of feeback and 
  we are going to make a copy of it to put into the new array
  */
  setFeedback([newFeedback, ...feedback])
  console.log(newFeedback)


}

// This handle even is being passed from the item, to the list, to here and we are making sure
//That the user wants to delete first than we are deleting and modifying the list with the state
//That is define above
const deleteFeedback = (id) => {
  if(window.confirm("Are you sure you want to delete this?")){
    setFeedback(feedback.filter((item) => item.id !== id))
  }

}

  return (
    /* 
    To explain what went on and why I need to explain this, I know I will forget the pain.  So for React DOM 6+, it changed
    a few things so that any old tutorial will now be wrong.  And if you are not sure what comps are and when is to be sent over I will 
    explain for myself along to others as well. 
    -The entire tag for the App.js need to be wrapped in the <Router> tag, this lets React know that comps will be sent over to different pages
    -Each <Route> tag need to be wrapped inside a <Routes> tag
    -Comps are now sent with the element= attribute and needs to be sent over by JSX
      ex: <Route element={<CompName />}
    -For the main body since its multiple comps, it all needs to go inside the the one <Route> as one element={}

    */
    <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route 
            exact path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback}></FeedbackForm>
                <FeedbackStats feedback={feedback}/>
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}></FeedbackList>
              </>  
            }
          >
          </Route>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </div>  
    </Router>

);
}

export default App;
