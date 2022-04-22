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
                <ul >
                    <li>
                    <Link to = "/">Home</Link>
                    </li>
                    <li>
                        <Link   to = "/about">About</Link>
                    </li>
                    <li>
                        <Link   to = "/contact">Contact</Link>
                    </li>
                </ul>
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
