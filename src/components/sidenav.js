import React from "react"
import { Link } from "gatsby"

const ListItem = ({ title, url, selected = false }) => {
  const selectedClassName = selected
    ? "font-semibold border-b-2 border-gray-400"
    : ""
  return (
    <li className="side-nav-item">
      <Link
        className={`text-gray-600 text-xs tracking-wider ${selectedClassName}`}
        to={url}
      >
        {title}
      </Link>
    </li>
  )
}

const SideNav = ({ sidenavItems, backBtn = false, backBtnUrl = "/" }) => {
  return (
    <ul className="list-none">
      {backBtn && (
        <li>
          <Link
            className="text-gray-600 text-xs hover:underline tracking-wider cursor-pointer"
            to={backBtnUrl}
          >
            {"< back"}
          </Link>
        </li>
      )}
      {sidenavItems.map((navItem, idx) => (
        <ListItem {...navItem} key={idx} />
      ))}
    </ul>
  )
}

export default SideNav
