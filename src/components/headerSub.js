import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerSubStyles from "./headerSub.module.scss"

const HeaderSub = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <div className={headerSubStyles.menuWrap}>
        <input type="checkbox" className={headerSubStyles.togglerMenu}></input>
        <div className={headerSubStyles.hamburgerMenu}>
          <div></div>
        </div>
        <div className={headerSubStyles.menuList}>
          <div>
            <div>
              <ul className={headerSubStyles.navList}>
                <li>
                  <Link
                    className={headerSubStyles.navItem}
                    activeClassName={headerSubStyles.activeNavItem}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={headerSubStyles.navItem}
                    activeClassName={headerSubStyles.activeNavItem}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={headerSubStyles.navItem}
                    activeClassName={headerSubStyles.activeNavItem}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className={headerSubStyles.headerSub}>
        <h1>
          <Link className={headerSubStyles.title} to="/">
            {data.site.siteMetadata.title}
          </Link>
        </h1>
        
      </header>
    </div>
  )
}

export default HeaderSub
