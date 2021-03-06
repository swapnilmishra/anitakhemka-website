import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./main.css"
import TopNav from "./topnav"
import { PageTitles } from "./consts"
import { getCurrentNavItem } from "./utils"

require("typeface-raleway")

const menuItems = [
  // { url: "/kashmir", title: PageTitles.Kashmir },
  { url: "/laxmi-2003", title: PageTitles.Laxmi },
  { url: "/self-portraits", title: PageTitles.SelfPortraits },
  { url: "/being-anita", title: PageTitles.BeingAnita },
  { url: "/munna-guru-ramkali", title: PageTitles.Munna },
  { url: "/commissioned/jcb", title: PageTitles.Commissioned },
  { url: "/about/bio", title: PageTitles.About },
]

const Header = ({ siteTitle }) => {
  return (
    <header>
      <h1 className="text-2xl font-thin mt-2 tracking-wide text-center text-gray-700 uppercase color-custom-blue">
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
