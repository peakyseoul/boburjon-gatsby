import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <Link className="header-link-home" to="/"> Home </Link>
      <Link className="header-link-home" to="/about"> About </Link>
        
      
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, All rights reserved.
      </footer>
    </div>
  )
}

export default Layout
