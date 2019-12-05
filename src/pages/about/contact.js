import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem } from "../../components/utils"
import { PageTitles, sidenavItemsAbout } from "../../components/consts"
import SideNav from "../../components/sidenav"

const IndexPage = () => {
  setNavItem(PageTitles.About)

  return (
    <Layout>
      <SEO title={PageTitles.About} />
      <div className="flex mt-12">
        <div className="w-2/12">
          <SideNav sidenavItems={sidenavItemsAbout(2)} />
        </div>
        <div className="w-10/12 h-full text-sm mt-1">
          <div>
            <p className="font-semibold">Anita Khemka</p>
            <a href="mailto:contact@anitakhemka.com">
              <span className="text-sm">✉ </span>
              <span>contact@anitakhemka.com</span>
            </a>
          </div>
          <div className="mt-4">
            <p className="font-semibold">Gallery Representation PHOTOINK</p>
            <p>
              <a href="http://www.photoink.net">http://www.photoink.net</a>
            </p>
            <a href="mailto:info@photoink.net">
              <span className="text-sm">✉ </span>
              <span>info@photoink.net</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
