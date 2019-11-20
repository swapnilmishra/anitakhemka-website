import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import { BuildImageObject } from "../components/utils"

import "../components/override.css"

const imageObjectBuilder = new BuildImageObject({
  basePath: "Final Edit For URL",
})

const carouselData = [
  {
    text: `<h1 class="text-2xl font-thin margin-bottom-125 tracking-wide text-center text-gray-700 uppercase">
    I Hope They Serve Beer in Hell — a lost childhood
    </h1>`,
  },
  {
    text: `
    <div class="text-content">
      During one of our family trips to Srinagar in 2016, we got house bound as there was a two week
      long shutdown of the valley due to the death of a beloved militant who greatly appealed to the
      youth. We live in Delhi, 90 minutes by flight from Srinagar, and this complete lockdown made us
      acutely aware of the freedom we take for granted.
      <br/><br/>
      Kashmir has been a contentious issue between India and Pakistan for 72 years. However, the
      last 30 years have been marked by conflict and today, Kashmir is the most militarized zone in
      the world. This work is a reaction to our experience at the time and a deeper reflection of what it
      means to live in an environment, which is heavy with a sense of betrayal and subjugation. We
      started with making portraits and x-ray portraits of the victims of pellet guns. The state
      sanctioned the use of pellet guns, which are described as a ‘non-lethal’ crowd-controlling
      weapon. However, the use of these guns has led to thousands of people getting maimed and
      hundreds blind.
      <br/><br/>
      This vitiated atmosphere is a grim reminder of why Imran, my partner and other boys his age
      were sent away from Kashmir in the 90s while still in their teens. One has had to accept that for
      children born into conflict — curfews, lockdowns, extra-judicial killings have become the normal.
      How does one measure the loss of childhood during any kind of conflict? The fact that two
      generations of Kashmiris cannot dream a dream not marred by conflict is very sad; the sub
      conscious is dominated by violent memories and the natural instinct to survive often gets
      subverted. The desire to hit back increasingly overrides the instinct to live.
      <br/><br/>
      This work has now further evolved. The landscape has been photographed using pinholes to anchor Imran’s memory of his home. The tropes of memory — clothes, notebooks, identity cards, photographs and other belongings that families treasure are being documented. We continue to collect documents exchanged between families & the establishment (the sense of helplessness that arises from their content, borders the Kafkaesque).
      <br/><br/>
      In Delhi, our daughters sleep with absolute abandon, which is in stark contrast with the images of violence and depravity we see on our screens daily. However, my family shares the canvas with the larger story of Kashmir even as we live in a sense of psychological exile. Hence our own family album finds its space in this work as a grim reminder of the innocence and normality lost. Even though the conflict is a part of our history and continues to be a part of our daily existence, it is unfortunately not a part of a larger collective memory outside of Kashmir. 
      <br/><br/>
      (This is a collaborative work by Anita Khemka and Imran Kokiloo)
    </div>
    `,
  },
  imageObjectBuilder.buildImage({
    imgName: "1. Zero Bridge.jpg",
    caption: "Zero Bridge",
  }),
  imageObjectBuilder.buildImage({
    imgName: "2. Cemetry.jpg",
    caption: "Cemetry",
  }),
  imageObjectBuilder.buildImage({
    imgName: "3 .X-Ray Portraits.jpg",
    caption: "X-Ray Portraits",
  }),
  imageObjectBuilder.buildImage({
    imgName: "4. Portraits.jpg",
    caption: "Portraits",
  }),
  imageObjectBuilder.buildImage({
    imgName: "5. Identity.jpg",
    caption: "Identity",
  }),
  imageObjectBuilder.buildImage({
    imgName: "6. Youth.jpg",
    caption: "Youth",
  }),
  imageObjectBuilder.buildImage({
    imgName: "7. Protest.jpg",
    caption: "Protest",
  }),
  imageObjectBuilder.buildImage({
    imgName: "8. Belongings.jpg",
    caption: "Belongings",
  }),
  imageObjectBuilder.buildImage({
    imgName: "9. Displaced.jpg",
    caption: "Displaced",
  }),
  imageObjectBuilder.buildImage({
    imgName: "10. Untitled I.jpg",
    caption: "Untitled I",
  }),
  imageObjectBuilder.buildImage({
    imgName: "11. Untitled II.jpg",
    caption: "Untitled II",
  }),
  imageObjectBuilder.buildImage({
    imgName: "12. Court Files.jpg",
    caption: "Court Files",
  }),
  imageObjectBuilder.buildImage({
    imgName: "13. Home.jpg",
    caption: "Home",
  }),
  imageObjectBuilder.buildImage({
    imgName: "14. Found.jpg",
    caption: "Found",
  }),
  imageObjectBuilder.buildImage({
    imgName: "15. School.jpg",
    caption: "School",
  }),
]

export default () => {
  return (
    <Layout>
      <SEO title="Portfolio Submission" />
      <div className="flex justify-center">
        <a
          className="mt-6 bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          href="/Anita Khemka_Portfolio Submission-20191119T154141Z-001.zip"
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
