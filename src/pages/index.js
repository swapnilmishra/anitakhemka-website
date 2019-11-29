import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import { BuildImageObject, setNavItem } from "../components/utils"
import { PageTitles } from "../components/consts"

const imageObjectBuilder = new BuildImageObject({ basePath: "landing_page" })

const carouselData = [
  "1. IMG_8735.JPG",
  "2.jpg",
  "3. 17_8958.JPG",
  "4. Madhuri.jpg",
  "5. copy.jpg",
  "6. IMG_3121.JPG",
  "7.JPG",
  "8. _IMG_3601.jpg",
  "9. AKHE_HIV_MAN_012.jpg",
  "10. IMG_8507.JPG",
  "11.jpg",
  "12. _MG_0758.JPG",
  "13. AKHE_HIV_MAN_004.jpg",
  "14.JPG",
  "15. IMG_2443.JPG",
  "16 copy.jpg",
].map(imgName => imageObjectBuilder.buildImage({ imgName }))

export default () => {
  setNavItem("")
  return (
    <Layout>
      <SEO title={PageTitles.Home} />
      <div className="flex mt-12 justify-center">
        <div className="flex-grow w-full">
          <ContentCarousel
            carouselData={carouselData}
            autoPlay={5000}
            animationSpeed={1000}
            infinite
          />
        </div>
      </div>
    </Layout>
  )
}
