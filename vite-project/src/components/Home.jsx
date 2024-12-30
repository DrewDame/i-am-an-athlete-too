import '../styles/Home.css';
import Button from "./Button.jsx"
import React, {useState} from 'react';

function Home() {
    const [userType, setUserType] = useState(null);

    const athleteCards = [
        {title: "Checklist", subtitle: "Complete the checklist to joining the world of adaptive track and field"},
        {title: "Athlete First Steps", subtitle: "See the first steps you can take to begin your journey as an adaptive track athlete"},
        {title: "Detailed Integration Guide", subtitle: "Read the in-depth guide to get adaptive track and field integrated in your school"},
        {title: "Upcoming Clinics", subtitle: "Learn about upcoming clinics that you can participate in"},
        {title: "Athlete Tutorials", subtitle: "Watch tutorials about adaptive track catered towards athletes"},
        {title: "FAQs", subtitle: "Look over frequently asked questions about adaptive track and field"},
        {title: "Equipment Resources", subtitle: "Find information on equipment grants and how to 3D print racing gloves"}
    ]

    const coachCards = [
        {title: "Checklist", subtitle: "Complete the checklist to contributing to the world of adaptive track and field"},
        {title: "Detailed Integration Guide", subtitle: "Read the in-depth guide to integrate adaptive track and field in your school"},
        {title: "Upcoming Clinics", subtitle: "Learn about upcoming clinics that you can participate in"},
        {title: "Coach Tutorials", subtitle: "Watch tutorials about adaptive track and field catered towards coaches"},
        {title: "FAQs", subtitle: "Look over frequently asked questions about adaptive track and field"},
        {title: "Equipment Resources", subtitle: "Find information on equipment grants and how to 3D print racing gloves for your athletes"}
    ]

    const handleStoryClick = () => {
        document.getElementById('story-container').scrollIntoView();
    }

    const handleStartClick = () => {
        document.getElementById('get-started-container').scrollIntoView();
    }

    const handleAthleteClick = () => {
        setUserType('athlete');
    }

    const handleCoachClick = () => {
        setUserType('coach');
    }

    const handleToggleClick = () => {
        if (userType === 'athlete') {
            setUserType('coach');
        }
        else {
            setUserType('athlete');
        }
    }

    return (
        <div id="home">
            <div id="home-top">
                <div id="home-top-cta">
                    <h1>YOU CAN MAKE HISTORY</h1>
                    <h2>Support adaptive athletes to join their school sports teams in the state of Michigan</h2>
                    <div id="cta-button-container">
                        <Button id={"story-button"} onClick={handleStoryClick} className={"home-button"}>Maria's Story</Button>
                        <Button id={"get-started-button"} onClick={handleStartClick} className={"home-button"}>Get Started</Button>
                    </div>
                </div>
            </div>
            <div id="story-container">
                <div id="story-part-one">

                </div>
                <div id="story-part-two">

                </div>
                {/*Put as many story sections as necessary right here */}
                <div id="get-started-container">
                    <h1>MAKE AN IMPACT</h1>
                    {!userType && <h2>What type of User are you?</h2>}
                    {!userType && (<div id="get-started-options-container">
                        <Button id={"athletes-parents-button"} className={"start-option-button"} onClick={handleAthleteClick}>Athlete/Parent</Button>
                        <Button id={"coaches-directors-button"} className={"start-option-button"} onClick={handleCoachClick}>Coach/Director</Button>
                    </div>
                    )}
                    {userType === "athlete" && (
                        <div className="start-grid">
                            <h2>Athlete and Parent Resources</h2>
                            <Button className={"start-toggle-button"} id={"start-athlete-to-coach"} onClick={handleToggleClick}>Switch to Coach/Director View</Button>
                            <div className="start-grid-cards">
                                {athleteCards.map((card, index) => (
                                    <a key={index} href={card.url} target="_blank" rel="noopener noreferrer" className="start-grid-card">
                                        {/* <img src={card.thumbnail} alt={card.title}></img> */}
                                        <div className="card-info">
                                            <h3>{card.title}</h3>
                                            <h4>{card.subtitle}</h4>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                    {userType === 'coach' && (
                        <div className="start-grid">
                            <h2>Coach and Director Resources</h2>
                            <Button className={"start-toggle-button"} id={"start-coach-to-athlete"} onClick={handleToggleClick}>Switch to Athlete/Parent View</Button>
                            <div className="start-grid-cards">
                                {coachCards.map((card, index) => (
                                    <a key={index} href={card.url} target="_blank" rel="noopener noreferrer" className="start-grid-card">
                                        {/* <img src={card.thumbnail} alt={card.title}></img> */}
                                        <div className="card-info">
                                            <h3>{card.title}</h3>
                                            <h4>{card.subtitle}</h4>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;