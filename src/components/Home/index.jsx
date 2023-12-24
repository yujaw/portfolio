import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';


const About = () => {
  return (
    <Fragment>
      <div className="about">
        <div className="about-wrapper">
          <div className="about-content">
            <div className="left">
              <div className="title">
                Yujaw <span>Manandhar</span>
              </div>

              <div className="content">
                Hello, I'm Yujaw.
                <br />
                <br />
                I am a developer and student based in Kathmandu, Nepal.
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

const Home = () => {
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

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

  const tileAnim = (col, row) => {
    const tileIndex = col + (row - 1) * columns;
    const tile = document.querySelector(`.tile:nth-child(${tileIndex})`);

    if (tile) {
      tile.style.animation = 'hover 1s ease';

      setTimeout(() => {
        tile.style.animation = '';
      }, 800);
    }
  };

  const handleMouseMove = (e) => {
    let { clientX, clientY } = e;

    clientX += window.scrollX
    clientY += window.scrollY

    let col = Math.floor(clientX / 50) + 1;
    let row = Math.floor(clientY / 50) + 1;

    if (col > columns) {
      col = columns;
    }

    if (row > rows) {
      row = rows;
    }

    tileAnim(col, row);
  };

  const handleMouseHover = (e) => {
    let { clientX, clientY } = e;

    const hover = document.querySelector('.hover')

    clientX += window.scrollX
    clientY += window.scrollY

    hover.style.top = `calc(${clientY}px - 100vh)`
    hover.style.left = `${clientX}px`
  }

  return (
    <Fragment>
      <div className="home-wrapper">
        <div className="home-container" onMouseMove={handleMouseMove}>
          <div className="home-navigation">
            <div className="logo-container">
              <div className="logo">
                <div className="ico">

                </div>
                <div className="text">
                  Yujaw
                </div>
              </div>
            </div>
            <div className="navigation-wrapper">
              <div className="navigation">
                <Link to={''}>outreach</Link>
                <Link to={''}>resume</Link>
                <Link to={''}>portfolio</Link>
                <Link to={''}>contact</Link>
              </div>
            </div>
          </div>
          <div className="wrapper" style={{ '--columns': columns, '--rows': rows }}>
            {
              createGrid()
            }
          </div>
          <div className="content">
            <div className="left">
              <div className='text'>
                Developer & Student based in Kathmandu, Nepal.
              </div>
            </div>
            <div className="right">
              <span>Hello<span>.</span></span>
              <span>I am</span>
              <span>Yujaw</span>
            </div>
          </div>
        </div>
        <div className="home-content-wrapper" onMouseMove={handleMouseHover}>
          <div className="hover"></div>
          <About />
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
