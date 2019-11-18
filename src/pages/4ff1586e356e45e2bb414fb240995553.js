import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import { BuildImageObject } from "../components/utils"

const imageObjectBuilder = new BuildImageObject({
  basePath: "kashmir_for_application_URL",
})

const carouselData = [
  {
    text: `<h1 class="text-2xl font-thin mt-2 tracking-wide text-center text-gray-700 uppercase">
    I Hope They Serve Beer in Hell — a lost childhood
    </h1>`,
  },
  {
    text: `
    <div class="text-content">
      During one of our family trips to Srinagar in 2016, we got house bound as there was a two week long shutdown of the valley due to the death of a beloved militant who greatly appealed to the youth. We live in Delhi, 90 minutes by flight from Srinagar, and this complete lockdown made us acutely aware of the freedom we take for granted. 
      <br/><br/>
      Kashmir has been a contentious issue between India and Pakistan for 72 years. However, the last 30 years have been marked by conflict and today, Kashmir is the most militarized zone in the world. 
      <br/><br/>
      This work is a reaction to our experience at the time and a deeper reflection of what it means to live in an environment, which is heavy with a sense of betrayal and subjugation. We started with making portraits and x-ray portraits of the victims of pellet guns. The state sanctioned the use of pellet guns, which are described as a ‘non-lethal’ crowd-controlling weapon. However, the use of these guns has led to thousands of people getting maimed and hundreds blind. 
      <br/><br/>
      This vitiated atmosphere is a grim reminder of why Imran, my partner and other boys his age were sent away from Kashmir in the 90s while still in their teens. One has had to accept that for children born into conflict — curfews, lockdowns, extra-judicial killings have become the normal. How does one measure the loss of childhood during any kind of conflict? The fact that two generations of Kashmiris cannot dream a dream not marred by conflict is very sad; the sub conscious is dominated by violent memories and the natural instinct to survive often gets subverted. The desire to hit back increasingly overrides the instinct to live. 
      <br/><br/>
      This work has evolved into collecting, archiving and photographing objects of people who have died, disappeared or been directly affected by the conflict in the last 30 years. We are photographing clothes, notebooks, identity cards, photographs and other belongings that families treasure. We continue to collect documents exchanged between families & the establishment (the sense of helplessness that arises from their content, borders the Kafkaesque).
      <br/><br/>
      Back home in Delhi, our daughters sleep with absolute abandon, which is in stark contrast with the images of violence and depravity we see on our screens daily. 
      However, my family shares the canvas with the larger story of Kashmir, hence our own family album find its space in this work. 
      <br/><br/>
      This work is in progress and with time we intend to create a House of Memory Objects and Photographs. The need to do this arises from the fact that the material evidence of the lives lived and the deaths of these people are disappearing. Even though the conflict is a part of our history and continues to be a part of our daily existence, it is unfortunately not a part of a larger collective memory outside of Kashmir. 
      <br/><br/>
      (This is a collaborative work by Anita Khemka and Imran Kokiloo)
    </div>
    `,
  },
  imageObjectBuilder.buildImage({ imgName: "1.X-Ray Portraits.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "2. Identity.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "3. Clothes I.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "4. Clothes II.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "5. Clothes III.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "6. Clothes IV.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "7. Portraits.jpg" }),
  imageObjectBuilder.buildImage({ imgName: "7a. Court Files.jpg" }),
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
      <SEO title="Submission" />
      <div className="flex justify-center">
        <a
          className="mt-6 bg-transparent hover:bg-gray-500 text-gray-600 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
          href="/kashmir_for_application.zip"
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
