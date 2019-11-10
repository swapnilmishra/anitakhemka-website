import React from "react"

const ListItem = ({ title, url }) => {
  return (
    <li className="mt-3">
      <a
        className="text-gray-600 text-xs hover:underline tracking-wider"
        href={url}
      >
        {title}
      </a>
    </li>
  )
}

const SideNav = ({ sidenavItems }) => {
  return (
    <ul className="list-none">
      {sidenavItems.map(navItem => (
        <ListItem {...navItem} />
      ))}
    </ul>
  )
}

export default SideNav
