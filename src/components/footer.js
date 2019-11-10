import React from "react"

const Footer = () => (
  <footer className="text-xs text-gray-900">
    © {new Date().getFullYear()}, {` `} Anita Khemka
    <a className="ml-6" href="mailto:contact@anitakhemka.com">
      <span className="text-sm">✉</span> contact@anitakhemka.com
    </a>
  </footer>
)

export default Footer
