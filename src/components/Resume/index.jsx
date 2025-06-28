import { Fragment } from 'react'

const Resume = () => {
    return (
        <Fragment>
            <section className="resume-container">
                <div className="resume">
                    <div className="download-container">
                        <div className="download">
                            <div className="title">Resume</div>
                            <div className="content">
                                Full <span>RESUME</span> can be downloaded <a href='./documents/resume.pdf' target='_blank' rel='noreferrer'>here</a>.
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
                                            2025 - Present
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="title">
                                                Undergraduate Degree in Computer Engineering
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="contents">
                                                Wright State University, College of Engineering and Computer Science
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-container">
                        <div className="project">
                            <div className="title">
                                Projects
                            </div>
                            <div className="content">
                                <div className="item">
                                    <div className="left">
                                        <div className="date">
                                            2025
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="title">
                                                2.5D Raycasting Engine in C
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="contents">
                                                <a href="https://github.com/yujaw/raycastC" target="_blank" rel='noreferrer'>https://github.com/yujaw/raycastC</a>
                                                <div className="sub">
                                                    A lightweight 2.5D raycasting engine built in C using the OpenGL library, inspired by early FPS games like Wolfenstein 3D.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left">
                                        <div className="date">
                                            2025
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="title">
                                                LC3 Virtual Machine in C
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="contents">
                                                <a href="https://github.com/yujaw/vmC" target="_blank" rel='noreferrer'>https://github.com/yujaw/vmC</a>
                                                <div className="sub">
                                                    A full-featured implementation of the LC-3 virtual machine written in C, capable of loading and executing binary object files with support for memory-mapped I/O and keyboard input.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left">
                                        <div className="date">
                                            2024
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="title">
                                                Gfive Sample Website
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="contents">
                                                <a href="https://github.com/yujaw/gfive" target="_blank" rel='noreferrer'>https://github.com/yujaw/gfive</a>
                                                <div className="sub">
                                                    A full-stack web application built with React, Node.js, and MongoDB, featuring a responsive design and user authentication.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="left">
                                        <div className="date">
                                            2023
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="title">
                                                Yujaw Manandhar Portfolio
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="contents">
                                                <a href="https://github.com/yujaw/portfolio" target="_blank" rel='noreferrer'>https://github.com/yujaw/portfolio</a>
                                                <div className="sub">
                                                    A personal portfolio website showcasing my skills and projects, built with React and styled with CSS.
                                                </div>
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