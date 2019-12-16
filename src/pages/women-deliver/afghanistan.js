import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem, BuildImageObject } from "../../components/utils"
import { PageTitles, sidenavItemsWomenDeliver } from "../../components/consts"
import SideNav from "../../components/sidenav"
import ContentCarousel from "../../components/carousel"
import { Box, VerticalBox } from "../../components/box"

const imageObjectBuilder = new BuildImageObject({
  basePath: "women_deliver/afghanistan",
})

const [first, ...rest] = [
  "1.JPG",
  "2.JPG",
  "2a.JPG",
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
].map(imgName =>
  imageObjectBuilder.buildImage({
    imgName,
  })
)

const carouselData = [
  first,
  {
    text: `
    <p class="text-content max-w-3xl">
    Maternal health is one of the key issues in developing and underdeveloped countries
    around the world. Countries from the Indian sub-continent feature very poorly in
    global ratings on maternal health. In 2007, I was commissioned by UNICEF to
    document their programs and the challenges faced by women in this region. I
    travelled to Badakshan in Afghanistan, Phidim in Nepal, Karachi in Pakistan and
    across India. This work is a result of my travels over 3 months across these areas.
    The scope of this program allowed me to photograph both, the interventions by the
    local government agencies partnered with UNICEF as well as the challenges faced
    due to the thin spread of the health facilities across difficult terrain and the socio-
    cultural factors in each region.
    </p>
  `,
  },
  ...rest,
]

export default () => {
  setNavItem(PageTitles.Commissioned)
  return (
    <Layout>
      <SEO title={PageTitles.Commissioned} />
      <div className="flex">
        <Box className="w-2/12">
          <SideNav
            sidenavItems={sidenavItemsWomenDeliver(0)}
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
