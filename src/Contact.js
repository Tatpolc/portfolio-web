import QRCode from "react-qr-code";
import { BiCopy } from "react-icons/bi";
import { IconContext } from "react-icons";

const Contact = () => {
    return ( 
        <div>
            <h2>Email: <a className="contact-info" href="mailto: tatpolchutipat@gmail.com">tatpolchutipat@gmail.com (mailto)</a> <IconContext.Provider value={{size: "1.1em"}}><button className="hover:shadow-[5px_5px_15px_0_rgba(0,0,0,0.25)] hover:transition-shadow hover:duration-300 active:border active:border-solid active:border-[#d5d5d5]"><BiCopy onClick={() => navigator.clipboard.writeText('tatpolchutipat@gmail.com')} /></button></IconContext.Provider></h2>
            <h2>Tel: <a className="contact-info" href="tel: +66629825623">+66 (0) 62 982 5623</a></h2>
            <h2>View my <a className="contact-info" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1DK6TjRhhJbRRgxC7cLBabX4Yt_7HH7TT/view?usp=sharing">Resume</a></h2>
            <hr />
            <h2>Follow Me:</h2>
            <section className="flex flex-row flex-wrap justify-evenly">
                <div className="contact">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Tatpolc"><QRCode value="https://github.com/Tatpolc" /></a>
                    <span><h3 className="contact-qr-cap"><a target="_blank" rel="noopener noreferrer" href="https://github.com/Tatpolc">Github</a></h3></span>
                </div>
                <div className="contact">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tatpol-chutipat/"><QRCode value="https://www.linkedin.com/in/tatpol-chutipat/" /></a>
                    <span><h3 className="contact-qr-cap"><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/tatpol-chutipat/">LinkedIn</a></h3></span>
                </div>
                <div className="contact">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/tatpol.chutipat.9"><QRCode value="https://www.facebook.com/tatpol.chutipat.9" /></a>
                    <span><h3 className="contact-qr-cap"><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/tatpol.chutipat.9">Facebook</a></h3></span>
                </div>
            </section>
        </div>
     );
}
 
export default Contact;