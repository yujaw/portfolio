import { Fragment } from 'react'

const Outreach = () => {
    return (
        <Fragment>
            <section className="outreach-container">
                <div className="outreach">
                    <div className="title-container">
                        <div className="title">
                            Outreach
                        </div>
                        <div className="sub">
                            My diverse focus beyond academics.
                        </div>
                    </div>
                    <div className="content">
                        <div className="item">
                            <div className="text">
                                <div className="title">WSU Hackathon 2025</div>
                                <div className="sub_title">Participant </div>
                                <div className="sub">Participated in Wright State University Hackathon 2025, working on a basic web app as part of a team that used modern development and deployment practices. The experience helped me improve my collaboration and quick development skills.</div>
                            </div>
                            {/* <div className="image-container">
                                <div className="image">
                                    <img src="./images/outreach/scout.png" alt="outreach" />
                                </div>
                            </div> */}
                        </div>
                        <div className="item">
                            <div className="text">
                                <div className="title">Uniglobe Intra-School Basketball Competition</div>
                                <div className="sub_title">Team Runner-Up</div>
                                <div className="sub">Our team secured the runner-up position in the Uniglobe Intra-School Basketball Tournament, demonstrating strong teamwork, dedication, and sportsmanship.</div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="text">
                                <div className="title">Nepal Scouts</div>
                                <div className="sub_title">Member</div>
                                <div className="sub">As a member of Nepal Scouts, I participated in community service, leadership training, and teamwork-focused activities. Through camps and volunteer projects, I also developed basic survival skills, including knot tying and first aid, while contributing to public awareness and local outreach initiatives.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Outreach