import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem, BuildImageObject } from "../../components/utils"
import { PageTitles, sidenavItemsCommissioned } from "../../components/consts"
import SideNav from "../../components/sidenav"
import ContentCarousel from "../../components/carousel"

const imageObjectBuilder = new BuildImageObject({
  basePath: "3. JCB Author Portraits",
})

const carouselData = [
  imageObjectBuilder.buildImage({
    imgName: "1. Murugan.jpg",
    caption: "Perumal Murugan",
  }),
  imageObjectBuilder.buildImage({
    imgName: "2. Madhuri.jpg",
    caption: "Madhuri Vijay",
  }),
  imageObjectBuilder.buildImage({
    imgName: "3. Roshan.jpg",
    caption: "Roshan Ali",
  }),
  imageObjectBuilder.buildImage({
    imgName: "4. Manoranjan.jpg",
    caption: "Manoranjan Byapari",
  }),
  imageObjectBuilder.buildImage({
    imgName: "5. Shekhar.jpg",
    caption: "Zero Bridge",
  }),
]

export default () => {
  setNavItem(PageTitles.Commissioned)
  return (
    <Layout>
      <SEO title={PageTitles.Commissioned} />
      <div className="flex mt-12">
        <div className="w-2/12">
          <SideNav sidenavItems={sidenavItemsCommissioned(0)} />
        </div>
        <div className="flex-grow w-10/12">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
