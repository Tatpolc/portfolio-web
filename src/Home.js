import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <div className="home">
            <h1>Thank you for visiting my website!</h1>
            <p>Please feel free to take a look into my website and it's content.</p>
            <p>If you would like to see which programming language I know, please see in the <Link className="home-link" to="/skills">skills</Link> page.</p>
            <p>My active and past project will be at the <Link className="home-link" to="/projects">projects</Link> page.</p>
            <p>If you would love to learn more about me, please see the <Link className="home-link" to="/about">about me</Link> page.</p>
            <p>And lastly, if you would like to contact or follow me, it will be in the <Link className="home-link" to="/contact">contact</Link> page.</p>
            <p>Link to my full <Link className="home-link" target="_blank" rel="noopener noreferrer" to="https://drive.google.com/file/d/1DK6TjRhhJbRRgxC7cLBabX4Yt_7HH7TT/view?usp=sharing">Resume</Link>.</p>
        </div>
     );
}
 
export default Home;