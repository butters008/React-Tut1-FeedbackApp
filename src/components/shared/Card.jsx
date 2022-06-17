import React from 'react';
import PropTypes from 'prop-types'

/* 
We are decontructing the prop when we are  doing the {} and when we bring in more props
we just use a (,)

*/
const Card = ({children, reverse}) => {
    return(
        /*
        This is an example of a conditional class 
        and we made a CSS section class in the file called reverse and calling it if reverse prop is true
        */
        // <div className={`card ${reverse && 'reverse'}`}>
        //     {children}
        // </div>

        /*
        Also, remember we are not using a Card.css because we are using a global CSS file,
        Since all the style is on the index.css, all the comps made in the tree which branches from it
        It touches the index.css so we can call the classes in that CSS without importing. 
        */ 
        //This is an example of a conditional style
        <div className="card" style={{
            /*
            This is checking for the prop called reverse, and all this is doing if the prop comes in true
            and if this is true we are manually switching the CSS in the div with CSS in JSX
            and setting the new values and sending back the comp that is calling the card.
            */
            backgroundColor: reverse ? 'black' : 'white',
            color: reverse ? 'white': 'black'
        }}>
            {children}
        </div>
    );
}

Card.defaultProps = {
    reverse: false,
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card;