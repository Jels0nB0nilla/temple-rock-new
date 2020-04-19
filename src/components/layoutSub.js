import React from "react"
import HeaderSub from "./headerSub"
import Footer from "./footer"
import "../styles/index.scss"

import layoutSubStyles from "./layoutSub.module.scss"

const LayoutSub = props => {
  return (
    <div>
      <HeaderSub />
      <div className={layoutSubStyles.container}>
        {props.children}
      <Footer />
      </div>
    </div>
  )
}

export default LayoutSub