import React, { Component } from 'react';
import Link from 'gatsby-link';

import './index.css';
import '../assets/fontawesome-all.min.js';
import homicide from '../assets/homicide-boat2.mp4';
import dude from '../assets/lil-dude.png';
import poster from '../assets/poster.png';
import bullet from '../assets/bullet1.svg';



export default class IndexPage extends Component {
  componentDidMount() {
    // const vid = document.getElementById('video')
    // vid.addEventListener('load', () => {
    //   console.log('listener');
    //   return vid.play();
    // })
  }
  render() {
    return (
      <div>
        <div className="background">
          <video
            id="video"
            poster={poster}
            muted
            loop
            preload="auto"
            autoPlay
            playsInline
          >
            <source src={homicide} type="video/mp4" />
          </video>
        </div>
        <div className="content">
          <div>
            <h1>
              <span>Lil </span><span>Dude</span>
            </h1>
            <div className="links">
              <span>
                <img src={bullet} />
                <Link to="/music">Music</Link>
              </span>
              <span>
                <img src={bullet} />
                <Link to="/">Merch</Link>
              </span>
              <span>
                <img src={bullet} />
                <Link to="/contact">Contact</Link>
              </span>
              <span>
                <img src={bullet} />
                <a href="https://www.youtube.com/watch?v=Y4C74LL_PJQ" target="__blank">Video</a>
              </span>
            </div>
          </div>
          <span>
            <a href="https://www.instagram.com/explore/tags/trapnanana/" target="__blank">#Trapnanana</a>
          </span>
          <div className="videoInfo">
            <a href="https://www.youtube.com/watch?v=Y4C74LL_PJQ" target="__blank">Lil Dude & Goonew ft Lil Yachty - Homicide Boat</a>
          </div>
          <div className="social">
            <span>
              <i className="fab fa-instagram"></i> 41.4K
            </span>
            <span>
              <i className="fab fa-snapchat-square"></i> 10K
            </span>
            <span>
              <i className="fab fa-soundcloud"></i> 54 tracks
            </span>
          </div>
        </div>
      </div>
    )
  }
}
