import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { setNavItem } from "../components/utils"
import { PageTitles } from "../components/consts"

const DateSection = ({ children }) => (
  <span class="inline-block font-medium text-gray-600 mr-2 text-sm">
    {children}
  </span>
)
const Bold = ({ children }) => (
  <strong className="font-semibold text-gray-700">{children}</strong>
)
const Content = ({ children }) => <p className="mb-6">{children}</p>
const Container = ({ children, className }) => {
  return (
    <div
      className={`flex max-w-2xl m-auto text-gray-600 text-xs tracking-wider ${className}`}
    >
      {children}
    </div>
  )
}

const IndexPage = () => {
  setNavItem(PageTitles.About)
  return (
    <Layout>
      <SEO title={PageTitles.About} />
      <h2 className="uppercase text-center text-gray-600 tracking-wide text-sm font-semibold mt-12">
        Professional experience
      </h2>
      <Container className="mt-12">
        <div className="w-1/5">
          <DateSection>2019</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Speaker at the book launch of
            <Bold> Third Eye: Photography and Ways of Seeing, </Bold>
            published by Speaking Tiger. Session moderated by Ravi Singh, India
            Habitat Centre, Delhi
          </Content>

          <Content>
            Speaker (to be held in March 2020) at a conference titled
            <Bold> Family Photographs: History and Memory </Bold> at Jawahar Lal
            Nehru University (JNU) Speaker at the book launch of
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2015 - 19</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Director of Photography at
            <Bold> Sri Aurobindo Centre for Arts & Communication, Delhi </Bold>(
            <a className="text-gray-500" href="www.sac.ac.in">
              www.sac.ac.in
            </a>
            ) (August, 2015 – February, 2019)
            <div className="mt-2">
              Contact Person: Daljeet Wadhwa, Director (daljeet@sac.ac.in)
            </div>
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2018</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Conducted a Professional Photography Development Workshop titled
            <Bold> Building Narratives </Bold> at the
            <Bold> Photo Kathmandu Festival, Nepal </Bold>
            <br />(
            <a
              className="text-gray-500"
              href="http://www.photoktm.com/artist/anita-khemka/"
            >
              http://www.photoktm.com/artist/anita-khemka
            </a>
            )
            <div>
              Contact Person : NayanTara Gurung Kakshapati, Festival Director
              (nayantara@photocircle.com.np)
            </div>
          </Content>

          <Content>
            Speaker at a seminar on
            <Bold> Photography: Pedagogy and Practice </Bold> organised by
            <Bold> PIX, Delhi </Bold>
            <div>
              Contact Person: Rahaab Allana, Founding Editor of PIX
              (photoreader1@gmail.com)
            </div>
          </Content>

          <Content>
            Speaker at the
            <Bold> Fast Forward 2: Women in Photography </Bold> Workshop led by
            <Bold> PIX, Delhi </Bold> at the AJK MCRC, Jamia University, Delhi
            <br />
            <a
              className="text-gray-500"
              href="https://fastforward.photography/our-projects/project-news/the-summary-of-the-third-workshop-at-jamia-millia-islamia-india/ "
            >
              https://fastforward.photography/our-projects/project-news/the-summary-of-the-third-workshop-at-jamia-millia-islamia-india/
            </a>
            <div>
              Contact Person: Sabeena Gadioke, Professor (sgadihoke@jmi.ac.in)
            </div>
          </Content>

          <Content>
            Speaker and Participant in the
            <Bold> Fourth Pillar: India Journalism Week </Bold> organized by the
            <Bold> Department of Visual Arts, The University of Chicago </Bold>
            <br />
            <a
              className="text-gray-500"
              href="https://fourthpillar.academeindia.com "
            >
              https://fourthpillar.academeindia.com
            </a>
            <div>
              Contact Person: Laura Letinsky, Professor, University of Chicago
              (lletinsk@icloud.com)
            </div>
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2017</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Participated in the
            <Bold> Deliberating Photography Education in India </Bold>{" "}
            conference at National Institute of Design (NID), Ahmedabad
            <div>
              Contact Person: Rahaab Allana, Founding Editor of PIX
              (photoreader1@gmail.com)
            </div>
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2003 - 05</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold> Between The Lines - India’s Third Gender </Bold> - a
            documentary feature film on eunuchs by Thomas Wartmann, Film
            Quadrat, Germany. Following three hijras (eunuchs), Khemka entered
            the vibrant yet struggling hijra communities, openly discussing many
            intimate details of their lives. Uniquely engaging because of
            Khemka's ability to initiate personal dialogue about femininity,
            sexuality and persistent cultural stereotypes about gender, this
            artful film provides fascinating insights into a social group that
            is a growing leader in the fight for gender and sexuality rights in
            India.
          </Content>
        </div>
      </Container>

      <h2 className="uppercase text-center text-gray-600 tracking-wide text-sm font-semibold mt-6">
        PHOTO EXHIBITIONS
      </h2>
      <Container className="mt-12">
        <div className="w-1/5">
          <DateSection>2018</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold> FotoFest International </Bold> - An exhibition on
            contemporary photography and new media art from India, Houston, USA
          </Content>
          <Content>
            <Bold> Le Temps des Villes Indiennes, Trajectoires Indiennes </Bold>
            - a visual dialogue on contemporary urban India at the Ecole
            Nationale Supérieure d’Architecture Paris-Malaquais, Paris
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2016</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Project Self Portraits exhibited at the
            <Bold> Serendipity Arts Festival</Bold>, Goa.
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2011</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold> Concurrent India </Bold> - presenting artists with roots in
            India and Pakistan at the Helsinki Art Museum, Finland
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2010</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold> Samtidigt (Concurrent India) </Bold> - presenting artists
            with roots in India and Pakistan at the Kulturhuset, Stockholm
          </Content>
          <Content>
            Exhibiting the Girl child and Women for an international
            retrospective celebrating the
            <Bold>
              {" "}
              40th anniversary of the French women's movement of liberation,
              Jean Monnet,
            </Bold>{" "}
            Paris
          </Content>
          <Content>
            <Bold>
              Where Three Dreams Cross: 150 Years of Photography from India,
              Pakistan and Bangladesh
            </Bold>
            , at the Whitechapel Gallery, London and at the Fotomuseum,
            Winterthur
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2009</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>
              {" "}
              The Self and the Other — Portraiture in Contemporary Indian
              Photography,{" "}
            </Bold>
            Espai 2 - Palau de la Virreina, Barcelona
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2008</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>
              Project Sweet Sixteen at the International Institute for Asian
              Studies
            </Bold>
            , on the occasion of ‘globalisering in Spiegelbeeld’ during the
            India-Amsterdam Festival, Amsterdam
          </Content>
          <Content>
            Project titled
            <Bold> Self Portraits, Exhibition Réalité/S</Bold>, Geneva
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2007</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Project titled
            <Bold> Between the Lines – India’s Third Gender</Bold>
            {""}exhibited at the Netherlands Transgender Film Festival,
            Amsterdam
          </Content>
          <Content>
            Project titled
            <Bold> Self Portraits, Biennale Photoquai</Bold>,{""} Musee de quai
            Branly, Paris
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2006</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>
              {" "}
              Watching Me, Watching India — Contemporary photography from India,{" "}
            </Bold>
            {""}Fotografie Forum international, Frankfurt
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2004</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Eye to Eye</Bold> - Women as seen through the eyes of 11 women
            photographers, Italian Cultural Centre, New Delhi Frankfurt
          </Content>

          <Content>
            <Bold>Androgyne — a an exhibition on alternate sexuality, </Bold>
            Visual Arts Gallery, India Habitat Center, New Delhi
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2002</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Pandemic: Imaging AIDS, </Bold>traveling exhibition presenting
            20 years of the photographic response to the AIDS epidemic,
            Barcelona
          </Content>

          <Content>
            <Bold>
              People Plus — A photo document of people living with HIV/AIDS{" "}
            </Bold>
            in India at the XIV International AIDS Conference, Barcelona
          </Content>

          <Content>
            <Bold>
              People Plus — A photo document of people living with HIV/AIDS{" "}
            </Bold>
            in India exhibited for the launch of the Bill and Melinda Gates
            Foundation
          </Content>

          <Content>
            <Bold>
              People Plus — A photo document of people living with HIV/AIDS{" "}
            </Bold>
            in India exhibited at the United Nations Development Program (UNDP)
            Office in Delhi for the then UN Secretary General Kofi Anan’s visit
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2001</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Women in the World of Work </Bold>
            for International Labor Organization (ILO), Delhi
          </Content>

          <Content>
            <Bold>The Kuttandavar-Aravan Festival </Bold> – a photo exhibition
            on the annual mythological festival of the trans-gendered
            communities, New Delhi for UNAIDS
          </Content>

          <Content>
            <Bold>Women in India - How Free? How Equal? </Bold> – For the United
            Nations Development Program (UNDP), Delhi
          </Content>

          <Content>
            <Bold>Beyond the Cuckoo’s Nest </Bold> – a project on mentally
            challenged people exhibited in Kolkata & Mumbai
          </Content>
          <Content>
            Exhibition of the project on
            <Bold> HIV/AIDS by National Foundation for India </Bold>at Visual
            Arts Gallery, Delhi
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2000</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Hope – a project on mentally challenged people </Bold>
            exhibited at AIFACS Gallery, New Delhi
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>1999</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Naga Sadhus — a project on Indian Sadhus </Bold>
            exhibited at the Gay Games Festival, Royal Tropical Institute,
            Amsterdam
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>1998</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Women of the World </Bold>— a project on Indian Widows
            exhibited at the Melkweg Gallery, Amsterdam
          </Content>
        </div>
      </Container>

      <h2 className="uppercase text-center text-gray-600 tracking-wide text-sm font-semibold mt-12">
        Publications
      </h2>
      <Container className="mt-12">
        <div className="w-1/5">
          <DateSection>2002</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Aravan Aravan </Bold>- A photo documentation of the annual
            mythological festival of the trans-gendered communities, published
            by UNAIDS
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2001</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold> People Plus </Bold>- A photo documentation on people living
            with HIV / AIDS in India, published by UNAIDS
          </Content>
        </div>
      </Container>

      <h2 className="uppercase text-center text-gray-600 tracking-wide text-sm font-semibold mt-12">
        PUBLICATIONS (Contributions)
      </h2>
      <Container className="mt-12">
        <div className="w-1/5">
          <DateSection>2018</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>India: Contemporary Photographic and New Media Art </Bold>
            alonside the Photo Exhibition, FotoFest International, Houston
          </Content>
          <Content>
            PIX — The Student Issue,
            <Bold> Photography: Pedagogy and Practice </Bold>
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2010</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Auto Focus, </Bold>
            The Self Portrait in Contemporary Photography by Susan Bright,
            Thames & Hudson
          </Content>
          <Content>
            <Bold>
              {" "}
              Where Three Dreams Cross, 150 years of Photography from India,
              Pakistan and Bangladesh,{" "}
            </Bold>
            White Chapel Gallery, London/ Fotomuseum Winterthur, Winterthur/
            Steidl
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2007</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Photo Quai, </Bold>
            Musee Du Quai Branley
          </Content>
          <Content>
            <Bold> India Now­­- New Visions in Photography, </Bold>
            published by Textuel, Paris and Thames & Hudson, UK
          </Content>
          <Content>
            <Bold> Munna Guru - </Bold>
            portrait of a eunuch in the Inter – Asia Cultural Studies Journal
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2006</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Imagining Ourselves - </Bold>A collection of photographs,
            paintings and personal stories in response to the question — What
            defines your generation of women? Published in association with the
            International Museum of Women, California
          </Content>
          <Content>
            <Bold> Eye to Eye - </Bold>A Photography Exhibition organized by
            Seher and Delhi Commission for Women
          </Content>
        </div>
      </Container>
      <Container>
        <div className="w-1/5">
          <DateSection>2005</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>
              {" "}
              24 Stunden, 24 hours in the life of the Catholic Church{" "}
            </Bold>
            ,A published by Heyne, Germany
          </Content>
        </div>
      </Container>
      <Container>
        <div className="w-1/5">
          <DateSection>2004</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Ardhanarishvara – The Androgyne, </Bold>
            authored by Dr. Alka Pande that probes the gender within by Rupa &
            Co
          </Content>
        </div>
      </Container>
      <Container>
        <div className="w-1/5">
          <DateSection>2003</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Pandemic: Facing AIDS - </Bold>
            images of the global AIDS epidemic over the last 20 years,
            representing nearly 50 countries, Umbrage Editions
          </Content>
          <Content>
            <Bold> If I Were Rain – </Bold>
            photographs of children in India, published by Youth Reach
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2000</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            <Bold>Fallen Angels - </Bold>
            Sex workers of the South Asian Region, published by Roli Books,
            2000).
          </Content>
        </div>
      </Container>

      <h2 className="uppercase text-center text-gray-600 tracking-wide text-sm font-semibold mt-12">
        ARTIST TALKS
      </h2>
      <Container className="mt-12">
        <div className="w-1/5">
          <DateSection>2018</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Artist Talk at
            <Bold> FotoFest International India Symposium </Bold>
            on
            <span className="italic">
              {" "}
              Consequences of Economic Development, Houston
            </span>
          </Content>
          <Content>
            Artist Talk at
            <Bold> University of Chicago Centre </Bold>, Delhi, presenting the
            Kashmir Project titled
            <span className="italic"> Kashmir — A Lost Childhood </span>
          </Content>
          <Content>
            Artist Talk at
            <Bold> Sri Aurobindo Centre for Arts and Communication, </Bold>,
            Delhi presenting the project{" "}
            <span className="italic">Laxmi — The Life of a Eunuch</span>
          </Content>
          <Content>
            Artist Talk at
            <Bold> AJK MCRC, Jamia University </Bold>, Delhi
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2015</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Artist Talk at
            <Bold> St. Stephens College, Delhi University </Bold>
          </Content>
        </div>
      </Container>

      <Container>
        <div className="w-1/5">
          <DateSection>2006</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Artist Talk at
            <Bold> Beeld voor Beeld, Amsterdam </Bold>
            presenting the film{" "}
            <span className="italic">Between the Lines</span>
          </Content>
          <Content>
            Artist Talk at
            <Bold> Sophia’s College, Mumbai </Bold>
            presenting the film{" "}
            <span className="italic">Between the Lines</span>
          </Content>
          <Content>
            Artist Talk at
            <Bold> Gargi College, Delhi University </Bold>
            presenting the film{" "}
            <span className="italic">Between the Lines</span>
          </Content>
        </div>
      </Container>

      <h2 className="uppercase text-center text-gray-600 tracking-wide text-sm font-semibold mt-12">
        GRANTS & AWARDS
      </h2>
      <Container className="mt-12">
        <div className="w-1/5">
          <DateSection>2019</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Shortlisted for the Grand Prix Images Vevey, Switzerland
          </Content>
        </div>
      </Container>
      <Container>
        <div className="w-1/5">
          <DateSection>2008</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>Nominated for the Foam Paul Huf Award, Amsterdam</Content>
        </div>
      </Container>
      <Container>
        <div className="w-1/5">
          <DateSection>2006</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Nominated for the Joop Swart Masterclass, World Press Photo, 2006
          </Content>
        </div>
      </Container>
      <Container>
        <div className="w-1/5">
          <DateSection>2005</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Awarded grant by the FORD Foundation to document HIV/AIDS and the
            Sexual dynamics across India
          </Content>
        </div>
      </Container>
      <Container>
        <div className="w-1/5">
          <DateSection>2004</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Awarded 1st prize in the Daily Life Story Section, Ram Nath Goenka —
            Indian Express Photo Award
          </Content>
        </div>
      </Container>
      <Container>
        <div className="w-1/5">
          <DateSection>2000</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Awarded Photography Fellowship by National Foundation for India,
            (NFI)
          </Content>
        </div>
      </Container>
      <Container>
        <div className="w-1/5">
          <DateSection>1998</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Name amongst the top 100 Photographers in the Golden Lights Awards,
            Maine, U.S.A.
          </Content>
        </div>
      </Container>
      <Container>
        <div className="w-1/5">
          <DateSection>1997</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Awarded Best Picture Portfolio by AIFACS in their annual All India
            Photography Competition
          </Content>
        </div>
      </Container>
      <Container>
        <div className="w-1/5">
          <DateSection>1996</DateSection>
        </div>
        <div className="flex-grow w-4/5">
          <Content>
            Awarded Best Picture Portfolio by AIFACS in their annual All India
            Photography Competition
          </Content>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
