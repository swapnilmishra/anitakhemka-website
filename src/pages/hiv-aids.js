import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { setNavItem } from "../components/utils"
import { PageTitles } from "../components/consts"
import SideNav from "../components/sidenav"

const sidenavItems = [
  { url: "/commisioned", title: "JCB Author Portraits" },
  { url: "/hiv-aids", title: "HIV/AIDS", selected: true },
  { url: "/maternal-health", title: "Maternal Health" },
]
export default () => {
  setNavItem(PageTitles.Commissioned)
  return (
    <Layout>
      <SEO title={PageTitles.Commissioned} />
      <div className="flex mt-12">
        <div className="w-2/12">
          <SideNav sidenavItems={sidenavItems} />
        </div>
        <div className="flex-grow w-10/12"></div>
      </div>
    </Layout>
  )
}
