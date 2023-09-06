import {SiGithub, SiLinkedin, SiFacebook} from "react-icons/si"
import { IconContext } from "react-icons";

const Footer = () => {
    return ( 
        <footer className="p-5 items-center my-0 mx-auto border-t border-solid border-[#d5d5d5] w-11/12">
            <div>
                <a target="_blank" rel="noopener noreferrer" className="m-1.5" href="https://github.com/Tatpolc"><IconContext.Provider value={{color: "#000", size: "1.75em"}}><SiGithub className="inline"/></IconContext.Provider></a>
                <a target="_blank" rel="noopener noreferrer" className="m-1.5" href="https://www.linkedin.com/in/tatpol-chutipat/"><IconContext.Provider value={{color: "#0072b1", size: "1.75em"}}><SiLinkedin className="inline"/></IconContext.Provider></a>
                <a target="_blank" rel="noopener noreferrer" className="m-1.5" href="https://www.facebook.com/tatpol.chutipat.9"><IconContext.Provider value={{color: "#1877f2", size: "1.75em"}}><SiFacebook className="inline"/></IconContext.Provider></a>
            </div>
        </footer>
     );
}
 
export default Footer;
