import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentCarousel from "../components/carousel"
import { BuildImageObject, setNavItem } from "../components/utils"
import { PageTitles } from "../components/consts"
import SideNav from "../components/sidenav"

const imageObjectBuilder = new BuildImageObject({ basePath: "laxmi_2003_12" })
const cData = [
  "1.jpg",
  "2.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "6.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "12a_IMG_9858.JPG",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18_IMG_2384.jpg",
  "19_IMG_2519.jpg",
  "20.JPG",
  "21_IMG_2324.jpg",
  "22_IMG_2335.jpg",
  "23_IMG_3660.jpg",
  "24_IMG_3926.jpg",
  "25_MG_0758.JPG",
  "26.JPG",
  "27.JPG",
  "28.JPG",
  "29.JPG",
  "30.JPG",
  "31.JPG",
  "32.jpg",
  "33.jpg",
  "34.jpg",
  "35.JPG",
  "36.JPG",
  "37.jpg",
  "38.JPG",
  "39.JPG",
  "40_IMG_3250.jpg",
  "41_IMG_3197.jpg",
  "42_IMG_4068.jpg",
  "43_IMG_3453.jpg",
  "44_IMG_3364.jpg",
  "45_IMG_3437.jpg",
  "46_IMG_3451.jpg",
  "47_IMG_2439.jpg",
  "48_IMG_3676.jpg",
  "49_IMG_3735.jpg",
  "50_IMG_3601.jpg",
  "51_IMG_3823.jpg",
  "52_MG_0748.jpg",
  "53_IMG_5553.jpg",
  "54_IMG_5589.jpg",
  "55_IMG_2740.jpg",
  "56_IMG_2831.jpg",
  "57_MG_0758a.JPG",
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
    <p class="text-content">
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
  </p>
    `,
  },
  ...rest,
]
const sidenavItems = [
  { url: "/laxmi-2003", title: "2003-12", selected: true },
  { url: "/laxmi-2013", title: "2013-19" },
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
