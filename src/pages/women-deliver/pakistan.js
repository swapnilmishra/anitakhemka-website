import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem, BuildImageObject } from "../../components/utils"
import { PageTitles, sidenavItemsWomenDeliver } from "../../components/consts"
import SideNav from "../../components/sidenav"
import ContentCarousel from "../../components/carousel"

const imageObjectBuilder = new BuildImageObject({
  basePath: "women_deliver/pakistan",
})

const carouselData = [
  "1.JPG",
  "2.JPG",
  "3.JPG",
  "4.JPG",
  "5.JPG",
  "6.JPG",
  "7.JPG",
  "8.JPG",
  "9.JPG",
  "10.JPG",
  "11.JPG",
  "12.JPG",
  "13.JPG",
  "14.JPG",
  "15.JPG",
  "16.JPG",
  "17.JPG",
  "18.JPG",
  "19.JPG",
].map(imgName =>
  imageObjectBuilder.buildImage({
    imgName,
  })
)

export default () => {
  setNavItem(PageTitles.Commissioned)
  return (
    <Layout>
      <SEO title={PageTitles.Commissioned} />
      <div className="flex mt-12">
        <div className="w-2/12">
          <SideNav sidenavItems={sidenavItemsWomenDeliver(3)} backBtn />
        </div>
        <div className="flex-grow w-10/12">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
