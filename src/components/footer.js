import React from "react"

const Footer = () => (
  <footer className="text-xs text-gray-800">
    <div className="flex justify-between">
      <div>
        <span>
          © {new Date().getFullYear()}, {` `} Anita Khemka
        </span>
        <a className="ml-6" href="mailto:contact@anitakhemka.com">
          <span className="text-sm">✉ </span>
          <span>contact@anitakhemka.com</span>
        </a>
      </div>
      <span>
        <a
          className="ml-6"
          href="http://www.photoink.net/artist/index/artist_id/109"
        >
          Gallery representation PHOTOINK
        </a>
      </span>
    </div>
  </footer>
)

export default Footer
