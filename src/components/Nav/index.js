import React, { Component } from 'react';
import Link from 'gatsby-link';

import dude from '../../assets/lil-dude.png';
import ShapeOverlays from '../../assets/shapes3';
import '../../assets/Nav.css';

const buttonStyle = {
  width: '100%',
  height: '.25rem',
  backgroundColor: 'white',
  position: 'absolute',
  transformOrigin: '0% 0%',
  transition: 'all .3s ease-out'
};



export default class Nav extends Component {
  state = {
    navShowing: false,
    menuOverlay: undefined
  }
  moveUp(elem) {
    return new Promise(resolve => {
      if (elem.style.zIndex === '') {
        elem.style.zIndex = '100';
        resolve(true);
      } else {
        setTimeout(() => {
          elem.style.zIndex = ''
        }, 400);
        resolve(true);
      }
    })
  }
  toggleNav(navShowing, overlay) {
    let vid = document.getElementById('video');
    let navMenu = document.querySelector('.navMenu');
    if (!overlay)
      return false;
    if (overlay.isAnimating)
      return false;

    /* Set video to pause while menu up */
    if (vid) {
      if (vid.paused && navShowing) {
        vid.play();
      } else {
        vid.pause();
      }
    }
    // issue might be setting the state after click handler, resulting in multiple renderings?
    this.moveUp(navMenu).then(() => {
      overlay.toggle();
      this.setState({ navShowing: !navShowing });
    });
  }
  componentDidMount() {
    const svg = document.querySelector('.shape-overlays');
    const overlay = new ShapeOverlays(svg);
    if (!this.state.menuOverlay)
      this.setState({ menuOverlay: overlay });
  }
  render() {
    const { navShowing, menuOverlay } = this.state;
    return (
      <nav>
        <div className="navMenu">
          <div style={navShowing ? { opacity: '1', transform: 'translateY(0%)' } : { opacity: '0', transform: 'translateY(100%)' }}><Link activeClassName="active" onClick={() => this.toggleNav(navShowing, menuOverlay)} exact to="/">HOME</Link></div>
          <div style={navShowing ? { opacity: '1', transform: 'translateY(0%)' } : { opacity: '0', transform: 'translateY(100%)' }}><Link activeClassName="active" onClick={() => this.toggleNav(navShowing, menuOverlay)} to="/music">LISTEN</Link></div>
          <div style={navShowing ? { opacity: '1', transform: 'translateY(0%)' } : { opacity: '0', transform: 'translateY(100%)' }}><Link activeClassName="active" onClick={() => this.toggleNav(navShowing, menuOverlay)} to="/store">MERCH</Link></div>
          <div style={navShowing ? { opacity: '1', transform: 'translateY(0%)' } : { opacity: '0', transform: 'translateY(100%)' }}><Link activeClassName="active" onClick={() => this.toggleNav(navShowing, menuOverlay)} to="/contact">CONTACT</Link></div>
        </div>
        <div className="navBar">
          <h1 className="logo">
            <Link
              to="/"
              style={{
                color: 'white',
                textDecoration: 'none'
              }}
            >
              <img src={dude} />
            </Link>
          </h1>
          <span className="navButton" onClick={() => this.toggleNav(navShowing, menuOverlay)}>
            <span style={navShowing ? { transform: 'translate(-3px, 1.45rem) rotate(-45deg)', backgroundColor: 'white' } : {}}></span>
            <span style={navShowing ? { opacity: '0' } : { top: '.6rem' }}></span>
            <span style={navShowing ? { top: '1.2rem', transform: 'translate(2px, -1.4rem) rotate(45deg)', backgroundColor: 'white' } : { top: '1.2rem' }}></span>
          </span>
        </div>

        {/* declare overlay onLoad and add click listeners */}
        <svg
          className="shape-overlays"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path className="shape-overlays__path"></path>
          <path className="shape-overlays__path"></path>
          <path className="shape-overlays__path"></path>
        </svg>
      </nav>
    )
  }
}