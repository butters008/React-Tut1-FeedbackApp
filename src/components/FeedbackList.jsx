import FeedbackItem from "./FeedbackItem"
import PropTypes from 'prop-types'

// This handleDelete in the param is so that it can pass up to App comp
const FeedbackList = ({feedback, handleDelete}) => {
    if(!feedback || feedback.legth === 0){
        <p>No feedback yet!</p>
    }

    return(
        <div className="feedback-list">
            {feedback.map((item) => (
                //The handleDelete={handleDelete} is so that we can pass both up and down comp tree
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
            ))}
        </div>
    );
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired,
//         })
//     )

// }

export default FeedbackList;