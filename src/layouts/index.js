import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

// import Header from '../components/Header'
import Nav from '../components/Nav';
import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="LIL DUDE OFFICIAL HOMEPAGE"
      meta={[
        { name: 'description', content: '#Trapnanana' },
        { name: 'keywords', content: 'lil dude, Trapnanana, luciano, homicide boat' },
      ]}
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
