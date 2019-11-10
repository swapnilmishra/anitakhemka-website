import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import {
  BuildImageObject,
  setNavItem,
  getImagesUsingCount,
} from "../components/utils"
import { PageTitles } from "../components/consts"

const imageObjectBuilder = new BuildImageObject({
  basePath: "Munna_Guru_Ramkali",
})
const carouselData = getImagesUsingCount({
  count: 19,
  imageBuilder: imageObjectBuilder,
})
const SelftPortraitPage = () => {
  setNavItem(PageTitles.Munna)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex mt-12">
        <div className="flex-grow w-3/4">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}

export default SelftPortraitPage
