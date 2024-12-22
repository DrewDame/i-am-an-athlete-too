import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Tutorials from "./components/Tutorials"
import ContactUs from "./components/ContactUs"
import FAQs from "./components/FAQs"

function App() {
  const [currentPage, setCurrentPage] = useState('faqs');

  function renderPage() {
    switch (currentPage) {
      case 'home':
        return <Home/>;
      // case 'for-athletes':
      //   return <ForAthletes/>;
      // case 'for-coaches':
      //   return <ForCoaches/>;
      // case 'for-directors':
      //   return <ForDirectors/>;
      case 'tutorials':
        return <Tutorials/>;
      case 'faqs':
        return <FAQs/>;
      case 'contact-us':
        return <ContactUs/>;
      default:
        return <Home/>
    }
  }

  return (
    <div id="app-container">
      <Navbar setCurrentPage={setCurrentPage} id="navbar"/>
      <main id="main">
        {/*Return the body of the site based on the current page we're looking at*/}
          {renderPage()}
      </main>
      <Footer id="footer"/>
    </div>
  )
}

export default App
