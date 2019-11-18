import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import { BuildImageObject } from "../components/utils"

const imageObjectBuilder = new BuildImageObject({
  basePath: "kashmir_for_application_URL",
})
const carouselData = [
  imageObjectBuilder.buildImage({ imgName: "1.X-Ray Portraits.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "2. Identity.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "3. Clothes I.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "4. Clothes II.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "5. Clothes III.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "6. Clothes IV.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "7. Portraits.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "8. Belongings I.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "9. Belongings II.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "10. Belongings III.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "11. Belongings IV.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "12. Home.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "13. Found.jpg" }),
]

export default () => {
  return (
    <Layout>
      <SEO title="Coming soon" />
      <div className="flex justify-center">
        <a
          className="mt-6 bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          href="/Being_Anita/AKHE_A_Bhasin_28_53.jpg.zip"
          download
        >
          <span
            className="text-xs align-text-top"
            role="img"
            aria-label="download"
          >
            📥
          </span>{" "}
          Download the story as zip
        </a>
      </div>
      <div className="flex mt-6 justify-center">
        <div className="flex-grow w-full">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
