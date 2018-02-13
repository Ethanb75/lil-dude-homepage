import React, { Component } from 'react'
import Link from 'gatsby-link'

import './index.css'
import '../assets/fontawesome-all.min.js'
import homicide from '../assets/homicide-boat2.mp4'
import dude from '../assets/lil-dude.png'



export default class IndexPage extends Component {
  render() {
    return (
      <div>
        <div className="background">
          <video
            id="video"
            muted
            loop
            preload="auto"
            // autoPlay
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
                <Link to="/music">Music</Link>
              </span>
              <span>
                <Link to="/music">Merch</Link>
              </span>
              <span>
                <Link to="/music">Contact</Link>
              </span>
              <span>
                video
              </span>
            </div>
          </div>
          <span>
            <a href="https://www.instagram.com/explore/tags/trapnanana/">#Trapnanana</a>
          </span>
          <div className="videoInfo">
            Lil Dude & Goonew ft Lil Yachty - Homicide Boat
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
