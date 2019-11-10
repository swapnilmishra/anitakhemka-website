import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./main.css"
import TopNav from "./topnav"
import { PageTitles } from "./consts"
import { getCurrentNavItem } from "./utils"

require("typeface-raleway")

const menuItems = [
  { url: "/", title: PageTitles.Lakshmi },
  { url: "/", title: PageTitles.Kashmir },
  { url: "/self-portraits", title: PageTitles.SelfPortraits },
  { url: "/", title: PageTitles.BeingAnita },
  { url: "/munna-guru-ramkali", title: PageTitles.Munna },
  { url: "/", title: PageTitles.Women },
  { url: "/", title: PageTitles.MaternalHealth },
  { url: "/", title: PageTitles.About },
]

const Header = ({ siteTitle }) => {
  return (
    <header>
      <h1 className="text-4xl tracking-wider text-center text-gray-700">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <TopNav menuItems={menuItems} selectedItem={getCurrentNavItem()} />
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
