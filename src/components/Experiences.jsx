import React from "react"
import { GetExperiences } from "../experiences_data"
import '../assets/css/experiences.css'

const Experience = (props) => {
    const { experience } = props;
    return <div className="experience">
        <div>
            <button className="experience-bullet" />
            <div>
                <ul>
                    <li>{experience.Company}</li>
                    <li>{experience.Description}</li>
                </ul>
            </div>
        </div>
    </div>
}

export class Experiences extends React.Component {
    render() {
        let data = GetExperiences();
        return (
        <div className="experiences content" id="exp">
            <h1>Experiences</h1>
            <div className="experiences-container">
                {data.map((e, i) => <Experience key={i} experience={e} />)}
            </div>
        </div>
        );
    } 
}