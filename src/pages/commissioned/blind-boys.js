import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem, BuildImageObject } from "../../components/utils"
import { PageTitles, sidenavItemsCommissioned } from "../../components/consts"
import SideNav from "../../components/sidenav"
import ContentCarousel from "../../components/carousel"

const imageObjectBuilder = new BuildImageObject({
  basePath: "blind_boys",
})

const [first, ...rest] = [
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
  "23.JPG",
  "24.JPG",
  "25.JPG",
  "26.JPG",
  "27.JPG",
  "28.JPG",
  "29.JPG",
].map(imgName =>
  imageObjectBuilder.buildImage({
    imgName,
  })
)

const carouselData = [
  first,
  {
    text: `
  <p class="text-content">
  An afternoon spent at the Blind School Academy in West Bengal in the autumn of
  2009 for UNICEF.
  </p>`,
  },
  ...rest,
]

export default () => {
  setNavItem(PageTitles.Commissioned)
  return (
    <Layout>
      <SEO title={PageTitles.Commissioned} />
      <div className="flex mt-12">
        <div className="w-2/12">
          <SideNav sidenavItems={sidenavItemsCommissioned(3)} />
        </div>
        <div className="flex-grow w-10/12">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
