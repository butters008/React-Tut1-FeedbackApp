const FeedbackStats = ({feedback}) => {
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    //Could not get regex to work and dont care atm
    // average = average.toFixed(1).replace(/[.,]0$/. '')
    average = average.toFixed(1)

    return(
        <div className="feedback-stats">
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
}

export default FeedbackStats;