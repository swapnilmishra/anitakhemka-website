import React from "react"

const MenuItem = ({ selected = false, title, url }) => {
  const selectedItemCls = selected ? "topnav-selected-item" : ""
  return (
    <a className={`${selectedItemCls} nav-item-text`} href={url}>
      {title}
    </a>
  )
}

const TopNav = ({ menuItems, selectedItem }) => {
  return (
    <div className="topnav">
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
