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

const imageObjectBuilder = new BuildImageObject({ basePath: "lakshmi_2007_12" })
const carouselData = buildSequencedImages({
  from: 10,
  till: 16,
  imageBuilder: imageObjectBuilder,
})
const sidenavItems = [
  { url: "/lakshmi-2003", title: "Lakshmi 2003-06" },
  { url: "/lakshmi-2007", title: "Lakshmi 2007-12", selected: true },
  { url: "/lakshmi-2013", title: "Lakshmi 2013-19" },
]
const SelftPortraitPage = () => {
  setNavItem(PageTitles.Lakshmi)
  return (
    <Layout>
      <SEO title="Lakshmi" />
      <div className="flex mt-12">
        <div className="w-1/5">
          <SideNav sidenavItems={sidenavItems} />
        </div>
        <div className="flex-grow w-4/5">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}

export default SelftPortraitPage
