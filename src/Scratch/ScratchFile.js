// This is for code that is written out and no longer needed - Want to record everything so code and notes will be
// moved here.

//App.js from Section 3
//You use to have to write this in all files but not anymore!
import React from 'react';
import Header from './components/Header';

/*
IMPORTANT NOTE - States are like Data and there are two types we have to work with.  
There are comp level (instance)
and then there is app level (global)
*/


const App = () => {
    //return React.createElement('div', {className: 'container'},
    //React.createElement('h1', {}, 'My App'))
    //That was the old way, to complicated

    // These are vars
    const title = 'Blog Post';
    const body = 'This is my blog post';
    const comments = [
        {id: 1, text: "Comment One"},
        {id: 2, text: "Comment Two"},
        {id: 3, text: "Comment Three"}
    ]
    const loading = false;
    const showComments = true;
    // const showComments = false;

    // You can put all the div into a variable
    const commentBlock = (
        <div className='comments'>
        <h3>Comments ({comments.length})</h3>
        <ul>
            {/* This loops through all the elements in the array!
                Also, when you loop you need to have a key, which can be passed in dynamically with index */}
            {comments.map((comment, index) => 
                <li key={index}>{comment.text}</li>
            )}
        </ul>
    </div>
    );


    // Conditionals
    if (loading) return <h1>Loading...</h1>

    return (
        // You can just do <> which is called an empty fragment and this works in jsx and in DOM it shows the inside tags and no outside div!
        <div className="container">
            {/* Calling the header comp and sending data to it */}
            {/* <Header text="Going from App to Header!"/> */}

            {/* For default props in comps - you don't put anything in header tag and all is done within Header.js file */}
            <Header/>

            <h1>{title}</h1>
            <p>{body}</p>
            {/* This evaluates in the {} */}
            <p>{5 + 5 + 10}</p>

            {/* You can do conditionals with the {} as well */}
            {/* {showComments ? 'yes' : 'no'} */}
            
            {/* We moved the <div> for the comments into the function so it shows the entrie div if functionis 
            true or not */}
            {showComments ?
            //This is the array of comments in a var
            commentBlock
            
            /* This is the div for the array of comments */  
            // <div className='comments'>
            //     <h3>Comments ({comments.length})</h3>
            //     <ul>
            //         {/* This loops through all the elements in the array!
            //             Also, when you loop you need to have a key, which can be passed in dynamically with index */}
            //         {comments.map((comment, index) => 
            //             <li key={index}>{comment.text}</li>
            //         )}
            //     </ul>
            // </div>
            : 
            <p>There is nothing to load!</p>
            } {/* This is the end of the function */}
        </div>
        
    );
}

export default App;



/* 
// -------------------------------------------------------------------------------------------------------------------------
Now that we are using states we no longer needed the code that we had placed inside the FeedbackItem comp
*/ 

const [rating, setRating] = useState(7);
const [text, setText] = useState("This is sample text for the state");

//This is how we are changing value
const handleClick = () => {
    //Hard coded
    // setRating(10);

    //Using the setRating with a function on the inside. 
    setRating((prev) => {
        console.log(prev);
        return prev + 1;
    })
};

<button onClick={handleClick}>Click</button>
