import QRCode from "react-qr-code";
import { BiCopy } from "react-icons/bi";

const Contact = () => {
    return ( 
        <div className="contact">
            <h2>Email: <a href="mailto: tatpolchutipat@gmail.com">tatpolchutipat@gmail.com (mailto)</a> <button id="copy-button"><BiCopy 
            onClick={() => navigator.clipboard.writeText('tatpolchutipat@gmail.com')} /></button></h2>
            <br />
            <h2>Tel: +66 (0) 62 982 5623</h2>
            <br />
            <hr />
            <br />
            <h2>Follow Me:</h2>
            <div className="main-contact">
                <div id="contact">
                    <a href="https://github.com/Tatpolc" id="qr-code"><QRCode value="https://github.com/Tatpolc" /></a>
                    <a href="https://github.com/Tatpolc"><h3 style={{paddingTop: 15}}>Github</h3></a>
                </div>
                <div id="contact">
                    <a href="https://www.linkedin.com/in/tatpol-chutipat/" id="qr-code"><QRCode value="https://www.linkedin.com/in/tatpol-chutipat/" /></a>
                    <a href="https://www.linkedin.com/in/tatpol-chutipat/"><h3 style={{paddingTop: 15}}>LinkedIn</h3></a>
                </div>
                <div id="contact">
                    <a href="https://www.facebook.com/tatpol.chutipat.9" id="qr-code"><QRCode value="https://www.facebook.com/tatpol.chutipat.9" /></a>
                    <a href="https://www.facebook.com/tatpol.chutipat.9"><h3 style={{paddingTop: 15}}>Facebook</h3></a>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;