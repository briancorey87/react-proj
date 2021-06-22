import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div>
      <div className="Hero">
          <div className="HeroGroup">
            <h1>Learn to Design & Code React Apps</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/page-2/">Go to page 2</Link>
          </div>
      </div>
    </div>
  </div>

)

export default IndexPage
