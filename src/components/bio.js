/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.png"
        width={50}
        height={100}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Hello. My name is Boburjon Abdukhamidov, MS in Technological Systems Management Major.
          I am passionate about technology and its impact on society.
          Please feel free to reach out to me at boburjon0700@gmail.com or 
          
          
          <a href={'https://www.linkedin.com/in/boburjon-abdukhamidov/'}>
            Connect with me on LinkedIn
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
