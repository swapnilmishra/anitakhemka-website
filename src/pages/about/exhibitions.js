import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { setNavItem } from "../../components/utils"
import { PageTitles, sidenavItemsAbout } from "../../components/consts"
import SideNav from "../../components/sidenav"

const DateSection = ({ children }) => (
  <span class="inline-block font-medium text-gray-900 mr-2 text-sm">
    {children}
  </span>
)
const Content = ({ children }) => <p className="mb-2">{children}</p>
const Container = ({ children }) => {
  return <div className={`flex mt-12`}>{children}</div>
}

const IndexPage = () => {
  setNavItem(PageTitles.About)
  return (
    <Layout>
      <SEO title={PageTitles.About} />
      <Container>
        <div className="w-2/12">
          <SideNav sidenavItems={sidenavItemsAbout(1)} />
        </div>
        <div className="w-10/12 text-sm text-gray-900 tracking-wider">
          <div className="flex mt-2">
            <div className="w-1/12">
              <DateSection>2018</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                FotoFest International — An exhibition on contemporary
                photography and new media art from India, Houston, USA
              </Content>

              <Content>
                Le Temps des Villes Indiennes, Trajectoires Indiennes — a visual
                dialogue on contemporary urban India at the Ecole Nationale
                Supérieure d’Architecture Paris-Malaquais, Paris
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2016</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Self Portraits exhibited at the Serendipity Arts Festival, Goa
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2011</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Concurrent India — presenting artists with roots in India and
                Pakistan at the Helsinki Art Museum, Finland
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2010</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Samtidigt (Concurrent India) — presenting artists with roots in
                India and Pakistan at the Kulturhuset, Stockholm
              </Content>

              <Content>
                Exhibiting the Girl child and Women for an international
                retrospective celebrating the 40th anniversary of the French
                women's movement of liberation, Jean Monnet, Paris
              </Content>

              <Content>
                Where Three Dreams Cross: 150 Years of Photography from India,
                Pakistan and Bangladesh, at the Whitechapel Gallery, London and
                at the Fotomuseum, Winterthur
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2009</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                The Self and the Other — Portraiture in Contemporary Indian
                Photography, Espai 2 - Palau de la Virreina, Barcelona
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2008</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Project Sweet Sixteen at the International Institute for Asian
                Studies, on the occasion of ‘globalisering in Spiegelbeeld’
                during the India-Amsterdam Festival, Amsterdam
              </Content>

              <Content>Self Portraits, Exhibition Réalité/S, Geneva </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2007</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Project titled Between the Lines – India’s Third Gender
                exhibited at the Netherlands Transgender Film Festival,
                Amsterdam
              </Content>

              <Content>
                Self Portraits, Biennale Photoquai, Musee de quai Branly, Paris
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2006</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Watching Me, Watching India — Contemporary photography from
                India, Fotografie Forum International, Frankfurt
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2005</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Aravan Aravan — a photo exhibition on the annual mythological
                festival of the trans-gendered communities, Sexualities,
                Genders, and Rights: The first International Conference on Asia
                Pacific Queer Studies, Bangkok
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2004</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Eye to Eye — Women as seen through the eyes of 11 women
                photographers, Italian Cultural Centre, New Delhi
              </Content>

              <Content>
                Androgyne — an exhibition on alternate sexuality, Visual Arts
                Gallery, India Habitat Center, New Delhi
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2002</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Pandemic: Imaging AIDS, traveling exhibition presenting 20 years
                of the photographic response to the AIDS epidemic, Barcelona
              </Content>

              <Content>
                People Plus — A photo document of people living with HIV/AIDS in
                India at the XIV International AIDS Conference, Barcelona
              </Content>

              <Content>
                People Plus — A photo document of people living with HIV/AIDS in
                India exhibited for the launch of the Bill and Melinda Gates
                Foundation, New Delhi
              </Content>

              <Content>
                People Plus — A photo document of people living with HIV/AIDS in
                India exhibited at the United Nations Development Program (UNDP)
                Office in Delhi for the then UN Secretary-General Kofi Anan’s
                visit
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2001</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Women in the World of Work for International Labor Organization
                (ILO), Delhi
              </Content>

              <Content>
                Aravan Aravan – a photo exhibition on the annual mythological
                festival of the trans-gendered communities, New Delhi for UNAIDS
              </Content>
              <Content>
                People Plus — A photo document of people living with HIV/AIDS in
                India at the International Harm Reduction Conference by UNDP,
                Delhi
              </Content>
              <Content>
                Women in India - How Free? How Equal? — For the United Nations
                Development Program (UNDP), Delhi
              </Content>
              <Content>
                Beyond the Cuckoo’s Nest – a project on mentally challenged
                people exhibited in Kolkata & Mumbai
              </Content>
              <Content>
                Exhibition of the project on HIV/AIDS by National Foundation for
                India at Visual Arts Gallery, Delhi
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>2000</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Hope – a project on mentally challenged people exhibited at
                AIFACS Gallery, New Delhi
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>1999</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Naga Sadhus — a project on Indian Sadhus exhibited at the Gay
                Games Festival, Royal Tropical Institute, Amsterdam
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>1998</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Women of the World — a project on Indian Widows exhibited at the
                Melkweg Gallery, Amsterdam
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>1997</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                Violence Against Women —Indian Widows exhibited by UNICEF,
                Bangladesh
              </Content>
            </div>
          </div>
          <div className="flex mt-4">
            <div className="w-1/12">
              <DateSection>1996</DateSection>
            </div>
            <div className="flex-grow w-11/12">
              <Content>
                South Asian Girl Child: Hardship and Joys — a group exhibition
                by UNICEF, Nepal
              </Content>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default IndexPage
