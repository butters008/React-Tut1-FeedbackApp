import PropTypes from 'prop-types'

const Button = ({children, version, type, isDisabled}) => {
    return(
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    );
}

//Whatever props do not get passed into the button comp, the default will take over to fill in the blank
Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

//This is setting what type of primatives go to which prop
Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
}

export default Button;