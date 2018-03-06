import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import Header from '../components/Header'
import Nav from '../components/Nav';
import './index.css'


//import icons
import mstile144 from './icons/mstile-144x144.png';
import mstile70 from './icons/mstile-70x70.png';
import mstile150 from './icons/mstile-150x150.png';
import mstile310wide from './icons/mstile-310x150.png';
import mstile310 from './icons/mstile-310x310.png';

import apple57 from './icons/apple-touch-icon-57x57.png';
import apple114 from './icons/apple-touch-icon-114x114.png';
import apple72 from './icons/apple-touch-icon-72x72.png';
import apple144 from './icons/apple-touch-icon-144x144.png';
import apple60 from './icons/apple-touch-icon-60x60.png';
import apple120 from './icons/apple-touch-icon-120x120.png';
import apple76 from './icons/apple-touch-icon-76x76.png';
import apple152 from './icons/apple-touch-icon-152x152.png';

import favicon196 from './icons/favicon-196x196.png';
import favicon96 from './icons/favicon-96x96.png';
import favicon32 from './icons/favicon-32x32.png';
import favicon16 from './icons/favicon-16x16.png';
import favicon128 from './icons/favicon-128.png';


const meta = [
  { name: 'description', content: '#Trapnanana' },
  { name: 'keywords', content: 'lil dude, Trapnanana, luciano, homicide boat' },
  { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
  { name: 'application-name', content: 'Lil Dude Homepage' },
  { name: 'msapplication-TileColor', content: '#191919' },
  { name: 'msapplication-TileImage', content: mstile144 },
  { name: 'msapplication-square70x70logo', content: mstile70 },
  { name: 'msapplication-square150x150logo', content: mstile150 },
  { name: 'msapplication-wide310x150logo', content: mstile310wide },
  { name: 'msapplication-square310x310logo', content: mstile310 }
];

const links = [
  { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: apple57 },
  { rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: apple114 },
  { rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: apple72 },
  { rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: apple144 },
  { rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: apple60 },
  { rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: apple120 },
  { rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: apple76 },
  { rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: apple152 },
  { rel: 'icon', type: 'image/png', href: favicon196, sizes: '196x196' },
  { rel: 'icon', type: 'image/png', href: favicon96, sizes: '96x96' },
  { rel: 'icon', type: 'image/png', href: favicon32, sizes: '32x32' },
  { rel: 'icon', type: 'image/png', href: favicon16, sizes: '16x16' },
  { rel: 'icon', type: 'image/png', href: favicon128, sizes: '128x128' }
];

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="LIL DUDE OFFICIAL HOMEPAGE"
      meta={meta}
      link={links}
    />
    <Nav />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
