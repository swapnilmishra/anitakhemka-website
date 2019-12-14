import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem, BuildImageObject } from "../../components/utils"
import { PageTitles, sidenavItemsCommissioned } from "../../components/consts"
import SideNav from "../../components/sidenav"
import ContentCarousel from "../../components/carousel"
import { Box, VerticalBox } from "../../components/box"

const imageObjectBuilder = new BuildImageObject({
  basePath: "jcb_author_portraits",
})

const carouselData = [
  imageObjectBuilder.buildImage({
    imgName: "1. Murugan.jpg",
    caption: "Perumal Murugan",
  }),
  {
    text: `<p class="max-width-500 text-content">
    JCB Literature Prize has an annual collaboration with Vogue India to create an
    archive featuring the best of Indian writing over the years. They have conceptualized
    a special series of portraits of the shortlisted novelists by a chosen photographer for
    the purpose. This year when I was commissioned to make these photographs, I was
    drawing at similarities in our worlds. I believe that writers and photographers, both
    work with perseverance, usually over great lengths of time, drawing from their own
    life experiences, the journey traveled mostly alone.
    <br/><br/>
    It was quite a special experience to collaborate with the writers to make their
    portraits.
    <br/><br/>
    The following excerpt is by Sana Goyal in Vogue, India
    Speaking about her vision for the photoshoot, Khemka said, “The writers are from
    different parts of the country, with one actually living in Hawaii, and they were all
    brought in to one location for the photographs to be made. Bearing this in mind, we
    did not want to give away the city where the photos were made, as that would be
    misleading. So clearly, in order to keep the location anonymous, I decided to make
    the portraits indoors and that too in a location that was lending itself to being
    nondescript,” said Khemka. “It was clear to me that I wanted interesting walls as a
    backdrop, a room that had a certain character with an old-world charm about it.
    Having decided this, my whole endeavour was to focus on the writers and bring out a
    certain nuance in each,” she explained.
    <br/><br/>
    And how does one capture arguably the five best writers in India right now? How
    does one distill the essence of these creators of words into images, and make
    the pictures then speak a thousand words? “It’s quite simple actually—slow the
    process down,” said Khemka. “I wanted the writers to see and feel how invested I
    was in the process of making the portrait, and by doing so, I got them invested as
    well. I was using a medium format analog camera and made a total of 40 frames
    each over two hours. This meant that the shutter was pressed only when I felt that I
    was going to get a moment, and to arrive at that moment meant a certain
    collaboration between the writer and me. The rest I owe to the beautiful element
    of chance that photography inherently has.”
    </div>`,
  },
  imageObjectBuilder.buildImage({
    imgName: "2. Madhuri.jpg",
    caption: "Madhuri Vijay",
  }),
  imageObjectBuilder.buildImage({
    imgName: "3. Roshan.jpg",
    caption: "Roshan Ali",
  }),
  imageObjectBuilder.buildImage({
    imgName: "4. Manoranjan.jpg",
    caption: "Manoranjan Byapari",
  }),
  imageObjectBuilder.buildImage({
    imgName: "5. Shekhar.jpg",
    caption: "Hansda Sowvendra Shekhar",
  }),
]

export default () => {
  setNavItem(PageTitles.Commissioned)
  return (
    <Layout>
      <SEO title={PageTitles.Commissioned} />
      <div className="flex">
        <Box className="w-2/12">
          <SideNav sidenavItems={sidenavItemsCommissioned(0)} />
        </Box>
        <VerticalBox className="w-10/12">
          <ContentCarousel carouselData={carouselData} />
        </VerticalBox>
      </div>
    </Layout>
  )
}
