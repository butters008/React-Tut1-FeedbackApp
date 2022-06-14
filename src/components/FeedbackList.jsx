import FeedbackItem from "./FeedbackItem";
import PropTypes from 'prop-types';

//This handleDelete in the param is so that it can pass up to App comp
//Also, we are checking to see if the data/array of objects being passed in is greater than 1
//If not, than we pass No Feedback yet!
const FeedbackList = ({feedback, handleDelete}) => {
    if(!feedback || feedback.legth === 0){
        <p>No feedback yet!</p>
    }

    return(
        <div className="feedback-list">
            {/* feedback.map is a array function that passes in an object so that we can go through
            The entire array and each item/key that is passed in goes into a new FeedbackItem comp
            and we pass in the key, the item(object) and the event handler for deleting which is also
            what we pass back as well  */}
            {feedback.map((item) => (
                //The handleDelete={handleDelete} is so that we can pass both up and down comp tree
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
            ))}
        </div>
    );
}

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

export default FeedbackList;