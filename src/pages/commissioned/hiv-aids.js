import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem, BuildImageObject } from "../../components/utils"
import { PageTitles, sidenavItemsCommissioned } from "../../components/consts"
import SideNav from "../../components/sidenav"
import ContentCarousel from "../../components/carousel"

const imageObjectBuilder = new BuildImageObject({
  basePath: "hiv_aids",
})

const [first, ...rest] = [
  "AKHE_HIV_MAN_001_copy copy.jpg",
  "AKHE_HIV_MAN_004_Copy copy.jpg",
  "AKHE_HIV_MAN_007 copy.jpg",
  "AKHE_HIV_MAN_008 copy.jpg",
  "AKHE_HIV_MAN_012 copy.jpg",
  "AKHE_HIV_MAN_017 copy.jpg",
  "AKHE_HIV_MAN_020 copy.jpg",
  "AKHE_HIV_MAN_028 copy.jpg",
  "AKHE_HIV_MAN_031 copy.jpg",
  "AKHE_HIV_MAN_033 copy.jpg",
  "AKHE_HIV_MAN_035 copy.jpg",
  "AKHE_HIV_MAN_041 copy.jpg",
  "AKHE_HIV_MAN_042 copy.jpg",
  "AKHE_HIV_MAN_044 copy.jpg",
  "AKHE_HIV_MAN_046 copy.jpg",
  "AKHE_HIV_MAN_047 copy.jpg",
  "AKHE_HIV_MAN_048 copy.jpg",
  "AKHE_HIV_MAN_054 copy.jpg",
  "AKHE_HIV_MAN_055 copy.jpg",
  "AKHE_HIV_MAN_057 copy.jpg",
  "AKHE_HIV_MAN_060 copy.jpg",
  "AKHE_HIV_MAN_061 copy.jpg",
  "AKHE_HIV_MAN_063 copy.jpg",
  "AKHE_HIV_MAN_064 copy.jpg",
  "AKHE_HIV_MAN_069 copy.jpg",
  "AKHE_HIV_MAN_070 copy.jpg",
  "AKHE_HIV_MAN_072 copy.jpg",
  "AKHE_HIV_MAN_075 copy.jpg",
  "AKHE_HIV_MAN_078 copy.jpg",
  "HIV -  REL 17.jpg",
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
  My work on HIV/AIDS (2000 – 2006) commissioned by UNAIDS and then supported by
  the Ford Foundation was the first nationwide attempt at creating such a visual archive on
  the issue and contributed hugely in reducing the stigma associated with living with
  HIV/AIDS.
  <br/><br/>
  My intention to photograph HIV+ people grew out of the terrible stigma that I witnessed a
  friend experience living in India’s capital, New Delhi. I wondered what it would be like to
  live with the virus in the smaller towns and rural areas. The stigma attached to being
  HIV+ was extremely harsh. I began to look for HIV+ people who were leading as normal
  a life as was possible at that time and began to document the lives of people from
  various social strata and backgrounds whose struggles echoed similar sentiments. From
  the ports of Goa to the trans-gendered mythological festivities of Tamil Nadu to the
  brothels of Maharashtra to the drug consumed villages of Manipur to the migrant
  colonies of New Delhi, I met people and photographed them.
  <br/><br/>
  The purpose of this endeavor was to try and give a human face to this epidemic. When
  this work was exhibited for the first time at an international conference on HIV/AIDS in
  Australia, I ensured that two people whom I had photographed were also present. This
  work went on to be exhibited in India and internationally and was always accompanied
  by at least a couple of people who had been photographed for this project. Their
  interaction with the visitors at the exhibitions gave them the agency to represent
  themselves and contributed hugely to the advocacy about the issue and helped reduce
  the stigma associated with the illness.
  <br/><br/>
  The photographs shown here were made in Manipur.
  </p>`,
  },
  ...rest,
]

export default () => {
  setNavItem(PageTitles.Commissioned)
  return (
    <Layout>
      <SEO title={PageTitles.Commissioned} />
      <div className="flex mt-12">
        <div className="w-2/12">
          <SideNav sidenavItems={sidenavItemsCommissioned(2)} />
        </div>
        <div className="flex-grow w-10/12">
          <ContentCarousel carouselData={carouselData} />
        </div>
      </div>
    </Layout>
  )
}
