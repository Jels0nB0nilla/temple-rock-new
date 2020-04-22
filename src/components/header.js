import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import headerStyles from "./header.module.scss"

const Header = () => {
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
      <div className={headerStyles.menuWrap}>
        <input type="checkbox" className={headerStyles.togglerMenu}></input>
        <div className={headerStyles.hamburgerMenu}>
          <div></div>
        </div>
        <div className={headerStyles.menuList}>
          <div>
            <div>
              <ul className={headerStyles.navList}>
                <li>
                  <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={headerStyles.navItem}
                    activeClassName={headerStyles.activeNavItem}
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

      <header className={headerStyles.header}>
        <div>
          <Link className={headerStyles.title} to="/">
            <img src="temple-rock.jpg" alt="eagle" />
          </Link>
        </div>
        <h3>North Ward Community Church</h3>
        <h2>A Perfect Place For Imperfect People</h2>
        <div className={headerStyles.buttons}>
          <div className={headerStyles.buttonOne}>i'm new</div>
          <div className={headerStyles.buttonTwo}>what's happening?</div>
        </div>
      </header>
    </div>
  )
}

export default Header
