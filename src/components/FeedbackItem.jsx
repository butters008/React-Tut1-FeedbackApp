import { useState } from "react";

const FeedbackItem = () => {
    const [rating, setRating] = useState(7);
    const [text, setText] = useState("This is sample text for the state");
    
    return (
        <div className="card">
            <div className="num-display">{rating}</div>
            <div className="text-display">{text}</div>
        </div>
    );
}

export default FeedbackItem;