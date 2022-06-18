import { Link } from 'react-router-dom'
import Card from "../components/shared/Card";


const About = () => {
  return(
    <Card>
      <h1>About Page</h1>
      <p>This is the about page for router demo.</p>
      <Link to='/'>
        Home
      </Link>
    </Card>
  );
}

export default About