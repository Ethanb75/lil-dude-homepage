import React, { Component } from 'react'
import Link from 'gatsby-link'

import dude from '../../assets/lil-dude.png'
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
    navShowing: false
  }
  scrollToArea(ev, element) {
    ev.preventDefault();
    element.scrollIntoView({ behavior: 'smooth' });
    document.getElementsByTagName('html')[0].style.overflow = '';
    this.setState({ navShowing: false });
  }
  toggleNav(navShowing) {
    let vid = document.getElementById('video');
    this.setState({ navShowing: !navShowing });

    /* Set video to pause while menu up */
    if (vid.paused) {
      vid.play();
    } else {
      vid.pause();
    }

    if (document.getElementsByTagName('html')[0].style.overflow)
      document.getElementsByTagName('html')[0].style.overflow = '';
    else
      document.getElementsByTagName('html')[0].style.overflow = 'hidden';
  }
  componentDidMount() {
    // let scrolling = document.getElementsByTagName('video')[0].getBoundingClientRect();
    // let navClassList = document.getElementsByTagName('nav')[0].classList;
    // let throttle;

    // document.addEventListener('scroll', function (ev) {
    //   if (throttle) return;
    //   // code below
    //   if (scrollY >= scrolling.top) {
    //     navClassList.add('navDown');
    //     navClassList.remove('navUp');
    //   } else {
    //     navClassList.remove('navDown');
    //     navClassList.add('navUp');
    //   }
    //   // rest of throttle
    //   throttle = setTimeout(function () {
    //     throttle = undefined;
    //   }, 300);
    // });
  }
  render() {
    const { navShowing } = this.state;
    return (
      <nav style={navShowing ? { zIndex: '1000' } : {}}>
        <div className="navMenu" style={navShowing ? { opacity: '1', transform: 'translateX(0%)' } : { opacity: '0', transform: 'translateX(100%)' }}>
          <div><Link to="/">HOME</Link></div>
          <div><Link to="/">LISTEN</Link></div>
          <div><Link to="/">MERCH</Link></div>
          <div><Link to="/">CONTACT</Link></div>
        </div>
        <div>
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
          <span className="navButton" onClick={() => this.toggleNav(navShowing)}>
            <span style={navShowing ? { ...buttonStyle, transform: 'translate(-3px, 1.45rem) rotate(-45deg)', backgroundColor: 'white' } : buttonStyle}></span>
            <span style={navShowing ? { ...buttonStyle, opacity: '0' } : { ...buttonStyle, top: '.6rem' }}></span>
            <span style={navShowing ? { ...buttonStyle, top: '1.2rem', transform: 'translate(2px, -1.4rem) rotate(45deg)', backgroundColor: 'white' } : { ...buttonStyle, top: '1.2rem' }}></span>
          </span>
        </div>
      </nav>
    )
  }
}