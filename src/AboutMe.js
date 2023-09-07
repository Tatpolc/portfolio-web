import { Link } from "react-router-dom";

const AboutMe = () => {
    return ( 
        <div>
            <h2>About Me</h2>
            <article>
                <p>I am a self-taught front-end developer. This is the new chapter of my Life.</p>
                <p>I started studying web-development from scratch. Although before this I've been messing around with some Python and SQLite. You can learn more about this project in the <Link className="underline hover:text-[#1877f2]" to="/project">Project</Link>.</p>
                <p>The reason that I become a front-end developer is because I don't have a computer science degree and I feel that this route is the best route for me to enter the programming world.</p>
            </article>
            <br />
            <hr />
            <br />
            <div>
                <h3>Professional Experience</h3>
                <h4>Accountant, Customer Service, Secretary to the Director - CSI Society Co., Ltd.</h4>
                <h5>2021 - 2023</h5>
                <p>- Perform accounting duties in all aspect of the company.</p>
                <p>- Organizing a seminar event for the company.</p>
                <p>- Coordinating with location and staff in organizing the event.</p>
                <p>- Perform duties of the director as a substitute.</p>
                <p>- Assist attendee in the seminar.</p>
                <p>- Send brief in order to create a webpage for each company visit.</p>
                <p>- Taking care of attendee in both domestic and international company visit.</p>
                <p>- Answer question in the company’s social media account.</p>
                <br />
                <h4>Information Technology Trainee - St. Regis Bangkok Hotel</h4>
                <h5>2020</h5>
                <p>Performing duties to assist associates with software and hardware problems and diagnose hotel’s system whenever there is a problem.</p>
                <p>- Making item inventory list for all of IT department component.</p>
                <p>- Update and maintain all the hotel’s computer.</p>
                <p>- Fix and maintain printer as well as setting the IP address of each printer.</p>
                <p>- Run quarterly check on the hotel systems and write the report to be submit to the General Manager.</p>
                <p>- Maintain the LAN switch and inform maintenance if replacement is needed.</p>
                <p>- Coordinate with engineering and maintenance when upgrading the hotel’s system.</p>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <h3>Education</h3>
                <h4>Bachelor Degree</h4>
                <p>Hotel and Restaurant Management Program, Rangsit University</p>
                <p>2016 - 2020</p>
                <br />
                <h4>Highschool</h4>
                <p>International General Certificate of Secondary Education (IGCSE)</p>
                <p>2014 - 2015</p>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <h3>Communication</h3>
                <p>Excellent command of Thai (Native)</p>
                <p>Excellent command of English (TOEIC - 955)</p>
            </div>
            <br />
            <hr />
            <br />
            <div>
                <h3>Volunteer Work</h3>
                <h4>Bangkok's FIR Chief - International Virtual Aviation Organization, Thailand Division</h4>
                <p>- Responsible for maintaining the aerospace data in the game server.</p>
                <p>2019 - Present</p>
                <br />
                <h3>Extracurricular Activities</h3>
                <p>- Providing food and beverage service for college and university events (Student Orientation and Graduation Ceremony)</p>
                <p>- Organizing a dining event as part of Food and Beverage Service Course</p>
                <p>- Organizing a banquet event as part of Banquet and Catering Course</p>
            </div>
        </div>
     );
}
 
export default AboutMe;