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
                                <div className="title">Nepal Scouts</div>
                                <div className="sub_title">Member</div>
                                <div className="sub">As a member of Nepal Scouts, I participated in community service, leadership training, and teamwork-focused activities. Through camps and volunteer projects, I also developed basic survival skills, including knot tying and first aid, while contributing to public awareness and local outreach initiatives.</div>
                            </div>
                            {/* <div className="image-container">
                                <div className="image">
                                    <img src="./images/outreach/scout.png" alt="outreach" />
                                </div>
                            </div> */}
                        </div>
                        <div className="item">
                            <div className="text">
                                <div className="title">WSU Hackathon (Feb 2025)</div>
                                <div className="sub_title">Participant </div>
                                <div className="sub">As a member of Nepal Scouts, I participated in community service, leadership training, and teamwork-focused activities. Through camps and volunteer projects, I also developed basic survival skills, including knot tying and first aid, while contributing to public awareness and local outreach initiatives.</div>
                            </div>
                            {/* <div className="image-container">
                                <div className="image">
                                    <img src="./images/outreach/scout.png" alt="outreach" />
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Outreach