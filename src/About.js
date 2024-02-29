import "./styles.css";
import React from 'react';

function About() {
    return (
        <>
            <div id="about1">
                <div id="a1">
                    <h2>Enriching and Fun Early Years  <br />
                        Matter Preschool Curriculum</h2>
                    <hr />
                    <h3>Our curriculum focuses on the holistic development of the child and is suitably
                        mapped to age-appropriate objectives and outcomes. Based on Dr. Howard
                        Gardner's Theory of Multiple Intelligences and Experiential Learning, the
                        KLAY curriculum empowers the child to be able to establish a routine, follow
                        directions, make friends and work independently.
                    </h3>
                </div>
                <div id="a2">
                    <img src="images/about1img.png" alt="this is img" />
                </div>
            </div>
            <div id="about2">
                <div id="b1">
                    <img src="./images/about2img.png" alt="this is img" />
                </div>
                <div id="b2">
                    <h2>Socio-emotional & Physical <br />
                        Development
                    </h2>
                    <hr />
                    <h3>A multi-sensory environment that includes group activities, role plays, story time and drama that have been
                        curated to meet the child's social, emotional, physical and emotional milestones. We make them 'Big School
                        Ready'!
                    </h3>
                </div>
            </div>
            <div id="about3">
                <div id="c1">
                    <h2>Milestones Tracking and <br />
                        Regular Assessments</h2>
                    <hr />
                    <h3>180 degree evaluation, milestone tracking and regular assessments every
                        term, to let you know of your child's progress. We also help counsel with
                        strategies, should a child require a more focused stimulation</h3>
                </div>
                <div id="c2">
                    <img src="./images/about3img.png" alt="this is img" />
                </div>
            </div>
        </>
    );
}

export default About;
