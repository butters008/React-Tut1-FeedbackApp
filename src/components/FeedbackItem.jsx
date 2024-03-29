// import { useState } from "react"; // No longer need this
import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from 'prop-types'
import Card from "./shared/Card";
//for the context 
import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({item}) => {
    // const handleClick = (id) => {
    //     console.log(id);
    // }

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    
    return (
        <Card reverse={false}>
            <div className="num-display">{item.rating}</div>
            {/* This one was an example of function being called in */}
            {/* <button className="close" onClick={handleClick}> */}

            {/* This is an example of function being declared and run on the onClick */}
            <button className="close" onClick={() => deleteFeedback(item.id)}>
                <FaTimes color='purple'/>
            </button>
            <button className="edit" onClick={() => editFeedback(item)}>
                <FaEdit color="purple"/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    );
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem;