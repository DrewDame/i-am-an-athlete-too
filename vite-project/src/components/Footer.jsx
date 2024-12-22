import '../styles/Footer.css'
import Button from "./Button"

function Footer() {
    return (
        <footer id ="footer-footer">
            <div id="footer-top-container">
                <div id="footer-about">
                    <h2>Our Mission</h2>
                    <p>I Am An Athlete, Too is a 501(c) non-profit organization blahblahblah</p>
                    <p>Who are we?  We are a group of volunteers dedicated to encouraging, lobbying, and supporting the inclusion of adaptive athletes into middle and high school sports throughout the state of Michigan.  Led by adaptive athlete Maria Velat, we have lobbied the MHSAA for over three years for this purpose.  Our work continues, as the current MHSAA adaptive category, although a major step in the right direction, applies only to regionals and finals.  The MHSAA allows adaptive athletes to compete in only a very few select events.  The current rules do not allow adaptive athletes to be scoring members of their team, or qualify for state records.  We believe that the key to change is proving that Michigan's adaptive athletes are every bit as competitive as their non-disabled peers, and deserve the same opportunities to be included as full members on their school teams.  </p>
                </div>
                <div id="footer-buttons">
                    {/* <h3>Contact Us</h3> */}
                    <Button>Back to Top</Button>
                    <Button>Contact Us</Button>
                </div>
            </div>
            <div id="footer-bottom-container">
                <div id="footer-logo">
                    <img src="../public/logo.png" alt="IAAAT Logo"/>
                </div>
                <div id="footer-copyright">
                    <p>Copyrighted blah blah blah</p>
                </div>
                <div id="footer-socials">
                    <p>Insta</p>
                    <p>YT</p>
                    <p>Email?</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;