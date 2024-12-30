import React, { useState } from 'react';
import "../styles/FAQs.css";
import {RiArrowDropDownLine} from "react-icons/ri"

function FAQs() {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqMap = [
        {question: "Is a para-divison fair for all athletes?", answer: "Adding a para-division to track and field is no different than having a male and female division. Adaptive athletes compete against either a standard or other adaptive athletes, and having a para-division in no way changes the integrity or the level of competition of the sport. A Para-division includes far more students in athletics than were able to participate before, so actually vastly improves the experience of track and field for everyone. The number of points scored for an individual team by an adaptive athlete directly correlates to the number of para-athletes participating in the event from all participating schools (e.g. if only one team has an adaptive athlete, the maximum that athlete could score per event is 1 point). The more teams that have adaptive athletes, the more points those adaptive athletes are potentially able to score (see scoring chart above under section #2). This encourages high school teams to recruit para-athletes as valuable competitive assets, while maintaining fairness to teams that might not have a para-athlete."},
        {question: "Will there be a significant cost to implement a para-division?", answer: "Athletes are responsible for obtaining their own racing chairs for competition. There are loaner programs and grant opportunities for such athletes, such as the Challenged Athlete Foundation and the Kelly Brush Foundation. For field events, a field chair is recommended but not required. Implements such as shot put and discus are the same as used by other athletes. The cost to implement a para-division for member schools is negligible."},
        {question: "Are there increased safety concerns when including athletes with disabilities?", answer: "A physical by a medical professional, clearing the athlete for participation in sports, is required before participation, as is MHSAA policy for all athletes. The American Association of Adapted Sports Programs has put out additional guidance on facilitating safety. https://adaptedsports.org/wp-content/uploads/2021/03/First-Aid-brochure-final.pdf"},
        {question: "How do we officiate adaptive athletes?", answer: "USA Track and Field official certification offers an additional endorsement for Para Track and Field Officials. To be eligible, the official must be an Association level official and take the online certification. The certification can be offered by the Association or found at: http://atfusa.org/OFFICIALS/Officials.htm. ATFUSA offers training and mentorship for officiating events with para-athletes."},
        {question: "Is special transportation required?", answer: "Para-athletes on Individualized Education Plans (as well as some 504 plans), have transportation for school events already established, and those accommodations would need to be followed for athletics as well."},
        {question: "Has this model been used here in Michigan?", answer: "Thirty-five other states have already implemented para-divisions over the course of the past 20 to 30 years. There is a wealth of data and experience easily available from these programs. Two Michigan highschools (Houghton High School in the Upper Peninsula, and Hudsonville High School in the Lower Peninsula) independently initiated regional agreements in their conferences during the 2020-21 track and field season, to include wheelchair athletes. These seasons were highly successful and ran without incident.  Houghton High School used the model delineated here, and went on to sponsor a proposal to the MHSAA to adopt it state-wide."}
    ];

    const handleToggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <div id="faqs">
            {faqMap.map((faq, index) => (
                <div key={index} className="faq-item" onClick={() => handleToggle(index)}>
                    <div className="faq-question">
                        {faq.question}
                        <RiArrowDropDownLine id="faq-arrow" size={40}/>
                    </div>
                    {activeIndex === index && (
                        <div className="faq-answer">
                            {faq.answer}
                        </div>
                    )}
                    {/* <img src="../public/down-arrow.png"></img> */}
                </div>
        ))}
        </div>
    );
};

export default FAQs;