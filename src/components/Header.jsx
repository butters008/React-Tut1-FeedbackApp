import React from 'react';

// const Header = (props) => {
const Header = ({text}) => {
    //You can send over CSS values into comps - not sure if we really need to do that.
    const headerStyle = {backgroundColor: 'orange', color: 'black'}

  return (
    //   This is how you do inline CSS in JSX files
    // <header style={{backgroundColor: 'orange', color: 'black'}}>
    <header style={headerStyle}>
        <div className='container'></div>
        {/* <h2>{props.text}</h2> */}
        <h2>{text}</h2>
    </header>
  );
}

Header.defaultProps = {
    text: 'Feedback UI',
}

//You dont need propTypes really and if you use TypeScript - you wont need this at all
// Header.propTypes = {
//     text: PropTypes.string,
// }

export default Header;