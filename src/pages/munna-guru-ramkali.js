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

const imageObjectBuilder = new BuildImageObject({
  basePath: "Munna_Guru_Ramkali",
})
const carouselData = buildSequencedImages({
  till: 19,
  imageBuilder: imageObjectBuilder,
})

export default () => {
  setNavItem(PageTitles.Munna)
  return (
    <Layout>
      <SEO title="Munnu Guru and Ramkali" />
      <div className="flex mt-12">
        <div className="flex-grow w-full">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
