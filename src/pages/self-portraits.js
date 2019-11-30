import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import { BuildImageObject, setNavItem } from "../components/utils"
import { PageTitles } from "../components/consts"

const imageObjectBuilder = new BuildImageObject({
  basePath: "self_portraits",
})
const cData = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
].map(imgName =>
  imageObjectBuilder.buildImage({
    imgName,
  })
)

const [first, ...rest] = cData
const carouselData = [
  first,
  {
    text: `
    <br/>
    <p class="text-content">
      Having photographed 'the other' for a decade, I turned the camera on to myself in an attempt to erase and ease a personal crisis that took over my life in 2005. The result has been a series of self-portraits while traveling in different parts of India. During the countless hours spent in trains, cars and at stations, I produced these series of staged images with a view to preserving the various phases of melancholy I was going through. Train journeys afforded certain anonymity and became sites to negotiate my crisis amidst fellow travelers. All this while I had been engaging in the emotional life of the ‘other’. Now I became for the first time the subject of my own camera. It was a different experience, of looking and being looked at.
      <br/><br/>
      These private photographic records, taken in public spaces, sometimes also contain the curious, questioning looks of people who happened to be present while the images were being taken. Despite the unusual nature of the whole process, it had a cathartic effect. I use repetition of the frame in each series to reinforce my desolation and isolation from my real environment.
    </p>
    `,
  },
  ...rest,
]

export default () => {
  setNavItem(PageTitles.SelfPortraits)
  return (
    <Layout>
      <SEO title={PageTitles.SelfPortraits} />
      <div className="flex mt-12">
        <div className="flex-grow w-full mt-20">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
