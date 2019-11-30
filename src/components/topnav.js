import React from "react"
import { Link } from "gatsby"

const MenuItem = ({ selected = false, title, url }) => {
  const selectedItemCls = selected ? "border-b-4 border-gray-400" : ""
  return (
    <Link className={`${selectedItemCls} nav-item-text`} to={url}>
      {title}
    </Link>
  )
}

const TopNav = ({ menuItems, selectedItem }) => {
  return (
    <div className="flex flex-wrap text-center justify-between text-xs tracking-wider text-gray-600 mt-6">
      {menuItems.map(menuItem => {
        let selected = menuItem.title === selectedItem
        return (
          <MenuItem {...menuItem} key={menuItem.title} selected={selected} />
        )
      })}
    </div>
  )
}

export default TopNav
