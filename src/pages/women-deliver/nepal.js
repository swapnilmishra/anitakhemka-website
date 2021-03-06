import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem, BuildImageObject } from "../../components/utils"
import { PageTitles, sidenavItemsWomenDeliver } from "../../components/consts"
import SideNav from "../../components/sidenav"
import ContentCarousel from "../../components/carousel"
import { Box, VerticalBox } from "../../components/box"

const imageObjectBuilder = new BuildImageObject({
  basePath: "women_deliver/nepal",
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
  "20.JPG",
  "21.JPG",
  "22.JPG",
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
      <div className="flex">
        <Box className="w-2/12">
          <SideNav
            sidenavItems={sidenavItemsWomenDeliver(2)}
            backBtn
            backBtnUrl="/commissioned/jcb"
          />
        </Box>
        <VerticalBox className="flex-grow w-10/12">
          <ContentCarousel carouselData={carouselData} />
        </VerticalBox>
      </div>
    </Layout>
  )
}
