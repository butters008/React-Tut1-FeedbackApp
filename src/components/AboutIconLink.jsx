import {Link} from 'react-router-dom' //For the links
import { FaQuestion } from 'react-icons/fa'

const AboutIconLink = () => {
  return(
    /*
    For linking pages itself you need to import the link, and then
    use the <Link> tag, 
    -the pathname is the page you go to
    -search is the param you can look for
    -hash is the search result.
    */
    <Link to={{pathname: '/about', search: '?sort=name', hash: 'Hello'}} className="about-link">
      <FaQuestion size={30} />
    </Link>
  )
}

export default AboutIconLink