import mock10 from '@/assets/images/mock10.png';
import mock9 from '@/assets/images/mock9.png';
import mock8 from '@/assets/images/mock8.png';
import '@/assets/styles/Project.scss';
import Image from 'next/image';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h2>Personal Projects</h2>
        <div className="projects-grid">
            <div className="project">
                <a target="_blank" rel="noreferrer"><Image src={mock10} className="zoom" alt="thumbnail"  /></a>
                <a target="_blank" rel="noreferrer"><h2>GlobalUI</h2></a>
                <p>A website showing my Front End skills, the application is created with HTML, SASS and JS languages using Gulp builder</p>
            </div>
            <div className="project">
                <a target="_blank" rel="noreferrer"><Image src={mock9} className="zoom" alt="thumbnail" /></a>
                <a target="_blank" rel="noreferrer"><h2>ActradeMaster</h2></a>
                <p>Initial website of ActradeSoft company with all the functionalities needed</p>
            </div>
		    <div className="project">
                <a target="_blank" rel="noreferrer"><Image src={mock8} className="zoom" alt="thumbnail" /></a>
                <a target="_blank" rel="noreferrer"><h2>Authentication</h2></a>
                <p>Cross platform mobile application</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
