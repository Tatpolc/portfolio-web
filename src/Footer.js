import { SocialIcon } from "react-social-icons";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="links">
                <SocialIcon url="https://github.com/Tatpolc" target="_blank" style={{height: 30, width: 30}} />
                <SocialIcon url="https://www.linkedin.com/in/tatpol-chutipat/" target="_blank" style={{height: 30, width: 30}} />
                <SocialIcon url="https://www.facebook.com/tatpol.chutipat.9" target="_blank" style={{height: 30, width: 30}} />
            </div>
        </footer>

     );
}
 
export default Footer;
