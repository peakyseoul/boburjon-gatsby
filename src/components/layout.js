import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header>
            <h1> <Link  to="/">{data.site.siteMetadata.title}
            </Link>  
            </h1>
            <nav>
              <Link to = "/">Home</Link>
              <Link   to = "/about">About</Link> 
              <Link   to = "/contact">Contact</Link>
                 
            </nav>
        </header>
        
      
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, All rights reserved.
      </footer>
    </div>
  )
}

export default Layout
