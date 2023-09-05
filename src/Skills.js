import {SiCss3, SiHtml5, SiJavascript, SiPython, SiReact, SiSqlite, SiTailwindcss} from "react-icons/si"

const Skills = () => {
    return ( 
        <div className="lang">
            <h2>Core Language</h2>
            <div className="lang-icon">
                <p><SiJavascript/> <SiPython/></p>
            </div>
            <br />
            <hr />
            <br />
            <h2>Frontend</h2>
            <div className="lang-icon">
                <p><SiHtml5/> <SiCss3/> <SiReact/> <SiTailwindcss/></p>
            </div>
            <br />
            <hr />
            <br />
            <h2>Database</h2>
            <div className="lang-icon">
                <p><SiSqlite/></p>
            </div>
        </div>
     );
}
 
export default Skills;