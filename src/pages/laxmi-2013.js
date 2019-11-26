import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import { BuildImageObject, setNavItem } from "../components/utils"
import { PageTitles } from "../components/consts"
import SideNav from "../components/sidenav"

const imageObjectBuilder = new BuildImageObject({ basePath: "laxmi_2013_19" })
const carouselData = [
  "17_8958.JPG",
  "18_8405.JPG",
  "19. IMG_8278.JPG",
  "20. IMG_9160.JPG",
  "21. IMG_8352.JPG",
  "22. IMG_8507.JPG",
  "22a.JPG",
  "23. IMG_9522.JPG",
  "24. IMG_8837.JPG",
  "25. IMG_8735.JPG",
  "26.JPG",
  "27. IMG_2932.JPG",
  "28. IMG_3121.JPG",
  "29. IMG_3061.JPG",
  "30. IMG_3351.JPG",
  "30a MG_2694.JPG",
  "31. IMG_3727.JPG",
  "32. IMG_3767.JPG",
  "33.JPG",
  "34.JPG",
  "35.JPG",
  "36.JPG",
  "37.JPG",
  "38.JPG",
  "39.JPG",
  "40.JPG",
  "41. IMG_6425.JPG",
  "42. IMG_6462.JPG",
  "43. IMG_6573.JPG",
  "44. IMG_6624.JPG",
  "45. IMG_6638.JPG",
  "46.IMG_2063.JPG",
  "47.IMG_2222.JPG",
  "48.IMG_2243.JPG",
  "49.IMG_7328.JPG",
  "50. IMG_7552.JPG",
  "51. IMG_7833.JPG",
  "52. IMG_2443.JPG",
].map(imgName =>
  imageObjectBuilder.buildImage({
    imgName,
  })
)
const sidenavItems = [
  { url: "/laxmi-2003", title: "2003-06" },
  { url: "/laxmi-2007", title: "2007-12" },
  { url: "/laxmi-2013", title: "2013-19", selected: true },
]
export default () => {
  setNavItem(PageTitles.Laxmi)
  return (
    <Layout>
      <SEO title={PageTitles.Laxmi} />
      <div className="flex mt-12">
        <div className="w-1/12">
          <SideNav sidenavItems={sidenavItems} />
        </div>
        <div className="flex-grow w-11/12">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
