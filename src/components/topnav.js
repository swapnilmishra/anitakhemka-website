import React from "react"

const MenuItem = ({ selected = false, title, url }) => {
  const selectedItemCls = selected ? "border-b-4 border-gray-400" : ""
  return (
    <a
      className={`text-xs font-medium tracking-wider uppercase text-gray-600 mt-6 ${selectedItemCls}`}
      href={url}
    >
      {title}
    </a>
  )
}

const TopNav = ({ menuItems, selectedItem }) => {
  return (
    <div className="flex flex-wrap text-center justify-between">
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
