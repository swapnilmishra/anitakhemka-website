import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import { BuildImageObject, setNavItem } from "../components/utils"
import { PageTitles } from "../components/consts"
import { VerticalBox } from "../components/box"

const imageObjectBuilder = new BuildImageObject({
  basePath: "munna_guru_ramkali",
})
const [first, ...rest] = [
  "1 copy.jpg",
  "2 copy.jpg",
  "3 copy.jpg",
  "4 copy.jpg",
  "5 copy.jpg",
  "6 copy.jpg",
  "7 copy.jpg",
  "8 copy.jpg",
  "9 copy.jpg",
  "10 copy.jpg",
  "11 copy.jpg",
  "12 copy.jpg",
  "13 copy.jpg",
  "14 copy.jpg",
  "15 copy.jpg",
  "16 copy.jpg",
  "18 copy.jpg",
  "19 copy.jpg",
].map(imgName =>
  imageObjectBuilder.buildImage({
    imgName,
  })
)

const carouselData = [
  first,
  {
    text: `
  <p class="text-content">
  My grandmother&#39;s house was a stone&#39;s throw away from Munna Guru&#39;s house in old
  Delhi. As a child when I misbehaved, I was always threatened that I’d be sent away
  to her house. As a result, I grew up fearing Munna Guru. Her loud voice, aggressive
  body language, facial hair was all quite intimidating. It was during my teen years that
  my fears turned to curiosity when I discovered that she was a hijra, a eunuch. The
  ambiguity of her gender fascinated me and I wanted to know her. What was it like to
  be born without a defined sex, to be addressed as ‘she’ one moment and ‘he’ the
  next?
  <br/><br/>
  In certain sections of Indian society, giving birth to a child with a genital defect and
  bringing it up is considered a matter of shame. Often parents give away such
  children to eunuch clans to bring up. Unlike many eunuchs, Munna Guru’s mother
  did not give him away — she chose to defy society and bring him up. Till the age of
  18, he lived with his mother in Lucknow and then moved to Delhi to find others of his
  ilk. He identified more with his feminine side and began to refer to himself as a
  woman.  
  <br/><br/>
  For the next 30 odd years, Munna lived amongst hijras. She started off as a chela
  and with the passage of time, her beauty and charming disposition made her a
  favourite with her Guru. Slowly, she made many chelas and was quite celebrated
  within the community. Despite all the attention, she took to the bottle fairly early in
  her life and developed a serious drinking problem. Her life was tragically cut short in
  early 2003 under mysterious circumstances. It is rumoured that she had been slowly
  poisoned over the last few years in a bid to oust her and take over her position.
  After her death, her chela Ramkali became the guru. Spending time with Munna
  while she was alive, one could hardly escape Ramkali’s presence. She was bold,
  attractive and had a strong personality – traits required to become a guru.
  To photograph Munna Guru and her chelas was an experience. But to photograph
  her with her biological family was a privilege, one that gave me a great insight into
  the complex fabric of human relationships.
  </p>
  `,
  },
  ...rest,
]

export default () => {
  setNavItem(PageTitles.Munna)
  return (
    <Layout>
      <SEO title={PageTitles.Munna} />
      <div className="flex">
        <VerticalBox className="w-full">
          <ContentCarousel carouselData={carouselData} />
        </VerticalBox>
      </div>
    </Layout>
  )
}
