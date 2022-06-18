import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import {FeedbackProvider} from './context/FeedbackContext'
//This is for example only, not really relavant in current project scope
import Post from './components/Post';



/*
We could do <NavLink> which we would import from 'react-router-dom' and we would add it in the {} with all the others
Also, we would than go and replace Link with NavLink, so it would like this
<NavLink to={{pathname: 'path to page'} activeClassName="Name on CSS File"}>Text for Link</NavLink>
*/

const App = () => {
  return (
    /* 
    To explain what went on and why I need to explain this, I know I will forget the pain.  So for React DOM 6+, it changed
    a few things so that any old tutorial will now be wrong.  And if you are not sure what comps are and when is to be sent over I will 
    explain for myself along to others as well. 
    -The entire tag for the App.js need to be wrapped in the <Router> tag, this lets React know that comps will be sent over to different pages
    -Each <Route> tag need to be wrapped inside a <Routes> tag
    -Comps are now sent with the element= attribute and needs to be sent over by JSX
      ex: <Route element={<CompName />}
    -For the main body since its multiple comps, it all needs to go inside the the one <Route> as one element={}

    */
  <FeedbackProvider>
    <Router>
      <Header/>
      <div className="container">
        <Routes>
          <Route 
            exact path="/"
            element={
              <>
                <FeedbackForm></FeedbackForm>
                <FeedbackStats />
                <FeedbackList></FeedbackList>
              </>  
            }
          >
          </Route>
          <Route path="/about" element={<AboutPage/>}/>
          {/* You will have to mannualy type /post/{whatever id you want to pass} you can also send over multiple */}
          <Route path="/post/:id/:name" element={<Post/>}/>
          {/* Exmaple of sending over just the ID */}
          {/* <Route path="/post/:id" element={<Post/>}/> */}
        </Routes>
      </div>  
      <AboutIconLink/>

    </Router>
  </FeedbackProvider>
);
}

export default App;
