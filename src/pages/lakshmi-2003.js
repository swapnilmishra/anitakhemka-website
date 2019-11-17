import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import {
  BuildImageObject,
  setNavItem,
  buildSequencedImages,
} from "../components/utils"
import { PageTitles } from "../components/consts"
import SideNav from "../components/sidenav"

const imageObjectBuilder = new BuildImageObject({ basePath: "lakshmi_2003_06" })
const cData = buildSequencedImages({
  till: 9,
  imageBuilder: imageObjectBuilder,
})
const [first, ...rest] = cData
const carouselData = [
  first,
  {
    text: `
    In 2003, I worked with Thomas Wartmann, a German filmmaker on his
documentary film, ‘Between the Lines - India’s Third Gender’. The film
focused on 3 eunuchs through the lens and narration of a
photographer (myself). Laxmi was one of the protagonists of the film,
a young man who had been sexually abused by the male members of
his family from the age of six to twelve. These experiences, he says,
shaped his sexual identity. Since his sexual experiences were with
men, although forced, he was now only attracted to men. Yet he did
not see himself as a homosexual but a hijra (eunuch), the third
gender. He says, “I am more than a woman and less than a man. I
have the soul of a hijra”.
<br/><br/>
Hijras (eunuchs) have lived in India for centuries on the fringes of
society and theirs is a secret, complex and ambiguous world. They live
as a community in a hierarchy system with a Guru (leader) at the top
and chelas (subordinates) below. They make a living by singing and
dancing at the birth of a child, by begging at traffic signal stops and by
prostituting themselves. Laxmi does none of this.
<br/><br/>
Laxmi defies the age-old custom of community living – she lives with
her biological family, teaches Indian classical dance at a reputed dance
institute, acts in films and is a social activist. It is unheard of for a
eunuch to enter a coffee shop, let alone sit in one for hours. She sits in
a coffee shop with as much élan as she does while walking down the
steps of a mosque dressed as a woman.
<br/><br/>
Her relationship with her biological family, her neighborhood, and
society at large has changed gradually over the past sixteen years I’ve
known her. Whilst filming her for the documentary, she would never
wear female apparels at home. Today, she is castrated, the head of
the Kinnar Akhada (a Hindu religious order) and is believed by people
to hold spiritual powers and is a leader in the transgender rights
movement.
<br/><br/>
Laxmi is a mixture of profound warmth, intelligence, ambiguity and
tempestuous emotions. I spend time with her and hence I photograph
her.
    
    `,
  },
  ...rest,
]
const sidenavItems = [
  { url: "/lakshmi-2003", title: "2003-06", selected: true },
  { url: "/lakshmi-2007", title: "2007-12" },
  { url: "/lakshmi-2013", title: "2013-19" },
]
export default () => {
  setNavItem(PageTitles.Laxmi)
  return (
    <Layout>
      <SEO title={PageTitles.Laxmi} />
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
