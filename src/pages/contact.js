import React, { Component } from 'react';

import './contact.css';

import dude from '../assets/dude1.png';

export default class Contact extends Component {
  componentDidMount() {
    document.getElementsByClassName('navBar')[0].classList.add('navBar--contact');
  }
  componentWillUnmount() {
    document.getElementsByClassName('navBar')[0].classList.remove('navBar--contact');
  }
  render() {
    return (
      <div className="contact">
        <div className="contact__wrap">
          <div>
            <h2>Contact</h2>
            <img src={dude} />
          </div>
          <div>
            <ul>
              <li>404 593 3636</li>
              <li>Booking@monypowrspt.com</li>
              <li><a href="https://www.monypowrspt.shop/">monypowrspt shop</a></li>
              <li className="contact__social">
                <a href=""><i className="fab fa-facebook-square"></i></a>
                <a href="https://www.instagram.com/lildudeluciano1/"><i className="fab fa-instagram"></i></a>
                <a href=""><i className="fab fa-twitter-square"></i></a>
                <a href="https://soundcloud.com/lildudeluciano"><i className="fab fa-soundcloud"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
