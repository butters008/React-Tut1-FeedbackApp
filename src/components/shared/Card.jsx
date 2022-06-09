import PropTypes from 'prop-types'

const Card = ({children, reverse}) => {
    return(
        //This is an example of a conditional class
        // <div className={`card ${reverse && 'reverse'}`}>
        //     {children}
        // </div>

        //This is an example of a conditional style
        <div className="card" style={{
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

// Card.propTypes = {
//     children: PropTypes.node.isRequired,
//     reverse: PropTypes.bool,
// }

export default Card;