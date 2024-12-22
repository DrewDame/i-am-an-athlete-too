import { useState } from 'react'
import "../styles/Tutorials.css"
import Button from "./Button.jsx"

function Tutorials() {
    const [currentView, setCurrentView] = useState('athletes');

    const athletesVideos = [
        {title: "Wheelchair Racing: Setting the Compensator", author: "Adaptive Sports Iowa", url: "https://www.youtube.com/watch?v=Dw17VJdFCNA&ab_channel=AdaptiveSportsIowa",
            // thumbnail: "../public/AthletesThumbnails/Wheelchair Racing Setting the Compensator.jpg"
            thumbnail: "../public/AthletesThumbnails/Placeholder.png"
        },
        {title: "Set Your Compensator Super Fast", author: "Wheels of Fire", url: "https://www.youtube.com/watch?v=7h6UrGZM4Bk&ab_channel=WheelsOfFire",
            // thumbnail: "../public/AthletesThumbnails/Set Your Compensator Super Fast.jpg"
            thumbnail: "../public/AthletesThumbnails/Placeholder.png"
        },
        {title: "How the Wheelchair Works", author: "Daniel Romanchuk", url: "https://www.facebook.com/watch/?v=1234960813948268&t=0",
            // thumbnail: "../public/AthletesThumbnails/How the Wheelchair Works.jpg"
            thumbnail: "../public/AthletesThumbnails/Placeholder.png"
        },
        {title: "Changing a Flat", author: "Daniel Romanchuk", url: "https://www.facebook.com/watch/?v=610910590780541&t=0",
            // thumbnail: "../public/AthletesThumbnails/Changing a Flat.jpg"
            thumbnail: "../public/AthletesThumbnails/Placeholder.png"
        },
        {title: "Training in the Gym", author: "Daniel Romanchuk", url: "https://www.facebook.com/watch/?v=1792187394451494&t=0",
            // thumbnail: "../public/AthletesThumbnails/Training in the Gym.jpg"
            thumbnail: "../public/AthletesThumbnails/Placeholder.png"
        },
        {title: "Wheelchair Push Stroke Basics", author: "Challenged Athletes Foundation", url: "https://www.youtube.com/watch?v=s-biBA1u4nw&ab_channel=ChallengedAthletesFoundation",
            // thumbnail: "../public/AthletesThumbnails/Wheelchair Push Stroke Basics.jpg"
            thumbnail: "../public/AthletesThumbnails/Placeholder.png"
        }
    ];

    const coachesVideos = [
        {title: "Adaptive Track and Field Starters' Guide", author: "Move United", url: "https://www.youtube.com/watch?v=khPpGOkAn4M&t=2s&ab_channel=MoveUnited"},
        {title: "Coach's Tips for Adaptive Track and Field", author: "NCHPAD", url: "https://www.youtube.com/watch?v=pNPQFV5W_3o&ab_channel=NationalCenteronHealth%2CPhysicalActivityandDisability%28NCHPAD%29"},
        {title: "Stretching for Adaptive Track and Field", author: "NubAbility Athletics Foundation", url: "https://www.youtube.com/watch?v=hLm8mTtFdGc&ab_channel=NubAbilityAthleticsFoundation"},
        {title: "Wheelchair Racing Coaching Tips", author: "Challenged Athletes Foundation", url: "https://www.youtube.com/watch?v=yN-4y0oBcEA&ab_channel=ChallengedAthletesFoundation"}
    ]

    return (
        <div id="tutorial-container">
            <h2>Tutorials</h2>
            <h3>Blah blah blah blah</h3>
            <div id="tutorial-button-container">
                <Button id="tutorial-athletes-button" onClick={() => setCurrentView('athletes')}>
                    For Athletes
                </Button>
                <Button id="tutorial-coaches-button" onClick={() => setCurrentView('coaches')}>
                    For Coaches
                </Button>
            </div>
            <div id="tutorial-video-container">
                {currentView === 'athletes' && (
                    <div className="tutorial-athlete-card">
                        <h3>Athletes Tutorial</h3>
                        {athletesVideos.map((video, index) => (
                            <a key={index} href={video.url} target="_blank" rel="noopener noreferrer" className="video-card">
                                <img src={video.thumbnail} alt={video.title} className="video-thumbnail" />
                                <div className="video-info">
                                    <h4>{video.title}</h4>
                                    <p>{video.author}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                )}
                {currentView === "coaches" && (
                    <>
                        <h3>Coaches Tutorial</h3>
                        {coachesVideos.map((video, index) => (
                            <div key={index} className="video-card">
                                <h4>{video.title}</h4>
                                <p>{video.author}</p>
                                <a href={video.url} target="_blank" rel="noopener noreferrer">Watch Video</a>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    );
}

export default Tutorials;