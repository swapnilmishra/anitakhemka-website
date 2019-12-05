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
        <div className="w-10/12 h-full text-sm text-center mt-10">
          <div>
            <a href="mailto:contact@anitakhemka.com">contact@anitakhemka.com</a>
          </div>
          <div className="mt-4">
            <p>Gallery Representation PHOTOINK</p>
            <a href="http://www.photoink.net">http://www.photoink.net</a>
          </div>
          <div className="mt-4">
            <a href="mailto:info@photoink.net">info@photoink.net</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
