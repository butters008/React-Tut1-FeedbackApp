import FeedbackItem from "./FeedbackItem";
/*
For animation you would need to download framer-motion with npm install framer-motion,
and for this project we are calling on AnimationPresence which tells react that whatever 
is wrapped in this div tag is going to be animated, and the motion is the type of animation
we are going to be using.

In the <motion> we are using tha attruibutes key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
and the reason for the { {attribute: value} } is because react need an object, so like in the other functions we are deconstructing it
which makes it so we can use a single attribute instead of calling an object
*/
import {motion, AnimatePresence} from 'framer-motion'
//This for context
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'


/*
This handleDelete in the param is so that it can pass up to App comp
Also, we are checking to see if the data/array of objects being passed in is greater than 1
If not, than we pass No Feedback yet! 

note I took out {feedback, handleDelete} since this is now being handled in the context
*/
const FeedbackList = () => {
    //This is for the context
    const {feedback} = useContext(FeedbackContext)

    if(!feedback || feedback.legth === 0){
        <p>No feedback yet!</p>
    }

    // return(
    //     <div className="feedback-list">
    //         {/* feedback.map is a array function that passes in an object so that we can go through
    //         The entire array and each item/key that is passed in goes into a new FeedbackItem comp
    //         and we pass in the key, the item(object) and the event handler for deleting which is also
    //         what we pass back as well  */}
    //         {feedback.map((item) => (
    //             //The handleDelete={handleDelete} is so that we can pass both up and down comp tree
    //             <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
    //         ))}
    //     </div>
    // );

    //This return will have the animation 
    return(
        <div className="feedback-list">
            <AnimatePresence>
            {feedback.map((item) => (
                <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
                    <FeedbackItem key={item.id} item={item}/>
                </motion.div>
            ))}
            </AnimatePresence>
        </div>
    );
}

export default FeedbackList;