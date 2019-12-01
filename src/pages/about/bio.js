import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem, BuildImageObject } from "../../components/utils"
import { PageTitles, sidenavItemsAbout } from "../../components/consts"
import SideNav from "../../components/sidenav"

const imageObjectBuilder = new BuildImageObject({
  basePath: "about_page",
})

const bioImgURL = imageObjectBuilder.buildImage({
  imgName: "bio-pic.jpg",
})

const IndexPage = () => {
  setNavItem(PageTitles.About)
  return (
    <Layout>
      <SEO title={PageTitles.About} />
      <div className="flex mt-12">
        <div className="w-2/12">
          <SideNav sidenavItems={sidenavItemsAbout(0)} />
        </div>
        <div className="w-10/12">
          <figure className="w-1/2 float-left mr-4">
            <img src={bioImgURL.img.src} alt={bioImgURL.img.src} />
          </figure>
          <p className="text-sm">
            An English literature graduate, Anita Khemka (b. 1972) began
            photographing in 1996. Her oeuvre has largely been defined by social
            documentary work and has been widely exhibited in India and traveled
            to Barcelona, Amsterdam, Bangkok, Frankfurt, Paris, Geneva,
            Stockholm, Helsinki, London, Houston, and Melbourne. Her work
            dealing with alternative sexuality was made into a German film,
            Between the Lines – India’s Third Gender in 2005. Following three
            hijras (eunuchs), she entered the vibrant yet struggling hijra
            communities, openly discussing many intimate details of their lives.
            Her project, Sweet Sixteen (2006), portraits of sixteen-year-olds is
            included in a book, IMAGINING OURSELVES: Global Voices from a New
            Generation of Women. The series, Self-Portraits has been included in
            a group exhibition, Watching Me, Watching India at the Fotografie
            Forum International, Frankfurt (2006), in the Photoquai Biennale at
            the Musée du Quai Branly, Paris (2007), The Self and The Other –
            Portraiture in Contemporary Indian Photography for the Palau de la
            Virrenina and Artium in Spain, Where Three Dreams Cross: 150 years
            of photography from India, Pakistan and Bangladesh at White Chapel,
            London (2009). With her work on Kashmir, she has collaborated with
            Imran Kokiloo, her partner (2016 – ongoing). This is an archive
            comprising the constructed image, staged photos and personal
            artifacts belonging to the Kashmiri people affected by the conflict.
            Here, she experiments with X–rays, large format pinhole, sound; and
            with photographs from her own family album as well as the found
            photograph to ensure the community’s self- representation in the
            narrative, rendering the work more inclusive of local voices. The
            first part of this work was exhibited at the FotoFest International
            in Houston, Texas in April 2018. She headed the photography
            department at the Sri Aurobindo Centre for Arts and Communication
            (SACAC) from August 2015 until February 2019 and is currently
            engaged by The MurthyNAYAK Foundation to work on their website India
            Photographed which will come live in early 2020. Amongst other
            things, this has involved researching the works of contemporary
            Indian photographers and conducting written and video interviews.
            Anita Khemka lives in New Delhi and is represented by PHOTOINK.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage