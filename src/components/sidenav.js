import React from "react"

const ListItem = ({ title, url, selected = false }) => {
  const selectedClassName = selected ? "font-semibold" : ""
  return (
    <li className="mt-3">
      <a
        className={`text-gray-600 text-xs hover:underline tracking-wider ${selectedClassName}`}
        href={url}
      >
        {title}
      </a>
    </li>
  )
}

const SideNav = ({ sidenavItems, backBtn = false }) => {
  return (
    <ul className="list-none">
      {backBtn && (
        <li>
          <button
            className="text-gray-600 text-xs hover:underline tracking-wider cursor-pointer"
            onClick={() => window.history.back()}
          >
            {"< back"}
          </button>
        </li>
      )}
      {sidenavItems.map(navItem => (
        <ListItem {...navItem} />
      ))}
    </ul>
  )
}

export default SideNav
