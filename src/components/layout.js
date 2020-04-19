import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.scss"

import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div>
      <Header />
      <div className={layoutStyles.container}>
        {props.children}
      <Footer />
      </div>
    </div>
  )
}

export default Layout