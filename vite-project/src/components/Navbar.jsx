import '../styles/Navbar.css';

function Navbar({setCurrentPage}) {
    return (
        <nav id="navbar">
            <img src="../public/logo.png" alt="IAAAT Logo" onClick={() => setCurrentPage('home')}/>
            <div id="navbar-list">
                <li onClick={() => setCurrentPage('home')}>Home</li>
                <li onClick={() => setCurrentPage('for-athletes')}>For Athletes</li>
                <li onClick={() => setCurrentPage('for-coaches')}>For Coaches</li>
                <li onClick={() => setCurrentPage('for-directors')}>For Directors</li>
                <li onClick={() => setCurrentPage('tutorials')}>Tutorials</li>
                <li onClick={() => setCurrentPage('faqs')}>FAQs</li>
                <li onClick={() => setCurrentPage('contact-us')}>Contact Us</li>
            </div>
        </nav>
    );
};

export default Navbar;