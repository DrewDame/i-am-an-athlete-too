import "../styles/ContactUs.css";
import Button from "./Button";

function ContactUs() {

    const handleClick = () => {
        // e.preventDefault();
        const form = document.getElementById('contact-form');
        if (form) form.reset();
    }

    return (
        <div id="contact-us-contact-us">
            <h1>Contact Us</h1>
            {/* <form target="_blank" id="contact-form" action="https://formsubmit.co/501676aa1b18789589219e082332095b" method="POST" > */}
            <form id="contact-form">
                <div id="contact-name">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"/>
                </div>
                <div id="contact-email">
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div id="contact-phone">
                    <label htmlFor="phone">Phone</label>
                    <input type="tel" id="phone" name="phone" />
                </div>
                <div id="contact-message">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <Button type="submit" onClick={handleClick}>Submit</Button>
            </form>
        </div>
    );
}

export default ContactUs;