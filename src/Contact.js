import "./styles.css";
import React from 'react';

function Contact() {
    return (
        <div id="con-main">
            <div id="contacts1">
                <h2>Full Stack Developer Training & Placements</h2>
                <hr />
                <h3>To be an effective full-stack developer, you should acquire and continue upgrading your
                    knowledge of applicable programming language skills. Consider taking courses in relevant
                    languages—like Python, HTML, CSS, and Javascript.
                </h3>
                <h3>To be an effective full-stack developer, you should acquire and continue upgrading your
                    knowledge of applicable programming language skills. Consider taking courses in relevant
                    languages—like Python, HTML, CSS, and Javascript.
                </h3>
                <hr />
                <button className="cbn">Learn More</button>
            </div>

            <div id="contacts2">
                <form action="">
                    <h2>Fill & Get upto <br />
                        25% OFF in <br />
                        Course Fees
                    </h2>
                    <input type="text" placeholder="Name*" /><br /><br />
                    <input type="text" placeholder="10 Digit Mobile Number*" /><br /><br />
                    <input type="text" placeholder="Email*" /><br /><br />
                    <input type="text" placeholder="Message" /><br /><br />
                    <button className="cbn">I am interested, Tell me more..</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
