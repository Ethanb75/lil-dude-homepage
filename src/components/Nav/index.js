import React, { Component } from 'react'
import Link from 'gatsby-link'

import dude from '../../assets/lil-dude.png'
import ShapeOverlays from '../../assets/shape-overlay';
import '../../assets/Nav.css'

const buttonStyle = {
  width: '100%',
  height: '.25rem',
  backgroundColor: 'white',
  position: 'absolute',
  transformOrigin: '0% 0%',
  transition: 'all .3s ease-out'
}



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

    this.moveUp(navMenu).then(() => {
      overlay.toggle();
      this.setState({ navShowing: !navShowing });
    });

    /* Set video to pause while menu up */
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }
  }
  componentDidMount() {
    const overlay = new ShapeOverlays(document.querySelector('.shape-overlays'));
    if (!this.state.menuOverlay)
      this.setState({ menuOverlay: overlay });
  }
  render() {
    const { navShowing, menuOverlay } = this.state;
    return (
      <nav>
        <div className="navMenu">
          <div style={navShowing ? { opacity: '1', transform: 'translateY(0%)' } : { opacity: '0', transform: 'translateY(100%)' }}><Link to="/">HOME</Link></div>
          <div style={navShowing ? { opacity: '1', transform: 'translateY(0%)' } : { opacity: '0', transform: 'translateY(100%)' }}><Link to="/">LISTEN</Link></div>
          <div style={navShowing ? { opacity: '1', transform: 'translateY(0%)' } : { opacity: '0', transform: 'translateY(100%)' }}><Link to="/">MERCH</Link></div>
          <div style={navShowing ? { opacity: '1', transform: 'translateY(0%)' } : { opacity: '0', transform: 'translateY(100%)' }}><Link to="/">CONTACT</Link></div>
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
              <img style={{ width: '2.5rem', margin: 0 }} src={dude} />
            </Link>
          </h1>
          <span className="navButton" onClick={() => this.toggleNav(navShowing, menuOverlay)}>
            <span style={navShowing ? { ...buttonStyle, transform: 'translate(-3px, 1.45rem) rotate(-45deg)', backgroundColor: 'white' } : buttonStyle}></span>
            <span style={navShowing ? { ...buttonStyle, opacity: '0' } : { ...buttonStyle, top: '.6rem' }}></span>
            <span style={navShowing ? { ...buttonStyle, top: '1.2rem', transform: 'translate(2px, -1.4rem) rotate(45deg)', backgroundColor: 'white' } : { ...buttonStyle, top: '1.2rem' }}></span>
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