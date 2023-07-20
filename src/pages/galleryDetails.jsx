import { Helmet } from 'react-helmet'
import { HeaderDark } from '../components/headerDark'
import { Footer } from '../components/footer'
import './galleryDetails.css'
import { ACTIVITIES, FAMILY, FLORA, TIPTOPFLEET, PANGA, KAYAK, SNORKEL, WALKS } from '../mocks/galleryData'

export function GalleryDetails ({ routeParams }) {
  let imageData = []
  let title = ''
  let subtitle = ''

  if (routeParams.query === 'activities') {
    imageData = ACTIVITIES
    title = 'Activities'
  }

  if (routeParams.query === 'the-wittmer-familys-story') {
    imageData = FAMILY
    title = 'THE WITTMER'
    subtitle = "FAMILY'S STORY"
  }

  if (routeParams.query === 'flora-and-fauna') {
    imageData = FLORA
    title = 'FLORA '
    subtitle = 'AND FAUNA'
  }

  if (routeParams.query === 'tip-top-fleet') {
    imageData = TIPTOPFLEET
    title = 'TIP TOP'
    subtitle = 'FLEET'
  }

  if (routeParams.query === 'panga-ride') {
    imageData = PANGA
    title = 'PANGA'
    subtitle = 'RIDE'
  }

  if (routeParams.query === 'walks') {
    imageData = WALKS
    title = 'WALKS'
    subtitle = ''
  }

  if (routeParams.query === 'snorkel') {
    imageData = SNORKEL
    title = 'SNORKEL'
    subtitle = ''
  }

  if (routeParams.query === 'kayak') {
    imageData = KAYAK
    title = 'KAYAK'
    subtitle = ''
  }

  return (
    <>
      <Helmet>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Gallery &#8211; Rolf Wittmer</title>
        <meta name='robots' content='max-image-preview:large' />
        <link rel='alternate' type='application/rss+xml' title='Rolf Wittmer &raquo; Feed' href='../feed/index.htm' />
        <link
          rel='alternate' type='application/rss+xml' title='Rolf Wittmer &raquo; Comments Feed'
          href='../comments/feed/index.htm'
        />
        <link
          rel='stylesheet' id='bricksforge-style-css'
          href='../wp-content/plugins/bricksforge/assets/css/style.css?ver=0.9.9.4' media='all'
        />
        <link
          rel='stylesheet' id='classNameic-theme-styles-css' href='../wp-includes/css/classNameic-themes.min.css?ver=6.2.2'
          media='all'
        />
        <link
          rel='stylesheet' id='automaticcss-core-css'
          href='../wp-content/uploads/automatic-css/automatic.css?ver=1687652138' media='all'
        />
        <link
          rel='stylesheet' id='bricks-frontend-css'
          href='../wp-content/themes/bricks/assets/css/frontend-light.min.css?ver=1689150705' media='all'
        />

        <link
          rel='stylesheet' id='bricks-child-css' href='../wp-content/themes/rolf-wittmer/style.css?ver=1687652142'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-color-palettes-css'
          href='../wp-content/uploads/bricks/css/color-palettes.min.css?ver=1689172937' media='all'
        />
        <link
          rel='stylesheet' id='bricks-theme-style-rolf_wittmer-css'
          href='../wp-content/uploads/bricks/css/theme-style-rolf_wittmer.min.css?ver=1689172939' media='all'
        />
        <link
          rel='stylesheet' id='bricks-post-16-css'
          href='../wp-content/uploads/bricks/css/post-16.min.css?ver=1689259305' media='all'
        />
        <link
          rel='stylesheet' id='bricks-post-1301-css'
          href='../wp-content/uploads/bricks/css/post-1301.min.css?ver=1689172951' media='all'
        />
        <link
          rel='stylesheet' id='bricks-post-1491-css'
          href='../../wp-content/uploads/bricks/css/post-1491.min.css?ver=1689172949' media='all'
        />
        <link
          rel='stylesheet' id='bricks-post-18-css'
          href='../wp-content/uploads/bricks/css/post-18.min.css?ver=1689217571' media='all'
        />
        <link
          rel='stylesheet' id='bricks-post-2365-css'
          href='../wp-content/uploads/bricks/css/post-2365.min.css?ver=1689259798' media='all'
        />
        <link
          rel='stylesheet' id='bricks-font-awesome-css'
          href='../wp-content/themes/bricks/assets/css/libs/font-awesome.min.css?ver=1688654584' media='all'
        />
        <link
          rel='stylesheet' id='bricks-themify-icons-css'
          href='../wp-content/themes/bricks/assets/css/libs/themify-icons.min.css?ver=1688654584' media='all'
        />
        <link
          rel='stylesheet' id='tablepress-default-css' href='../wp-content/tablepress-combined.min.css?ver=19'
          media='all'
        />
        <link
          rel='stylesheet' id='automaticcss-bricks-css'
          href='../wp-content/uploads/automatic-css/automatic-bricks.css?ver=1687652113' media='all'
        />

        <link rel='https://api.w.org/' href='../wp-json/index.htm' />
        <link rel='alternate' type='application/json' href='../wp-json/wp/v2/pages/1301' />
        <link rel='EditURI' type='application/rsd+xml' title='RSD' href='https://rwittmercom.delabridge.dev/xmlrpc.php?rsd' />
        <link rel='wlwmanifest' type='application/wlwmanifest+xml' href='../wp-includes/wlwmanifest.xml' />
        <meta name='generator' content='WordPress 6.2.2' />
        <link rel='canonical' href='index.htm' />
        <link rel='shortlink' href='index.htm?p=1301' />
        <link
          rel='alternate' type='application/json+oembed'
          href='../wp-json/oembed/1.0/embed-10?url=https%3A%2F%2Frwittmercom.delabridge.dev%2Fgallery%2F'
        />
        <link
          rel='alternate' type='text/xml+oembed'
          href='../wp-json/oembed/1.0/embed-11?url=https%3A%2F%2Frwittmercom.delabridge.dev%2Fgallery%2F&#038;format=xml'
        />

        <script id='ze-snippet' src='../ekr/snippet.js?key=2057b5ff-fdaf-4468-830b-b52ed9ebf8a7'> </script>

      </Helmet>
      <HeaderDark />
      <main id='brx-content'>
        <section className='brxe-section'>
          <div id='brxe-jqvxxe' className='brxe-container pad--xl gap--xl text--primary'>
            <h3 id='brxe-kiuqdi' className='brxe-heading'><span style={{ fontWeight: 500 }}>{title}</span> {subtitle}</h3>
            <div id='brxe-wrvzta' className='brxe-div pad--s'>
              <div id='brxe-uarloc' className='brxe-happyfiles-gallery'>
                <figure id='happyfiles-gallery-qxjojf' className='happyfiles-gallery lightbox'>
                  <ul className='crop' data-col='3'>
                    {
                      imageData.map((image, index) => {
                        return (
                          <li key={index} className='item' data-src={image}>
                            <figure>
                              <img
                                width='960' height='540'
                                src={image}
                                className='attachment-medium size-medium' alt='' decoding='async' loading='lazy'
                                srcSet={image}
                                sizes='(max-width: 960px) 100vw, 960px'
                              />
                            </figure>
                          </li>
                        )
                      })
                    }
                  </ul>
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
