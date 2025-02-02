import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faAndroid, faNodeJs } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '@/assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "NextJS",
    "Redux / Toolkit",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "SASS",
    "UI Libraries",
    "Grid / Flex",
    "Animations",
    "Webpack / Gulp",
];

const labelsSecond = [
    "NodeJS",
    "Express",
    "NestJS",
    "Prisma ORM",
    "Python",
    "FastAPI",
    "SqlAlchemy",
    "JWT",
    "Github",
    "GitHub Actions",
    "Docker",
    "Linux",
    "SQL",
    "MySQL",
    "PostgresQL",
    "MongoDB",
];

const labelsThird = [
    "ReactNative",
    "React Navigation",
    "IOS",
    "Android",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h2>Expertise</h2>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Front End Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React, Plane HTML CSS and JS.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNodeJs} size="3x"/>
                    <h3>Back End Development</h3>
                    <p>After developing the user interface, I focus on building a secure and scalable server-side using modern technologies like Node.js and Express. I implement best practices for security, such as encryption, token-based authentication (JWT), and data validation.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faAndroid} size="3x"/>
                    <h3>Mobile Development</h3>
                    <p>I build cross-platform mobile apps with React Native, focusing on seamless UI/UX, smooth performance, and efficient API integration for both iOS and Android.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;