import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem, BuildImageObject } from "../../components/utils"
import { PageTitles, sidenavItemsWomenDeliver } from "../../components/consts"
import SideNav from "../../components/sidenav"
import ContentCarousel from "../../components/carousel"

const imageObjectBuilder = new BuildImageObject({
  basePath: "women_deliver/india",
})

const carouselData = [
  "1. IMG_1086 copy.jpg",
  "2. IMG_1495 copy.JPG",
  "3. _MG_3478 copy.JPG",
  "4. IMG_2639 copy.jpg",
  "5. IMG_2213 copy.jpg",
  "6. IMG_2289 copy.jpg",
  "7. IMG_2382 copy.JPG",
  "8. IMG_0760 copy.JPG",
  "9. IMG_0486 copy.JPG",
  "10. IMG_3160 copy.JPG",
  "11. IMG_3331 copy.JPG",
  "12. IMG_1837 copy.jpg",
  "13. _MG_3564 copy.JPG",
  "14. IMG_1074 copy.JPG",
  "15. IMG_2123 copy.JPG",
  "16. IMG_1738 copy.jpg",
  "17. IMG_2944 copy.jpg",
  "18. IMG_3313 copy.jpg",
  "19. IMG_3194 copy.jpg",
  "20. IMG_1479 copy.jpg",
  "21. IMG_2487 copy.jpg",
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
          <SideNav
            sidenavItems={sidenavItemsWomenDeliver(1)}
            backBtn
            backBtnUrl="/commissioned/jcb"
          />
        </div>
        <div className="flex-grow w-10/12">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
