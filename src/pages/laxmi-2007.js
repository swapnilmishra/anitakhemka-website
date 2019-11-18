import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import {
  BuildImageObject,
  setNavItem,
  buildSequencedImages,
} from "../components/utils"
import { PageTitles } from "../components/consts"
import SideNav from "../components/sidenav"

const imageObjectBuilder = new BuildImageObject({ basePath: "laxmi_2007_12" })
const carouselData = buildSequencedImages({
  from: 10,
  till: 16,
  imageBuilder: imageObjectBuilder,
})
const sidenavItems = [
  { url: "/laxmi-2003", title: "2003-06" },
  { url: "/laxmi-2007", title: "2007-12", selected: true },
  { url: "/laxmi-2013", title: "2013-19" },
]
export default () => {
  setNavItem(PageTitles.Laxmi)
  return (
    <Layout>
      <SEO title={PageTitles.Laxmi} />
      <div className="flex mt-12">
        <div className="w-1/12">
          <SideNav sidenavItems={sidenavItems} />
        </div>
        <div className="flex-grow w-11/12">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
