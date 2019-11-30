import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import { BuildImageObject, setNavItem } from "../components/utils"
import { PageTitles } from "../components/consts"

const imageObjectBuilder = new BuildImageObject({
  basePath: "munna_guru_ramkali",
})
const carouselData = [
  "1 copy.jpg",
  "2 copy.jpg",
  "3 copy.jpg",
  "4 copy.jpg",
  "5 copy.jpg",
  "6 copy.jpg",
  "7 copy.jpg",
  "8 copy.jpg",
  "9 copy.jpg",
  "10 copy.jpg",
  "11 copy.jpg",
  "12 copy.jpg",
  "13 copy.jpg",
  "14 copy.jpg",
  "15 copy.jpg",
  "16 copy.jpg",
  "18 copy.jpg",
  "19 copy.jpg",
].map(imgName =>
  imageObjectBuilder.buildImage({
    imgName,
  })
)

export default () => {
  setNavItem(PageTitles.Munna)
  return (
    <Layout>
      <SEO title={PageTitles.Munna} />
      <div className="flex mt-12">
        <div className="flex-grow w-full">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
