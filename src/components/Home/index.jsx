import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation';
import { animate, stagger } from 'animejs';

const Home = () => {
    const [columns, setColumns] = useState(0);
    const [rows, setRows] = useState(0);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        const newColumns = Math.floor(window.innerWidth / 50);
        const newRows = Math.floor(window.innerHeight / 50);

        setColumns(newColumns);
        setRows(newRows);

        window.addEventListener('resize', updateGrid);
        return () => window.removeEventListener('resize', updateGrid);
    }, []);

    const updateGrid = () => {
        const newColumns = Math.floor(window.innerWidth / 50);
        const newRows = Math.floor(window.innerHeight / 50);

        setColumns(newColumns);
        setRows(newRows);
    };

    const createTile = (index) => {
        return <div key={index} className="tile"></div>;
    };

    const createTiles = (quantity) => {
        const tiles = Array.from(Array(quantity), (_, index) => createTile(index));
        return tiles;
    };

    const createGrid = () => {
        const tiles = createTiles(columns * rows);
        return tiles;
    };

    const handleMouseUp = (e) => {
        const tiles = document.querySelectorAll('.tile');
        const tileIndex = Array.from(tiles).indexOf(e.target);

        document.querySelector('.container').classList.toggle('toggle');
        setToggle(!toggle);

        animate('.tile', {
            opacity: toggle ? 1 : 0,
            easing: 'easeInOutQuad',
            duration: 100,
            delay: stagger(50, {
                grid: [columns, rows],
                from: tileIndex
            }
            )
        });
    };

    useEffect(() => {
        document.body.style.overflow = 'auto';
    }, [])

    return (
        <Fragment>
            <div className="home-wrapper">
                <div className="home-container" onMouseUp={handleMouseUp}>

                    {
                        window.innerWidth > 768
                            ? (
                                <div className="home-navigation">
                                    <div className="logo-container">
                                        <Link className="logo" to={'/'}>
                                            <div className="ico">

                                            </div>
                                            <div className="text">
                                                Yujaw
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="navigation-wrapper">
                                        <div className="navigation">
                                            {/* <Link to={'/portfolio'}>portfolio</Link> */}
                                            <Link to={'/outreach'}>outreach</Link>
                                            <Link to={'/resume'}>resume</Link>
                                            <Link to={'/hobby'}>hobbies</Link>
                                            <Link to={'/about'}>about</Link>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Navigation />
                            )
                    }
                    <div className="container">
                        {
                            window.innerWidth > 768
                                ? (
                                    <div className="wrapper" style={{ '--columns': columns, '--rows': rows }}>
                                        {
                                            createGrid()
                                        }
                                    </div>
                                ) : null
                        }
                        <div className="content">
                            <div className="left">
                                <div className='text'>
                                    Developer & Student based in Dayton, Ohio.
                                </div>
                            </div>
                            <div className="right">
                                <span>Hello<span>.</span></span>
                                <span>I am</span>
                                <span>Yujaw</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    );
};

export default Home;