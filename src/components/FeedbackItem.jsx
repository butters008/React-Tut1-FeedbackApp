import { useState } from "react";
import React from "react";
import { FaTimes } from "react-icons/fa";
import PropTypes from 'prop-types'
import Card from "./shared/Card";

const FeedbackItem = ({item, handleDelete}) => {
    // const handleClick = (id) => {
    //     console.log(id);
    // }

    
    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            {/* This one was an example of function being called in */}
            {/* <button className="close" onClick={handleClick}> */}

            {/* This is an example of function being declared and run on the onClick */}
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes color='purple'/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;