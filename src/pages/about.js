import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const About = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
     
        <header>
          <h1>About me</h1>
          <p>
            My name is Boburjon Abdukhamidov.
            And I come from Uzbekistan. 

          </p>
        </header>
        
        <hr />
        <footer>
          <Bio />
        </footer>
     
    </Layout>
  )
}

export default About