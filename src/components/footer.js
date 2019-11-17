import React from "react"

const Footer = () => (
  <footer className="text-xs text-gray-900">
    <div className="flex">
      <span>
        © {new Date().getFullYear()}, {` `} Anita Khemka
      </span>
      <a className="ml-6" href="mailto:contact@anitakhemka.com">
        ✉ contact@anitakhemka.com
      </a>
      <span>
        <a
          className="ml-6"
          href="http://www.photoink.net/artist/index/artist_id/109"
        >
          Photoink gallery
        </a>
      </span>
    </div>
  </footer>
)

export default Footer
