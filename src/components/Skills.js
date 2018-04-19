import React from 'react';
import { Element } from 'react-scroll';

const Skills = () => {

    return (
        <div className="container skillSection text-center">
            <Element name="skills">
                <h1 className="skillHeader">Skills</h1>
            </Element>
            <div className="skillRow row justify-content-center">
                <div className="font-awesome">
                    <div>
                        <i className="font devicon-react-original colored fab fa-react fa-spin"></i>
                        <p>ReactJs</p>
                    </div>
                </div>
                <div className="font-awesome">
                    <div>
                        <i className="font devicon-nodejs-plain colored"></i>
                        <p>NodeJs</p>
                    </div>
                </div>
                <div className="font-awesome">
                    <div>
                        <i className="font devicon-html5-plain colored"></i>
                        <p>HTML5</p>
                    </div>
                </div>
                <div className="font-awesome">
                    <div>
                        <i className="font devicon-javascript-plain colored"></i>
                        <p>Javascript</p>
                    </div>
                </div>
                <div className="font-awesome">
                    <div>
                        <i className="font devicon-css3-plain colored"></i>
                        <p>CSS3</p>
                    </div>
                </div>
                <div className="font-awesome">
                    <div>
                        <i className="font devicon-bootstrap-plain colored"></i>
                        <p>Bootstrap</p>
                    </div>
                </div>
                <div className="font-awesome">
                    <div>
                        <i className="font devicon-babel-plain colored"></i>
                        <p>Babel</p>
                    </div>
                </div>
                <div className="font-awesome">
                    <div>
                        <i className="font devicon-docker-plain colored"></i>
                        <p>Docker</p>
                    </div>
                </div>
                <div className="font-awesome">
                    <div>
                        <i className="font devicon-mongodb-plain-wordmark colored"></i>
                        <p>MongoDB</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skills