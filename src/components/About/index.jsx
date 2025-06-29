import { Fragment } from 'react'

const About = () => {
    return (
        <Fragment>
            <div className="about-container">
                <div className="about-wrapper">
                    <div className="about-content">
                        <div className="left">
                            <div className="title">
                                Yujaw <span>Manandhar</span>
                            </div>

                            <div className="content">
                                <span>  
                                    I am a computer engineering student with a strong passion for hardware and a deep curiosity about how things work at a low level. I enjoy exploring circuits, embedded systems, and building projects that integrate both hardware and software. While I write clean and efficient code, what truly fascinates me is making hardware and software communicate seamlessly.
                                    <br />
                                    <br />
                                    Alongside my hardware interests, I also work on full-stack web development and software projects to broaden my skills. I’m always eager to take on hands-on challenges that deepen my understanding of technology from the inside out, whether it’s wiring a microcontroller or optimizing a program.
                                </span>
                            </div>
                        </div>
                        <div className="right">
                            <div className="image-container">
                                <div className="image">
                                    <img src="./images/profile.jpg" alt="profile" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default About