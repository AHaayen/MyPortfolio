import React from 'react';
import { Element } from 'react-scroll';

const AboutSection = () => {

    return (
        <section className="container aboutSection text-center">
            <Element name="aboutMe">
                <h2 className="display-3">About me</h2>
            </Element>
            <div className="p-section row justify-content-center">
                <div>
                    <p>
                        Someone I really admire, Gary Vaynerchuk said the following:
                        “ It’s easy to dream about it, but much harder to execute it “ .
                </p>
                </div>
                <div>
                    <p>
                        I’ve always had a passion for finding out how things are connected.
                        That’s why I’m drawn towards programming and making music.
                        The concept of composition is present in both. I see them both as an art form.
                    </p>
                </div>
                <div>
                    <p>
                        I put a lot of value in creative freedom and making an idea accessible to human kind. This could be through a song or an open source project.
                </p>
                </div>

                <div>
                    <p>
                        I’m a risk taker, a team player and I love new challenges.
                        I see myself motivating other peoples dreams and future excitements and helping them in becoming a better version of themselves.
                        I want to achieve this by doing Front-end Development and Back-end Development.
             </p>
                </div>

            </div>
        </section>
    )
}

export default AboutSection;