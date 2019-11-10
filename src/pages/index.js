import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SideNav from "../components/sidenav"
import ContentCarousel from "../components/carousel"
import { BuildImageObject, setNavItem } from "../components/utils"
import { PageTitles } from "../components/consts"

const sidenavItems = [
  { url: "/", title: "Lakshmi" },
  { url: "/", title: "Kashmir" },
  { url: "/", title: "Self Portraits" },
]

const imageObjectBuilder = new BuildImageObject({ basePath: "Being Anita" })

const carouselData = [
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Balachandran_48_55.jpg" }),
  {
    text: `The images that I make are rooted in my experience as an Indian woman and are a response to the reality around me. Having done self-portraits with the attempt to erase and ease a personal crisis, I sought to find other beings that were named Anita. This time, the attempt was to meet my namesakes and to just see ‘who’ they are. The questions guiding my work remain unchanged: What is Anita?  Who is Anita?  What defines her?  And does it really matter?  After all, Anita is just a name.`,
  },
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Bhasin_28_53.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Bhola_53_08.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Haldar_24-49.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Jacob_22-09.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_jain_29_50.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Kathpalia_15-44.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Nigam_26B-53.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Sharma_33_52.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Shrestha_10_07.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Thapan_18-53.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Trehan_20-54.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A_Verma_27-53.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "AKHE_A1_56_003.jpg" }),
]
const IndexPage = () => {
  setNavItem(PageTitles.BeingAnita)
  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex mt-12">
        <div className="w-1/5">
          <SideNav sidenavItems={sidenavItems} />
        </div>
        <div className="flex-grow w-4/5">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
