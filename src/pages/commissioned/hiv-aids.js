import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem, BuildImageObject } from "../../components/utils"
import { PageTitles, sidenavItemsCommissioned } from "../../components/consts"
import SideNav from "../../components/sidenav"
import ContentCarousel from "../../components/carousel"

const imageObjectBuilder = new BuildImageObject({
  basePath: "hiv_aids",
})

const carouselData = [
  "AKHE_HIV_MAN_001_copy copy.jpg",
  "AKHE_HIV_MAN_004_Copy copy.jpg",
  "AKHE_HIV_MAN_007 copy.jpg",
  "AKHE_HIV_MAN_008 copy.jpg",
  "AKHE_HIV_MAN_012 copy.jpg",
  "AKHE_HIV_MAN_017 copy.jpg",
  "AKHE_HIV_MAN_020 copy.jpg",
  "AKHE_HIV_MAN_028 copy.jpg",
  "AKHE_HIV_MAN_031 copy.jpg",
  "AKHE_HIV_MAN_033 copy.jpg",
  "AKHE_HIV_MAN_035 copy.jpg",
  "AKHE_HIV_MAN_041 copy.jpg",
  "AKHE_HIV_MAN_042 copy.jpg",
  "AKHE_HIV_MAN_044 copy.jpg",
  "AKHE_HIV_MAN_046 copy.jpg",
  "AKHE_HIV_MAN_047 copy.jpg",
  "AKHE_HIV_MAN_048 copy.jpg",
  "AKHE_HIV_MAN_054 copy.jpg",
  "AKHE_HIV_MAN_055 copy.jpg",
  "AKHE_HIV_MAN_057 copy.jpg",
  "AKHE_HIV_MAN_060 copy.jpg",
  "AKHE_HIV_MAN_061 copy.jpg",
  "AKHE_HIV_MAN_063 copy.jpg",
  "AKHE_HIV_MAN_064 copy.jpg",
  "AKHE_HIV_MAN_069 copy.jpg",
  "AKHE_HIV_MAN_070 copy.jpg",
  "AKHE_HIV_MAN_072 copy.jpg",
  "AKHE_HIV_MAN_075 copy.jpg",
  "AKHE_HIV_MAN_078 copy.jpg",
  "HIV -  REL 17.jpg",
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
          <SideNav sidenavItems={sidenavItemsCommissioned(2)} />
        </div>
        <div className="flex-grow w-10/12">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
