import { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Resume = () => {
    return (
        <Fragment>
            <section className="resume-container">
                <div className="resume">
                    <div className="download-container">
                        <div className="download">
                            <div className="title">Resume</div>
                            <div className="content">
                                Full CV can be downloaded <Link to={'/documents/resume.pdf'} target='_blank'>here</Link>.
                            </div>
                        </div>
                    </div>
                    <div className="education-container">
                        <div className="education">
                            <div className="title">
                                Education
                            </div>
                            <div className="content">
                                <div className="item">
                                    <div className="left">
                                        <div className="date">
                                            2021-2023
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="title">
                                                Senior High School
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="content">
                                                Department of Science Uniglobe Higher Secondary School.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left">
                                        <div className="date">
                                            2019-2020
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="title">
                                                Junior High School
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="content">
                                                Occidental Public School
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Resume