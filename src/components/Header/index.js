import React from 'react'
import Link from 'gatsby-link'

import dude from '../../assets/lil-dude.png'

const Header = () => (
  <div
    style={{
      background: 'rgb(25, 25, 25)',
      marginBottom: '1.45rem',
      zIndex: 100,
      position: 'relative'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {/* Lil Dude */}
          <img style={{ width: '2.5rem', margin: 0 }} src={dude} />
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
