import { Fragment } from 'react'

const Hobby = () => {
    return (
        <Fragment>
            <section className="hobby-container">
                <div className="hobby">
                    <div className="title-container">
                        <div className="title">
                            Hobbies
                        </div>
                        <div className="sub">
                            My source of passions and creativity
                        </div>
                    </div>
                    <div className="content">
                        <div className="item">
                            <div className="text">
                                <div className="title">Electronics</div>
                                <div className="sub">As a hobby, I embarked on learning robotics and electronics. My deep fascination with innovation fueled my confidence and drove me to acquire the necessary knowledge and skills.</div>
                            </div>
                            <div className="image-container">
                                <div className="image">
                                    <img src="./images/hobby/electronics.jpg" alt="hobby" />
                                </div>
                            </div>
                        </div>
                        {/* <br /> */}
                        <div className="item">
                            <div className="text">
                                <div className="title">3d Modelling</div>
                                <div className="sub">Crafting models and 3D designs on my computer is a passion of mine. The thrill of creating something fresh fuels my confidence and enriches my journey in the realm of 3D modeling.</div>
                            </div>
                            <div className="image-container">
                                <div className="image">
                                    <img src="./images/hobby/3dmodelling.png" alt="hobby" />
                                </div>
                            </div>
                        </div>
                        {/* <br /> */}
                        <div className="item">
                            <div className="text">
                                <div className="title">Coding</div>
                                <div className="sub">Coding has been a passion since my early teens. I enjoy solving problems, building things from scratch, and constantly learning new technologies.</div>
                            </div>
                            <div className="image-container">
                                <div className="image">
                                    <img src="./images/hobby/coding.png" alt="hobby" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Hobby