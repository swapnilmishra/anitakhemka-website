import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./main.css"
import TopNav from "./topnav"
import { PageTitles } from "./consts"
import { getCurrentNavItem } from "./utils"

require("typeface-raleway")

const menuItems = [
  { url: "/", title: PageTitles.Kashmir },
  { url: "/lakshmi-2003", title: PageTitles.Laxmi },
  { url: "/self-portraits", title: PageTitles.SelfPortraits },
  { url: "/", title: PageTitles.BeingAnita },
  { url: "/munna-guru-ramkali", title: PageTitles.Munna },
  { url: "/", title: PageTitles.HivAids },
  { url: "/commissioned", title: PageTitles.Commissioned },
  { url: "/about", title: PageTitles.About },
]

const Header = ({ siteTitle, headerItems }) => {
  return (
    <header>
      <h1 className="text-2xl font-thin mt-2 tracking-wide text-center text-gray-700 uppercase">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <TopNav
        menuItems={headerItems || menuItems}
        selectedItem={getCurrentNavItem()}
      />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
