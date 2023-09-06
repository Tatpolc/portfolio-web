import {SiCss3, SiHtml5, SiJavascript, SiPython, SiReact, SiSqlite, SiTailwindcss, SiBootstrap} from "react-icons/si"
import { IconContext } from "react-icons";

const Skills = () => {
    return ( 
        <div>
            <IconContext.Provider value={{size: "1.5em"}}>
            <h2>Core Language</h2>
            <ul>
                <li className="skill-li"><SiJavascript className="skill-icon"/> - Javascript</li>
                <li className="skill-li"><SiPython className="skill-icon"/> - Python</li>
            </ul>
            <hr />
            <h2>Frontend</h2>
            <ul>
                <li className="skill-li"><SiHtml5 className="skill-icon"/> - HTML5</li>
                <li className="skill-li"><SiCss3 className="skill-icon"/> - CSS3</li>
                <li className="skill-li"><SiBootstrap className="skill-icon"/> - Bootstrap</li>
                <li className="skill-li"><SiTailwindcss className="skill-icon"/> - Tailwind CSS</li>
                <li className="skill-li"><SiReact className="skill-icon"/> - React</li>
            </ul>
            <hr />
            <h2>Database</h2>
            <ul>
                <li className="skill-li"><SiSqlite className="skill-icon"/> - Sqlite</li>
            </ul>
            </IconContext.Provider>
        </div>
     );
}
 
export default Skills;