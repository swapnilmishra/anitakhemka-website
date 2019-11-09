import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./main.css"

const defaultSelectedItem = "Being Anita"

const menuItems = [
  { url: "/", title: "Lakshmi" },
  { url: "/", title: "Kashmir" },
  { url: "/", title: "Self Portraits" },
  { url: "/", title: "Being Anita" },
  { url: "/", title: "Munna" },
  { url: "/", title: "Woman Living with HIV/AIDS" },
  { url: "/", title: "Maternal Health" },
  { url: "/", title: "About" },
]

const NavmenuItem = ({ selected = false, title, url }) => {
  const selectedItemCls = selected ? "border-b-4 border-gray-400" : ""
  return (
    <a
      className={`text-sm font-semibold tracking-wide uppercase hover:underline text-gray-700 ${selectedItemCls}`}
      href={url}
    >
      {title}
    </a>
  )
}

const Header = ({ siteTitle }) => {
  return (
    <header>
      <h1 className="text-4xl tracking-wider text-center text-gray-900">
        <Link to="/">{siteTitle}</Link>
      </h1>

      <div className="flex flex-wrap mt-6 text-center justify-between">
        {menuItems.map(menuItem => {
          let selected = menuItem.title === defaultSelectedItem ? true : false
          return (
            <NavmenuItem
              {...menuItem}
              key={menuItem.title}
              selected={selected}
            />
          )
        })}
      </div>
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
