import React, { useRef, useEffect } from "react"
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
  const containerRef = useRef(null)
  const textElementRef = useRef(null)

  setNavItem(PageTitles.About)

  useEffect(() => {
    const h = `${containerRef.current.getBoundingClientRect().width / 2 - 2}px`
    textElementRef.current.style.height = h
  })

  return (
    <Layout>
      <SEO title={PageTitles.About} />
      <div className="flex mt-12">
        <div className="w-2/12">
          <SideNav sidenavItems={sidenavItemsAbout(0)} />
        </div>
        <div className="flex w-10/12 h-full" ref={containerRef}>
          <div className="w-1/2">
            <img
              src={bioImgURL.img.src}
              alt={bioImgURL.img.src}
              className="border-right-custom-blue"
            />
          </div>
          <p
            ref={textElementRef}
            className="text-sm w-1/2 pl-4 pr-4 pt-2 overflow-scroll bg-gray-400"
          >
            An English literature graduate, Anita Khemka (b. 1972) began
            photographing in 1996. Her oeuvre has largely been defined by social
            documentary work and has been widely exhibited in India and traveled
            to Barcelona, Amsterdam, Bangkok, Frankfurt, Paris, Geneva,
            Stockholm, Helsinki, London, Houston, and Melbourne.
            <br />
            <br />
            Her work dealing with alternative sexuality was made into a German
            film, Between the Lines – India’s Third Gender in 2005. Following
            three hijras (eunuchs), she entered the vibrant yet struggling hijra
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
            London (2009).
            <br />
            <br />
            With her work on Kashmir, she has collaborated with Imran Kokiloo,
            her partner (2016 – ongoing). This is an archive comprising the
            constructed image, staged photos and personal artifacts belonging to
            the Kashmiri people affected by the conflict. Here, she experiments
            with X–rays, large format pinhole, sound; and with photographs from
            her own family album as well as the found photograph to ensure the
            community’s self- representation in the narrative, rendering the
            work more inclusive of local voices. The first part of this work was
            exhibited at the FotoFest International in Houston, Texas in April
            2018.
            <br />
            <br />
            She headed the photography department at the Sri Aurobindo Centre
            for Arts and Communication (SACAC) from August 2015 until February
            2019 and is currently engaged by The MurthyNAYAK Foundation to work
            on their website India Photographed which will come live in early
            2020. Amongst other things, this has involved researching the works
            of contemporary Indian photographers and conducting written and
            video interviews.
            <br />
            <br />
            Anita Khemka lives in New Delhi and is represented by PHOTOINK.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
