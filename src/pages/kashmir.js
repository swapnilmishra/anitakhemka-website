import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { setNavItem } from "../components/utils"
import { PageTitles } from "../components/consts"

export default () => {
  setNavItem(PageTitles.Kashmir)
  return (
    <Layout>
      <SEO title={PageTitles.Kashmir} />
      <div className="flex mt-12">
        <div className="flex-grow w-full"></div>
      </div>
    </Layout>
  )
}
