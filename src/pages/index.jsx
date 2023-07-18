import { Helmet } from 'react-helmet'
import { Footer } from '../components/footer'
import { Header } from '../components/header'
import './index.css'

export function Index () {
  return (
    <>
      <Helmet>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>Rolft Wittmer</title>
        <meta name='robots' content='noindex, nofollow' />
        <link
          rel='alternate' type='application/rss+xml' title='Rolf Wittmer &raquo; Feed'
          href='https://rwittmercom.delabridge.dev/feed/'
        />
        <link
          rel='alternate' type='application/rss+xml' title='Rolf Wittmer &raquo; Comments Feed'
          href='https://rwittmercom.delabridge.dev/comments/feed/'
        />
        <link
          rel='stylesheet' id='bricksforge-style-css'
          href='https://rwittmercom.delabridge.dev/wp-content/plugins/bricksforge/assets/css/style.css?ver=0.9.9.2'
          media='all'
        />
        <link
          rel='stylesheet' id='wp-block-library-css'
          href='https://rwittmercom.delabridge.dev/wp-includes/css/dist/block-library/style.min.css?ver=6.2.2' media='all'
        />
        <link
          rel='stylesheet' id='classic-theme-styles-css'
          href='https://rwittmercom.delabridge.dev/wp-includes/css/classic-themes.min.css?ver=6.2.2' media='all'
        />
        <link
          rel='stylesheet' id='automaticcss-core-css'
          href='https://rwittmercom.delabridge.dev/wp-content/uploads/automatic-css/automatic.css?ver=1687652138'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-frontend-css'
          href='https://rwittmercom.delabridge.dev/wp-content/themes/bricks/assets/css/frontend-light.min.css?ver=1689150705'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-child-css'
          href='https://rwittmercom.delabridge.dev/wp-content/themes/rolf-wittmer/style.css?ver=1687652142' media='all'
        />
        <link
          rel='stylesheet' id='bricks-color-palettes-css'
          href='https://rwittmercom.delabridge.dev/wp-content/uploads/bricks/css/color-palettes.min.css?ver=1689172937'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-theme-style-rolf_wittmer-css'
          href='https://rwittmercom.delabridge.dev/wp-content/uploads/bricks/css/theme-style-rolf_wittmer.min.css?ver=1689172939'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-post-16-css'
          href='https://rwittmercom.delabridge.dev/wp-content/uploads/bricks/css/post-16.min.css?ver=1689259305'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-post-20-css'
          href='https://rwittmercom.delabridge.dev/wp-content/uploads/bricks/css/post-20.min.css?ver=1689258195'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-post-18-css'
          href='https://rwittmercom.delabridge.dev/wp-content/uploads/bricks/css/post-18.min.css?ver=1689217571'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-post-2365-css'
          href='https://rwittmercom.delabridge.dev/wp-content/uploads/bricks/css/post-2365.min.css?ver=1689259798'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-post-1379-css'
          href='https://rwittmercom.delabridge.dev/wp-content/uploads/bricks/css/post-1379.min.css?ver=1689172944'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-font-awesome-css'
          href='https://rwittmercom.delabridge.dev/wp-content/themes/bricks/assets/css/libs/font-awesome.min.css?ver=1688654584'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-themify-icons-css'
          href='https://rwittmercom.delabridge.dev/wp-content/themes/bricks/assets/css/libs/themify-icons.min.css?ver=1688654584'
          media='all'
        />
        <link
          rel='stylesheet' id='bricks-photoswipe-css'
          href='https://rwittmercom.delabridge.dev/wp-content/themes/bricks/assets/css/libs/photoswipe.min.css?ver=1688654584'
          media='all'
        />
        <link
          rel='stylesheet' id='tablepress-default-css'
          href='https://rwittmercom.delabridge.dev/wp-content/tablepress-combined.min.css?ver=19' media='all'
        />
        <link
          rel='stylesheet' id='automaticcss-bricks-css'
          href='https://rwittmercom.delabridge.dev/wp-content/uploads/automatic-css/automatic-bricks.css?ver=1687652113'
          media='all'
        />
        <style id='bricks-frontend-inline-inline-css' />
        <link rel='https://api.w.org/' href='https://rwittmercom.delabridge.dev/wp-json/' />
        <link rel='alternate' type='application/json' href='https://rwittmercom.delabridge.dev/wp-json/wp/v2/pages/8' />
        <link rel='EditURI' type='application/rsd+xml' title='RSD' href='https://rwittmercom.delabridge.dev/xmlrpc.php?rsd' />
        <link
          rel='wlwmanifest' type='application/wlwmanifest+xml'
          href='https://rwittmercom.delabridge.dev/wp-includes/wlwmanifest.xml'
        />
        <meta name='generator' content='WordPress 6.2.2' />
        <link rel='canonical' href='https://rwittmercom.delabridge.dev/' />
        <link rel='shortlink' href='https://rwittmercom.delabridge.dev/' />
        <link
          rel='alternate' type='application/json+oembed'
          href='https://rwittmercom.delabridge.dev/wp-json/oembed/1.0/embed?url=https%3A%2F%2Frwittmercom.delabridge.dev%2F'
        />
        <link
          rel='alternate' type='text/xml+oembed'
          href='https://rwittmercom.delabridge.dev/wp-json/oembed/1.0/embed?url=https%3A%2F%2Frwittmercom.delabridge.dev%2F&amp;format=xml'
        />

        <script
          id='ze-snippet'
          src='https://static.zdassets.com/ekr/snippet.js?key=2057b5ff-fdaf-4468-830b-b52ed9ebf8a7'
        />

      </Helmet>
      <a className='skip-link' href='#brx-content' aria-label='Skip to main content'>Skip to main content</a>

      <a className='skip-link' href='#brx-footer' aria-label='Skip to footer'>Skip to footer</a>
      <Header />
      <main id='brx-content'>
        <section id='brxe-btbjuh' className='brxe-section rw_section--hero'>
          <div className='brxe-container text--white rw_container--hero'>
            <div className='brxe-block rw_flex__grow'>
              <div className='brxe-block center--all rw_flex__grow'>
                <h1 id='brxe-weqvke' className='brxe-heading'>Galapagos on board!</h1>
                <p id='brxe-vyrznt' className='brxe-heading rw_h1__leed--about-us'>Rolf Wittmer. Tip Top Fleet</p>
              </div>
              <div id='brxe-hvuemr' className='brxe-block center--all'><a
                className='brxe-button bricks-button'
                href='https://rwittmercom.delabridge.dev/contact-us/'
                                                                       >Book
                                                                       </a>
              </div>
            </div>
          </div>
        </section>
        <section id='brxe-oixrtp' className='brxe-section'>
          <div id='brxe-vdhjkb' className='brxe-container'>
            <div id='brxe-bgyixn' className='brxe-div'><span id='brxe-ivcwhc' className='brxe-text-basic'><span
              style={{ fontSize: '3.6rem' }}
                                                                                                          >Start <span
                                                                                                            className='rw_p--home-itineraries--highlighted'
                                                                                                                 >planning
                                                                                                          </span> your Galapagos
              trip!
                                                                                                          </span>
                                                       </span>
              <div id='brxe-ymrokt' className='brxe-div'><span id='brxe-rznruk' className='brxe-text-basic'>Contact our
                <span className='rw_p--home-itineraries--highlighted'>sales team</span>.
                                                         </span><a
                className='brxe-button rw_btn--primary rw_btn--outline-primary bricks-button'
                href='https://rwittmercom.delabridge.dev/contact-us/'
                     >Click here
                     </a>
              </div>
            </div>
            <div
              id='itinerary-slider' data-script-id='ljcvfc' className='brxe-slider-nested splide'
              data-splide='{&quot;type&quot;:&quot;slide&quot;,&quot;direction&quot;:&quot;ltr&quot;,&quot;keyboard&quot;:&quot;global&quot;,&quot;height&quot;:&quot;50rem&quot;,&quot;gap&quot;:&quot;0px&quot;,&quot;start&quot;:0,&quot;perPage&quot;:&quot;3&quot;,&quot;perMove&quot;:1,&quot;speed&quot;:400,&quot;interval&quot;:3000,&quot;autoHeight&quot;:false,&quot;autoplay&quot;:false,&quot;pauseOnHover&quot;:false,&quot;pauseOnFocus&quot;:false,&quot;arrows&quot;:false,&quot;pagination&quot;:true,&quot;breakpoints&quot;:{&quot;991&quot;:{&quot;perPage&quot;:&quot;2&quot;},&quot;767&quot;:{&quot;perPage&quot;:&quot;1&quot;}}}'
            >
              <div className='splide__track'>
                <div className='splide__list'>
                  <div id='itinerary-slide' className='brxe-vhzbol brxe-block itinerary-slide'>
                    <div className='brxe-losylq brxe-block flip-container'>
                      <div className='brxe-szqthb brxe-block flipper'>
                        <div className='brxe-tjmawm brxe-div front'><img
                          width='960' height='540'
                          src='https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-floreana-1920x1080px.jpg'
                          className='brxe-bvzrhi brxe-image css-filter size-full' alt=''
                          decoding='async' loading='lazy'
                          srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-floreana-1920x1080px.jpg 960w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-floreana-1920x1080px-480x270.jpg 480w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-floreana-1920x1080px-768x432.jpg 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-floreana-1920x1080px-600x338.jpg 600w'
                          sizes='(max-width: 960px) 100vw, 960px'
                                                                    />
                          <div className='brxe-fiqviu brxe-div'>
                            <div className='brxe-djbhos brxe-div'><span
                              className='brxe-brsrxz brxe-heading'
                                                                  >East Route
                                                                  </span><span
                              className='brxe-suggjr brxe-heading'
                                   >Option 2
                                   </span>
                            </div>
                            <div className='brxe-jrgnxq brxe-div'><span
                              className='brxe-qpqzro brxe-heading'
                                                                  >8 Days / 7 Nights
                                                                  </span>
                            </div>
                            <div className='brxe-vkpvoh brxe-div'><span
                              className='brxe-tmvzje brxe-heading'
                                                                  >Departures on <span
                                                                    style={{ color: 'var(--secondary)' }}
                                                                                 >Friday
                                                                  </span>
                                                                  </span><span
                              className='brxe-dqrqrs brxe-heading'
                                   >Returns on <span
                                                                           style={{ color: 'var(--secondary)' }}
                                                                                     >Friday
                                                                                     </span>
                                   </span>
                            </div>
                          </div><a
                            className='brxe-iafnfm brxe-button bricks-button'
                            href='https://www.tiptop.com.ec/wp-content/uploads/tip-top-ii-v-itinerary-8d-7n-east-option.pdf'
                                >More
                            Information
                                </a>
                        </div>
                        <div className='brxe-uhavcy brxe-div back'><span className='brxe-erabam brxe-heading'>8
                          Days / 7 Nights
                                                                   </span>
                          <div className='brxe-steawf brxe-text-basic'>Islands that you will visit:
                            Baltra, Española, Floreana, Genovesa, Lobos, Plaza, San Cristobal, Santa
                            Cruz, Santa Fe
                          </div><a
                            className='brxe-izhfpt brxe-button bricks-button'
                            href='https://www.tiptop.com.ec/wp-content/uploads/tip-top-ii-v-itinerary-8d-7n-east-option.pdf'
                            target='_blank' rel='noreferrer'
                                >Download Itinerary<i
                                  className='fas fa-file-arrow-down'
                                                   />
                                </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='itinerary-slide' className='brxe-vhzbol brxe-block itinerary-slide'>
                    <div className='brxe-losylq brxe-block flip-container'>
                      <div className='brxe-szqthb brxe-block flipper'>
                        <div className='brxe-tjmawm brxe-div front'><img
                          width='1920' height='1080'
                          src='https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-seymour-1920x1080px.jpg'
                          className='brxe-bvzrhi brxe-image css-filter size-full' alt=''
                          decoding='async' loading='lazy'
                          srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-seymour-1920x1080px.jpg 1920w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-seymour-1920x1080px-960x540.jpg 960w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-seymour-1920x1080px-480x270.jpg 480w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-seymour-1920x1080px-768x432.jpg 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-seymour-1920x1080px-1536x864.jpg 1536w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-seymour-1920x1080px-1200x675.jpg 1200w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-seymour-1920x1080px-600x338.jpg 600w'
                          sizes='(max-width: 1920px) 100vw, 1920px'
                                                                    />
                          <div className='brxe-fiqviu brxe-div'>
                            <div className='brxe-djbhos brxe-div'><span
                              className='brxe-brsrxz brxe-heading'
                                                                  >West Route
                                                                  </span><span
                              className='brxe-suggjr brxe-heading'
                                   >Option 1
                                   </span>
                            </div>
                            <div className='brxe-jrgnxq brxe-div'><span
                              className='brxe-qpqzro brxe-heading'
                                                                  >8 Days / 7 Nights
                                                                  </span>
                            </div>
                            <div className='brxe-vkpvoh brxe-div'><span
                              className='brxe-tmvzje brxe-heading'
                                                                  >Departures on <span
                                                                    style={{ color: 'var(--secondary)' }}
                                                                                 >Friday
                                                                  </span>
                                                                  </span><span
                              className='brxe-dqrqrs brxe-heading'
                                   >Returns on <span
                                                                           style={{ color: 'var(--secondary)' }}
                                                                                     >Friday
                                                                                     </span>
                                   </span>
                            </div>
                          </div><a
                            className='brxe-iafnfm brxe-button bricks-button'
                            href='https://www.tiptop.com.ec/wp-content/uploads/tip-top-ii-v-itinerary-8d-7n-west-option.pdf'
                                >More
                            Information
                                </a>
                        </div>
                        <div className='brxe-uhavcy brxe-div back'><span className='brxe-erabam brxe-heading'>8
                          Days / 7 Nights
                                                                   </span>
                          <div className='brxe-steawf brxe-text-basic'>Islands that you will visit:
                            Baltra, Bartolome, Chinese Hat, Fernandina, Isabela, Mosquera, North
                            Seymour, Rabida, Santa Cruz, Santiago
                          </div><a
                            className='brxe-izhfpt brxe-button bricks-button'
                            href='https://www.tiptop.com.ec/wp-content/uploads/tip-top-ii-v-itinerary-8d-7n-west-option.pdf'
                            target='_blank' rel='noreferrer'
                                >Download Itinerary<i
                                  className='fas fa-file-arrow-down'
                                                   />
                                </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='itinerary-slide' className='brxe-vhzbol brxe-block itinerary-slide'>
                    <div className='brxe-losylq brxe-block flip-container'>
                      <div className='brxe-szqthb brxe-block flipper'>
                        <div className='brxe-tjmawm brxe-div front'><img
                          width='1920' height='1080'
                          src='https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-isla-lobos-1920x1080px.jpg'
                          className='brxe-bvzrhi brxe-image css-filter size-full' alt=''
                          decoding='async' loading='lazy'
                          srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-isla-lobos-1920x1080px.jpg 1920w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-isla-lobos-1920x1080px-960x540.jpg 960w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-isla-lobos-1920x1080px-480x270.jpg 480w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-isla-lobos-1920x1080px-768x432.jpg 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-isla-lobos-1920x1080px-1536x864.jpg 1536w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-isla-lobos-1920x1080px-1200x675.jpg 1200w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-isla-lobos-1920x1080px-600x338.jpg 600w'
                          sizes='(max-width: 1920px) 100vw, 1920px'
                                                                    />
                          <div className='brxe-fiqviu brxe-div'>
                            <div className='brxe-djbhos brxe-div'><span
                              className='brxe-brsrxz brxe-heading'
                                                                  >East Route
                                                                  </span><span
                              className='brxe-suggjr brxe-heading'
                                   >Option 2
                                   </span>
                            </div>
                            <div className='brxe-jrgnxq brxe-div'><span
                              className='brxe-qpqzro brxe-heading'
                                                                  >5 Days / 4 Nights
                                                                  </span>
                            </div>
                            <div className='brxe-vkpvoh brxe-div'><span
                              className='brxe-tmvzje brxe-heading'
                                                                  >Departures on <span
                                                                    style={{ color: 'var(--secondary)' }}
                                                                                 >Monday
                                                                  </span>
                                                                  </span><span
                              className='brxe-dqrqrs brxe-heading'
                                   >Returns on <span
                                                                           style={{ color: 'var(--secondary)' }}
                                                                                     >Friday
                                                                                     </span>
                                   </span>
                            </div>
                          </div><a
                            className='brxe-iafnfm brxe-button bricks-button'
                            href='https://www.tiptop.com.ec/wp-content/uploads/tip-top-ii-v-itinerary-5d-4n.pdf'
                                >More
                            Information
                                </a>
                        </div>
                        <div className='brxe-uhavcy brxe-div back'><span className='brxe-erabam brxe-heading'>5
                          Days / 4 Nights
                                                                   </span>
                          <div className='brxe-steawf brxe-text-basic'>Islands that you will visit:
                            Baltra, Española, Floreana, Lobos, San Cristobal, Santa Cruz
                          </div><a
                            className='brxe-izhfpt brxe-button bricks-button'
                            href='https://www.tiptop.com.ec/wp-content/uploads/tip-top-ii-v-itinerary-5d-4n.pdf'
                            target='_blank' rel='noreferrer'
                                >Download Itinerary<i
                                  className='fas fa-file-arrow-down'
                                                   />
                                </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id='itinerary-slide' className='brxe-vhzbol brxe-block itinerary-slide'>
                    <div className='brxe-losylq brxe-block flip-container'>
                      <div className='brxe-szqthb brxe-block flipper'>
                        <div className='brxe-tjmawm brxe-div front'><img
                          width='1920' height='1080'
                          src='https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-plazas-1920x1080px.jpg'
                          className='brxe-bvzrhi brxe-image css-filter size-full' alt=''
                          decoding='async' loading='lazy'
                          srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-plazas-1920x1080px.jpg 1920w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-plazas-1920x1080px-960x540.jpg 960w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-plazas-1920x1080px-480x270.jpg 480w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-plazas-1920x1080px-768x432.jpg 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-plazas-1920x1080px-1536x864.jpg 1536w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-plazas-1920x1080px-1200x675.jpg 1200w, https://rwittmercom.delabridge.dev/wp-content/uploads/galapagos-plazas-1920x1080px-600x338.jpg 600w'
                          sizes='(max-width: 1920px) 100vw, 1920px'
                                                                    />
                          <div className='brxe-fiqviu brxe-div'>
                            <div className='brxe-djbhos brxe-div'><span
                              className='brxe-brsrxz brxe-heading'
                                                                  >East Route
                                                                  </span><span
                              className='brxe-suggjr brxe-heading'
                                   >Option 2
                                   </span>
                            </div>
                            <div className='brxe-jrgnxq brxe-div'><span
                              className='brxe-qpqzro brxe-heading'
                                                                  >4 Days / 3 Nights
                                                                  </span>
                            </div>
                            <div className='brxe-vkpvoh brxe-div'><span
                              className='brxe-tmvzje brxe-heading'
                                                                  >Departures on <span
                                                                    style={{ color: 'var(--secondary)' }}
                                                                                 >Friday
                                                                  </span>
                                                                  </span><span
                              className='brxe-dqrqrs brxe-heading'
                                   >Returns on <span
                                                                           style={{ color: 'var(--secondary)' }}
                                                                                     >Monday
                                                                                     </span>
                                   </span>
                            </div>
                          </div><a
                            className='brxe-iafnfm brxe-button bricks-button'
                            href='https://www.tiptop.com.ec/wp-content/uploads/tip-top-ii-v-itinerary-4d-3n.pdf'
                                >More
                            Information
                                </a>
                        </div>
                        <div className='brxe-uhavcy brxe-div back'><span className='brxe-erabam brxe-heading'>4
                          Days / 3 Nights
                                                                   </span>
                          <div className='brxe-steawf brxe-text-basic'>Islands that you will visit:
                            Baltra, Genovesa, Plaza, Santa Cruz, Santa Fe
                          </div><a
                            className='brxe-izhfpt brxe-button bricks-button'
                            href='https://www.tiptop.com.ec/wp-content/uploads/tip-top-ii-v-itinerary-4d-3n.pdf'
                            target='_blank' rel='noreferrer'
                                >Download Itinerary<i
                                  className='fas fa-file-arrow-down'
                                                   />
                                </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='brxe-ijueoj' className='brxe-section'>
          <div id='brxe-hgxden' className='brxe-block center--all text--white'>
            <div className='brxe-div grid--2'>
              <h2 id='brxe-zysgiy' className='brxe-heading col-end--last text--left'>Our passengers <span
                className='rw_h2--alt'
                                                                                                    >Reviews
                                                                                                    </span>
              </h2>
            </div>
          </div>
          <div id='brxe-qqkpyf' className='brxe-block center--all'>
            <div id='brxe-nwbqta' className='brxe-block gap--xl'>
              <div
                id='brxe-iwyzgn' data-script-id='iwyzgn' className='brxe-slider-nested splide'
                data-splide='{&quot;type&quot;:&quot;loop&quot;,&quot;direction&quot;:&quot;ltr&quot;,&quot;keyboard&quot;:&quot;global&quot;,&quot;height&quot;:&quot;50vh&quot;,&quot;gap&quot;:&quot;0px&quot;,&quot;start&quot;:0,&quot;perPage&quot;:1,&quot;perMove&quot;:1,&quot;speed&quot;:400,&quot;interval&quot;:&quot;2000&quot;,&quot;autoHeight&quot;:false,&quot;autoplay&quot;:true,&quot;pauseOnHover&quot;:true,&quot;pauseOnFocus&quot;:false,&quot;arrows&quot;:true,&quot;pagination&quot;:false}'
              >
                <div className='splide__track'>
                  <div className='splide__list'>
                    <div className='brxe-block'><a
                      id='brxe-slkmvn' className='brxe-image tag bricks-lightbox'
                      href='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-sharon-d-hq.png'
                      data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-sharon-d-hq.png'
                      data-pswp-width='800' data-pswp-height='300'
                                                ><img
                                                  width='800' height='300'
                                                  src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-sharon-d-hq.png'
                                                  className='css-filter size-full' alt='' decoding='async' loading='lazy'
                                                  srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-sharon-d-hq.png 800w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-sharon-d-hq-480x180.png 480w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-sharon-d-hq-768x288.png 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-sharon-d-hq-600x225.png 600w'
                                                  sizes='(max-width: 800px) 100vw, 800px'
                                                />
                                                </a>
                    </div>
                    <div className='brxe-block'><a
                      id='brxe-lfnxzp' className='brxe-image tag bricks-lightbox'
                      href='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-ruth-cook-hq.png'
                      data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-ruth-cook-hq.png'
                      data-pswp-width='800' data-pswp-height='300'
                                                ><img
                                                  width='800' height='300'
                                                  src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-ruth-cook-hq.png'
                                                  className='css-filter size-full' alt='' decoding='async' loading='lazy'
                                                  srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-ruth-cook-hq.png 800w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-ruth-cook-hq-480x180.png 480w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-ruth-cook-hq-768x288.png 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-ruth-cook-hq-600x225.png 600w'
                                                  sizes='(max-width: 800px) 100vw, 800px'
                                                />
                                                </a>
                    </div>
                    <div className='brxe-block'><a
                      id='brxe-aridtf' className='brxe-image tag bricks-lightbox'
                      href='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-karen-goodman-hq.png'
                      data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-karen-goodman-hq.png'
                      data-pswp-width='800' data-pswp-height='300'
                                                ><img
                                                  width='800' height='300'
                                                  src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-karen-goodman-hq.png'
                                                  className='css-filter size-full' alt='' decoding='async' loading='lazy'
                                                  srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-karen-goodman-hq.png 800w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-karen-goodman-hq-480x180.png 480w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-karen-goodman-hq-768x288.png 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-karen-goodman-hq-600x225.png 600w'
                                                  sizes='(max-width: 800px) 100vw, 800px'
                                                />
                                                </a>
                    </div>
                    <div className='brxe-block'><a
                      id='brxe-qsnquy' className='brxe-image tag bricks-lightbox'
                      href='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-the-donaldson-hq.png'
                      data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-the-donaldson-hq.png'
                      data-pswp-width='800' data-pswp-height='300'
                                                ><img
                                                  width='800' height='300'
                                                  src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-the-donaldson-hq.png'
                                                  className='css-filter size-full' alt='' decoding='async' loading='lazy'
                                                  srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-the-donaldson-hq.png 800w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-the-donaldson-hq-480x180.png 480w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-the-donaldson-hq-768x288.png 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-reviews-section-the-donaldson-hq-600x225.png 600w'
                                                  sizes='(max-width: 800px) 100vw, 800px'
                                                />
                                                </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='brxe-bcwfto' className='brxe-section'>
          <div id='brxe-ahfmga' className='brxe-div'>
            <div id='brxe-orlnvy' className='brxe-block flex--row justify-content--around'>
              <div className='brxe-div text--white rw_card'><svg
                className='brxe-icon rw_card--icon' id='brxe-iqvqif'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'
                                                            >
                <path
                  d='M50.08 1C77.13 1.07 99.05 22.92 99 50.05 98.94 77.27 76.98 99.07 49.81 99 22.84 98.93.91 76.87 1.01 49.91 1.09 22.83 23.08.92 50.08 1Zm44.74 48.24C94.6 24.95 74.17 4.99 49.71 5.18 24.94 5.38 4.9 25.74 5.18 50.45c.29 24.93 20.95 45.21 46.41 44.34 24.44-.84 43.62-21.19 43.23-45.54ZM66.53 70.45c2.76-2.43 4.95-5.29 6.3-8.74.49-1.25-.12-2.45-1.38-2.81-1.06-.3-1.99.21-2.53 1.42-1.52 3.38-3.77 6.18-6.82 8.31-4.26 2.98-9.07 3.96-14.16 3.5-7.78-.7-13.39-4.63-16.79-11.68-.12-.24-.22-.49-.37-.71-.62-.88-1.66-1.16-2.59-.7-.96.47-1.4 1.52-1.05 2.55.3.9.71 1.77 1.19 2.59 4.89 8.23 12.31 11.98 20.11 12.18 7.8.02 13.37-1.76 18.08-5.9Zm-.68-38.98c-4.97.7-9.18 5.68-9.02 10.66.04 1.2.77 1.93 1.96 1.97 1.39.04 2.13-.73 2.23-2.3.2-3.36 2.87-6.07 6.18-6.28 3.28-.21 6.24 2.11 6.86 5.4.09.49.08 1.01.17 1.5.16.98.83 1.58 1.81 1.67 1.44.13 2.33-.7 2.32-2.15-.03-5.77-5.02-10.63-10.92-10.65-.53.06-1.06.1-1.59.17Zm-44.18 10.5c0 1.3.68 2.06 1.89 2.13 1.27.07 2.11-.62 2.27-1.87.06-.47.06-.95.16-1.41.72-3.31 3.74-5.57 7.06-5.28 3.27.28 5.77 2.97 5.96 6.38.08 1.47.93 2.26 2.34 2.18 1.23-.07 1.92-.94 1.85-2.35-.31-5.84-5.05-10.4-10.84-10.42-5.71-.03-10.7 4.95-10.68 10.64Z'
                  style={{ fill: '#fff' }}
                />
                                                            </svg>
                <div
                  data-script-id='rnlbcf' className='brxe-counter text--center rw_card--heading'
                  data-bricks-counter-options='{&quot;countFrom&quot;:&quot;0&quot;,&quot;countTo&quot;:&quot;35&quot;,&quot;duration&quot;:1000,&quot;thousands&quot;:&quot;&quot;}'
                >
                  <span className='prefix'>+</span><span className='count'>0</span><span className='suffix'> K</span>
                </div><span id='brxe-zsrghb' className='brxe-heading text--center rw_card--text'>Happy
                  Customers
                      </span>
              </div>
              <div className='brxe-div text--white rw_card'><svg
                className='brxe-icon rw_card--icon' id='brxe-frqucu'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'
                                                            >
                <path
                  d='M85.84 38.76h10.99c1.65 0 2.17.53 2.17 2.21v18.42c0 1.65-.53 2.17-2.21 2.17-3.36 0-6.72.03-10.07-.02-.71 0-.97.23-1.2.87-.48 1.37-1.02 2.73-1.67 4.03-.36.73-.22 1.11.31 1.63 2.35 2.3 4.67 4.64 6.99 6.97 1.24 1.25 1.25 1.95.03 3.17-4.34 4.34-8.68 8.68-13.03 13.02-1.17 1.17-1.89 1.16-3.09-.04-2.35-2.35-4.72-4.69-7.04-7.06-.49-.5-.86-.67-1.55-.29-1.54.85-3.21 1.42-4.92 2.01v10.81c0 1.87-.47 2.35-2.34 2.35H41c-1.73 0-2.24-.51-2.24-2.23 0-3.36-.02-6.72.01-10.07 0-.63-.13-.96-.79-1.15a22.46 22.46 0 0 1-4.22-1.74c-.58-.31-.93-.22-1.39.24-2.35 2.4-4.74 4.76-7.11 7.13-1.24 1.23-1.95 1.24-3.16 0-3.66-3.77-7.63-7.24-10.86-11.42C-7.06 56.09-.05 21.76 26.04 7.19 45.03-3.41 68.8-.16 84.23 15.16c2.33 2.32 4.66 4.65 6.98 6.98 1.18 1.19 1.18 1.9 0 3.1-2.39 2.4-4.79 4.81-7.2 7.19-.43.43-.52.76-.22 1.31.85 1.58 1.45 3.28 2.06 5.03Zm-9.09-17.15C62.1 7.84 38.08 7.08 22.6 22.46c-15.33 15.23-15.01 39.3-1.2 54.1.27-.25.54-.5.8-.76l11.37-11.37c1.23-1.23 1.91-1.23 3.19-.07 4.42 4.03 9.65 5.81 15.54 5.05 7.74-1 13.27-5.24 15.99-12.58 2.72-7.36 1.27-14.14-3.93-20.06-1.15-1.31-1.17-1.97.05-3.19 3.76-3.77 7.53-7.53 11.3-11.29.29-.28.68-.46 1.03-.69Zm-9.2 13.75c7.99 9.63 6.55 22.59-.84 30.47-7.21 7.69-21.04 10.42-31.31 1.81-5.37 5.37-10.73 10.73-15.96 15.97 1.37 1.37 2.84 2.85 4.35 4.37.18-.17.43-.39.66-.63 2.26-2.25 4.51-4.51 6.76-6.76.93-.93 1.45-1.02 2.62-.39 2.13 1.13 4.34 2.07 6.66 2.73 1.07.3 1.53.97 1.52 2.09a609.3 609.3 0 0 0 0 9.56c0 .36-.1.74.1 1.09h16.18V85.03c0-1.26.34-1.74 1.5-2.08 2.32-.68 4.53-1.6 6.66-2.74 1.2-.64 1.7-.54 2.7.45 2.23 2.23 4.46 4.46 6.7 6.68.25.25.44.61.67.65 3.86-3.86 7.65-7.64 11.47-11.46-.17-.18-.39-.43-.62-.67-2.28-2.28-4.54-4.57-6.84-6.83-.72-.71-.93-1.47-.44-2.38 1.22-2.24 2.19-4.58 2.9-7.03.27-.94.92-1.35 1.9-1.34 2.44.02 4.88 0 7.32 0h3.46V42H85.04c-1.3 0-1.75-.32-2.13-1.58-.68-2.28-1.59-4.46-2.71-6.56-.65-1.21-.55-1.71.43-2.7 2.25-2.26 4.51-4.51 6.76-6.77.23-.23.55-.41.59-.65-1.54-1.54-3.02-3.01-4.43-4.41L67.54 35.34ZM81.13 16.8C63.6.22 34.26-.13 16.4 19.55c-17.35 19.12-14.28 46.53.39 61.5.74-.72 1.48-1.44 2.21-2.16-15.54-16.85-14.1-42.05-.1-57.18 7.19-7.77 16.03-12.4 26.57-13.55C58.2 6.78 69.33 10.6 78.89 19c.76-.75 1.48-1.46 2.25-2.21ZM48.52 34.48v-8.34c0-1.28.61-2.03 1.63-2.02 1.01 0 1.62.75 1.62 2.03 0 5.59.01 11.19-.01 16.78 0 .66.14.99.82 1.25 2.74 1.07 4.39 3.89 4.04 6.72a6.563 6.563 0 0 1-5.73 5.74c-2.82.35-5.65-1.3-6.73-4.04-.26-.67-.58-.83-1.25-.83-3.46.03-6.92.02-10.37.01-1.12 0-1.8-.52-1.92-1.42-.14-1.05.65-1.83 1.91-1.83 3.46-.01 6.92-.02 10.37 0 .65 0 1-.13 1.26-.81.63-1.7 1.86-2.92 3.55-3.55.68-.26.82-.6.81-1.26-.03-2.81-.01-5.63-.01-8.44Zm1.66 12.43c-1.77-.02-3.25 1.41-3.29 3.19a3.267 3.267 0 0 0 3.27 3.31c1.76 0 3.24-1.48 3.24-3.24 0-1.78-1.44-3.24-3.21-3.26Zm12.68 6.54c-2.53 9.72-14.24 13.05-21.67 6.15-.93-.86-1.9-.95-2.59-.22-.71.75-.6 1.68.34 2.57 2.98 2.82 6.53 4.36 10.62 4.47 10.36.28 18.19-8.62 16.62-18.87-.51-3.38-2.02-6.3-4.42-8.75-1-1.02-2.5-.73-2.84.53-.21.78.14 1.35.67 1.9 2.4 2.52 3.61 5.52 3.64 8.58 0 1.51-.11 2.59-.39 3.64Zm-45.17-1.68c.9-.08 1.52-.77 1.51-1.62 0-.85-.63-1.56-1.53-1.6-1.15-.05-2.31-.05-3.46 0-.9.04-1.51.76-1.51 1.61 0 .85.62 1.53 1.53 1.6.57.05 1.15 0 1.73 0 .58 0 1.16.04 1.73 0Zm34.08-37.46c-.06-.96-.75-1.61-1.64-1.6-.89.01-1.56.67-1.59 1.64-.04 1.08-.04 2.17 0 3.25.04.96.75 1.61 1.63 1.6.88-.01 1.54-.67 1.6-1.64.03-.51 0-1.02 0-1.53 0-.58.03-1.15 0-1.73ZM22.85 32.54c-.98-.6-1.97-1.19-2.99-1.72-.81-.42-1.68-.13-2.11.61-.43.72-.26 1.67.49 2.15.99.64 2.02 1.25 3.08 1.75 1.06.51 2.19-.26 2.23-1.68.02-.32-.21-.81-.71-1.11Zm44.83-9.59c.65-1.06 1.31-2.13 1.86-3.25.38-.77.07-1.49-.65-1.92-.76-.45-1.57-.38-2.08.36-.7 1.03-1.34 2.12-1.86 3.24-.49 1.05.35 2.17 1.61 2.16.4 0 .86-.17 1.12-.59ZM23.3 67.27c.5-.53.38-1.29-.1-1.86-.47-.57-1.13-.82-1.81-.47-1.11.57-2.19 1.19-3.24 1.86-.68.44-.78 1.18-.49 1.9.26.65.8.97 1.72 1 1.28-.64 2.8-1.23 3.92-2.42Zm7.52-47.4c.5 1 1.06 1.96 1.66 2.9.51.8 1.47 1 2.21.56.76-.45 1.01-1.34.55-2.21-.5-.96-1.06-1.89-1.62-2.81-.3-.49-.75-.77-1.26-.77-1.33-.03-2.13 1.18-1.56 2.33Zm48.09 56.82c-.75.77-1.48 1.51-2.17 2.21l2.17 2.26 2.24-2.24-2.23-2.23Zm10.38-28.11v3.13h3.15v-3.13h-3.15ZM48.57 89.31v3.12h3.17v-3.12h-3.17Z'
                  style={{ fill: '#fff' }}
                />
                                                            </svg>
                <div
                  data-script-id='qepknr' className='brxe-counter text--center rw_card--heading'
                  data-bricks-counter-options='{&quot;countFrom&quot;:&quot;0&quot;,&quot;countTo&quot;:&quot;53&quot;,&quot;duration&quot;:1000,&quot;thousands&quot;:&quot;&quot;}'
                >
                  <span className='prefix'>+</span><span className='count'>0</span>
                </div><span id='brxe-hanzfs' className='brxe-heading text--center rw_card--text'>Years of
                  Experience
                      </span>
              </div>
              <div className='brxe-div text--white rw_card'><svg
                className='brxe-icon rw_card--icon' id='brxe-aptwfu'
                xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'
                                                            >
                <path
                  d='M99 61.16c-.3.35-.19.8-.29 1.19-1.09 4.56-4.55 7.73-9.23 8.44-.25.04-.5.09-.73.14-.22.27-.14.57-.14.85 0 3.65-.01 7.29 0 10.94 0 .65-.05 1.24-.67 1.57-.6.31-1.15.11-1.71-.22-7.32-4.25-14.66-8.47-21.99-12.72a3.11 3.11 0 0 0-1.63-.43c-10.27.01-20.53.02-30.8 0-5.1 0-9.15-2.84-10.74-7.44-.44-1.28-.61-2.61-.57-3.96.03-.95.54-1.56 1.31-1.56.78 0 1.35.6 1.32 1.56-.05 2.2.55 4.17 1.99 5.85 1.71 1.98 3.91 2.91 6.52 2.91 10.43 0 20.85 0 31.28-.01.87 0 1.61.21 2.35.64 6.52 3.79 13.06 7.55 19.59 11.32.3.17.6.32.91.49.26-.39.15-.75.16-1.08v-9.6c0-1.36.4-1.74 1.78-1.76 5.09-.07 8.59-3.59 8.59-8.69V26.97c0-5.02-3.26-8.45-8.27-8.72-.19-.01-.38-.01-.58-.01H31.99c-2.04 0-3.94.42-5.58 1.69-2.09 1.63-3.22 3.77-3.28 6.43-.04 1.63 0 3.26-.01 4.89 0 1.04-.51 1.66-1.32 1.67-.8.01-1.35-.61-1.32-1.65.07-2.42-.28-4.87.28-7.27 1.23-5.17 5.56-8.41 11.25-8.41 14.84-.01 29.68 0 44.52 0h10.94c3.94 0 7.16 1.45 9.48 4.69.95 1.32 1.53 2.79 1.8 4.4.04.22.02.45.21.62v35.86ZM24.63 41.9l-4.5 4.39 1.06 6.19c.09.51-.05 1.03-.39 1.43a1.769 1.769 0 0 1-2.17.43l-5.56-2.92-5.56 2.92c-.72.38-1.64.19-2.16-.42-.33-.4-.47-.92-.39-1.43l1.06-6.2-4.5-4.39c-.48-.47-.65-1.16-.44-1.8.21-.64.75-1.1 1.42-1.2l6.22-.9 2.78-5.64c.3-.6.9-.98 1.58-.98s1.28.38 1.58.98L17.44 38l6.22.9c.67.1 1.21.56 1.42 1.2.21.64.04 1.33-.45 1.8ZM7.7 51.4l4.56-2.4c.5-.26 1.13-.27 1.64 0l4.56 2.4-.87-5.08c-.1-.57.09-1.15.51-1.56l3.69-3.6-5.1-.74c-.57-.08-1.07-.44-1.32-.96l-2.28-4.62-2.28 4.62c-.26.52-.75.88-1.32.96l-5.1.74 3.69 3.6c.41.4.6.99.5 1.56l-.87 5.08Zm80.6-9.5-4.5 4.39 1.06 6.19c.09.51-.05 1.03-.39 1.43-.34.4-.83.63-1.34.63-.28 0-.56-.07-.82-.2l-5.56-2.92-5.56 2.92c-.72.38-1.64.19-2.16-.42-.33-.4-.47-.92-.39-1.43l1.06-6.19-4.5-4.39a1.757 1.757 0 0 1 .97-3l6.22-.9 2.78-5.64c.3-.6.9-.98 1.58-.98s1.28.38 1.58.98l2.78 5.64 6.22.9c.67.1 1.21.56 1.42 1.2.21.64.04 1.33-.45 1.8Zm-16.93 9.5 4.56-2.4c.5-.27 1.13-.27 1.63 0l4.56 2.4-.87-5.08c-.1-.57.09-1.15.51-1.56l3.69-3.6-5.1-.74c-.57-.08-1.07-.44-1.32-.96l-2.28-4.62-2.28 4.62c-.26.52-.75.88-1.32.96l-5.1.74 3.69 3.6c.41.4.6.99.51 1.56l-.87 5.08ZM58.86 38.91l-5.71 5.57 1.35 7.86c.09.55-.06 1.11-.41 1.53-.36.43-.88.67-1.44.67-.3 0-.6-.08-.88-.22l-7.06-3.71-7.06 3.71c-.77.41-1.76.2-2.31-.45a1.84 1.84 0 0 1-.41-1.53l1.35-7.86-5.71-5.57c-.52-.5-.7-1.24-.48-1.93.22-.69.8-1.18 1.52-1.28l7.89-1.15 3.53-7.15c.32-.65.96-1.05 1.69-1.05s1.37.4 1.69 1.05l3.53 7.15 7.89 1.15c.71.1 1.29.59 1.52 1.28.22.68.04 1.42-.47 1.93ZM37.61 51.5l6.22-3.27c.54-.28 1.21-.28 1.75 0l6.22 3.27-1.19-6.93c-.1-.61.1-1.23.54-1.66L56.19 38l-6.96-1.01c-.61-.09-1.14-.47-1.42-1.03l-3.11-6.3-3.11 6.3c-.27.56-.8.94-1.42 1.03L33.21 38l5.03 4.91c.44.43.64 1.05.54 1.66l-1.19 6.93Z'
                  style={{ fill: '#fff' }}
                />
                                                            </svg>
                <div
                  data-script-id='uqfkhb' className='brxe-counter text--center rw_card--heading'
                  data-bricks-counter-options='{&quot;countFrom&quot;:&quot;0&quot;,&quot;countTo&quot;:&quot;100&quot;,&quot;duration&quot;:1000,&quot;thousands&quot;:&quot;&quot;}'
                >
                  <span className='prefix'>+</span><span className='count'>0</span>
                </div><span id='brxe-ujbeam' className='brxe-heading text--center rw_card--text'>Reviews</span>
              </div>
            </div>
          </div>
        </section>
        <div id='brxe-ujmndk' className='brxe-container pad--xxl'>
          <div id='brxe-yjcnzf' className='brxe-div grid--2 rw_shadow text--white gap--s grid--l-1'><a
            id='brxe-wvmdmg'
            href='https://rwittmercom.delabridge.dev/next-departures/' className='brxe-div col-span--2'
                                                                                                    >
            <div id='brxe-brtelx' className='brxe-div flex--row pad--s'>
              <h3 id='brxe-kyfxck' className='brxe-heading'>Next <strong>Departure</strong></h3>
            </div>
                                                                                                    </a><a
            id='brxe-mlaghf' href='https://rwittmercom.delabridge.dev/last-minute-deals-and-special-promos/'
            className='brxe-div'
              >
            <div id='brxe-eufphq' className='brxe-div flex--row align-items--end pad--s'>
                                                                                                        <h3 id='brxe-hffaxs' className='brxe-heading'>Last Minute <strong>Deals</strong></h3>
                                                                                                      </div>
              </a><a
                                                                                                          id='brxe-fwaafm' href='https://rwittmercom.delabridge.dev/last-minute-deals-and-special-promos/'
                                                                                                          className='brxe-div'
                                                                                                            >
                                                                                                          <div id='brxe-dqozkg' className='brxe-div flex--row align-items--end pad--s'>
                  <h3 id='brxe-sqlevq' className='brxe-heading'>Special <strong>Promos</strong></h3>
                </div>
                                                                                                            </a>
          </div>
        </div>
        <section id='brxe-bdgtbd' className='brxe-section' />
        <section id='brxe-caymrw' className='brxe-section'>
          <div id='brxe-uiifli' className='brxe-block center--all text--white'>
            <h4 id='brxe-nysuzt' className='brxe-heading'>Do you want to learn more about <span className='rw_h4--alt'>Rolf
              Wittmer
                                                                                          </span> and his family history?
            </h4>
          </div>
          <div className='brxe-container pad--xxl center--all'>
            <div id='brxe-ewmazn' className='brxe-block gap--xl'>
              <div id='brxe-xksxxe' className='brxe-div grid--3 grid--s-1'><a
                className='brxe-image rw_collage__single-image tag bricks-lightbox'
                href='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-01.jpg'
                data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-01.jpg'
                data-pswp-width='600' data-pswp-height='600' data-pswp-id='home-collage'
                                                                           ><img
                                                                             width='600'
                                                                             height='600'
                                                                             src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-01.jpg'
                                                                             className='css-filter size-full' alt='' decoding='async' loading='lazy'
                                                                             srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-01.jpg 600w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-01-540x540.jpg 540w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-01-270x270.jpg 270w'
                                                                             sizes='(max-width: 600px) 100vw, 600px'
                                                                           />
                                                                           </a><a
                className='brxe-image rw_collage__single-image tag bricks-lightbox'
                href='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-02.jpg'
                data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-02.jpg'
                data-pswp-width='600' data-pswp-height='600' data-pswp-id='home-collage'
                  ><img
                                                                                 width='600'
                                                                                 height='600'
                                                                                 src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-02.jpg'
                                                                                 className='css-filter size-full' alt='' decoding='async' loading='lazy'
                                                                                 srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-02.jpg 600w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-02-540x540.jpg 540w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-02-270x270.jpg 270w'
                                                                                 sizes='(max-width: 600px) 100vw, 600px'
                                                                               />
                  </a><a
                                                                                 className='brxe-image rw_collage__single-image tag bricks-lightbox'
                                                                                 href='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-03.jpg'
                                                                                 data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-03.jpg'
                                                                                 data-pswp-width='600' data-pswp-height='600' data-pswp-id='home-collage'
                                                                                   ><img
                        width='600'
                        height='600'
                        src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-03.jpg'
                        className='css-filter size-full' alt='' decoding='async' loading='lazy'
                        srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-03.jpg 600w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-03-540x540.jpg 540w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-03-270x270.jpg 270w'
                        sizes='(max-width: 600px) 100vw, 600px'
                      />
                                                                                   </a><a
                        className='brxe-image rw_collage__single-image tag bricks-lightbox'
                        href='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-04.jpg'
                        data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-04.jpg'
                        data-pswp-width='600' data-pswp-height='600' data-pswp-id='home-collage'
                          ><img
                                                                                         width='600'
                                                                                         height='600'
                                                                                         src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-04.jpg'
                                                                                         className='css-filter size-full' alt='' decoding='async' loading='lazy'
                                                                                         srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-04.jpg 600w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-04-540x540.jpg 540w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-04-270x270.jpg 270w'
                                                                                         sizes='(max-width: 600px) 100vw, 600px'
                                                                                       />
                          </a><a
                                                                                         className='brxe-image rw_collage__single-image tag bricks-lightbox'
                                                                                         href='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-05.jpg'
                                                                                         data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-05.jpg'
                                                                                         data-pswp-width='600' data-pswp-height='600' data-pswp-id='home-collage'
                                                                                           ><img
                                width='600'
                                height='600'
                                src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-05.jpg'
                                className='css-filter size-full' alt='' decoding='async' loading='lazy'
                                srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-05.jpg 600w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-05-540x540.jpg 540w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-05-270x270.jpg 270w'
                                sizes='(max-width: 600px) 100vw, 600px'
                              />
                                                                                           </a><a
                                className='brxe-image rw_collage__single-image tag bricks-lightbox'
                                href='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-06.jpg'
                                data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-06.jpg'
                                data-pswp-width='600' data-pswp-height='600' data-pswp-id='home-collage'
                                  ><img
                                                                                                 width='600'
                                                                                                 height='600'
                                                                                                 src='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-06.jpg'
                                                                                                 className='css-filter size-full' alt='' decoding='async' loading='lazy'
                                                                                                 srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-06.jpg 600w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-06-540x540.jpg 540w, https://rwittmercom.delabridge.dev/wp-content/uploads/home-history-section-collage-06-270x270.jpg 270w'
                                                                                                 sizes='(max-width: 600px) 100vw, 600px'
                                                                                               />
                                  </a>
              </div>
              <div className='brxe-div grid--1 center--all gap--m'>
                <div id='brxe-jdmejt' className='brxe-text-basic'>For reading the full story</div><a
                  className='brxe-button rw_btn--outline-primary bricks-button'
                  href='https://rwittmercom.delabridge.dev/about-us/'
                                                                                                  >Click Here
                                                                                                  </a>
              </div>
            </div>
          </div>
        </section>
        <section id='brxe-xltmuh' className='brxe-section'>
          <div id='brxe-kzvxbi' className='brxe-block'>
            <div id='brxe-botznh' className='brxe-div grid--1 text--white text--center'>
              <div id='brxe-mcnrsr' className='brxe-div'>
                <h5 id='brxe-kfqabf' className='brxe-heading'>Travel, travel and travel a little more. Add another
                  tip top experience in a different location around Ecuador.
                </h5>
                <div id='brxe-ftapui' className='brxe-div'><span
                  id='brxe-izsrwx'
                  className='brxe-heading'
                                                           >Galapagos
                                                           </span><span
                  id='brxe-pfcovv'
                  className='brxe-heading'
                       >+
                       </span>
                  <form className='brxe-div'>
                    <li id='brxe-iwtabu' data-script-id='iwtabu' className='brxe-dropdown'>
                      <div className='brx-submenu-toggle'><a href='#'>Choose Destination</a><button
                        aria-expanded='false' aria-label='Toggle dropdown'
                                                                                            ><svg
                                                                                              xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' fill='none'
                                                                                            >
                                                                                              <path d='M1.50002 4L6.00002 8L10.5 4' strokeWidth='1.5' />
                                                                                            </svg>
                                                                                            </button>
                      </div>
                      <ul id='brxe-dsikvh' className='brxe-div brx-dropdown-content'>
                        <li className='menu-item'><a
                          className='brxe-text-link' href='https://wa.link/id6oko'
                          target='_blank' rel='noreferrer'
                                                  >Coastal Line
                                                  </a>
                        </li>
                        <li className='menu-item'><a
                          className='brxe-text-link' href='https://wa.link/xtousu'
                          target='_blank' rel='noreferrer'
                                                  >Cloudforest
                                                  </a>
                        </li>
                        <li className='menu-item'><a
                          className='brxe-text-link' href='https://wa.link/rvamrp '
                          target='_blank' rel='noreferrer'
                                                  >Amazon Basin
                                                  </a>
                        </li>
                      </ul>
                    </li>
                  </form>
                </div>
              </div>
              <div id='brxe-tcyijo' className='brxe-div'>
                <div id='brxe-gfzxnd' className='brxe-text-basic'>Combine your Galapagos cruise with other
                  destinations and experiences
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='brxe-wowkeo' className='brxe-section'>
          <div id='brxe-gxnaft' className='brxe-container'>
            <h3 className='brxe-heading text--primary'>Get All <span className='rw_h3--alt'>the News</span></h3>
            <form id='brxe-ojhsii' data-script-id='ojhsii' className='brxe-form' method='post' data-element-id='ojhsii'>
              <div className='form-group'>

                <input
                  id='form-field-0fccb3' name='form-field-519b44' aria-label='Email' type='email' value
                  placeholder='Your Email' required
                />

              </div>

              <div className='form-group submit-button-wrapper'>
                <button type='submit' className='bricks-button'>
                  <span className='text'>Subscribe to our News</span><span className='loading'>
                    <svg
                      version='1.1' viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g
                        strokeLinecap='round' strokeWidth='1' stroke='#000' fill='none'
                        strokeLinejoin='round'
                      >
                        <path d='M0.927,10.199l2.787,4.151l3.205,-3.838' />
                        <path d='M23.5,14.5l-2.786,-4.15l-3.206,3.838' />
                        <path
                          d='M20.677,10.387c0.834,4.408 -2.273,8.729 -6.509,9.729c-2.954,0.699 -5.916,-0.238 -7.931,-2.224'
                        />
                        <path
                          d='M3.719,14.325c-1.314,-4.883 1.969,-9.675 6.538,-10.753c3.156,-0.747 6.316,0.372 8.324,2.641'
                        />
                      </g>
                      <path fill='none' d='M0,0h24v24h-24Z' />
                    </svg>
                                                                     </span>
                </button>
              </div>

            </form>
          </div>
        </section>
      </main>
      <Footer />
      <div data-popup-id='1379' className='brx-popup brxe-popup-1379 hide'>
        <div className='brx-popup-content brxe-container'>
          <div id='brxe-pwntia' className='brxe-block'>
            <div
              id='brxe-elnnad' data-script-id='elnnad' className='brxe-slider-nested splide'
              data-splide='{&quot;type&quot;:&quot;loop&quot;,&quot;direction&quot;:&quot;ltr&quot;,&quot;keyboard&quot;:&quot;global&quot;,&quot;height&quot;:&quot;50vh&quot;,&quot;gap&quot;:&quot;0px&quot;,&quot;start&quot;:0,&quot;perPage&quot;:1,&quot;perMove&quot;:1,&quot;speed&quot;:400,&quot;interval&quot;:3000,&quot;autoHeight&quot;:false,&quot;autoplay&quot;:true,&quot;pauseOnHover&quot;:true,&quot;pauseOnFocus&quot;:false,&quot;arrows&quot;:true,&quot;pagination&quot;:true}'
            >
              <div className='splide__track'>
                <div className='splide__list'>
                  <div id='brxe-daaqld' className='brxe-block'><a
                    className='brxe-image tag bricks-lightbox'
                    href='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png'
                    data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png'
                    data-pswp-width='1200' data-pswp-height='800'
                                                               ><img
                                                                 width='600' height='400'
                                                                 src='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-600x400.png'
                                                                 className='css-filter size-bricks_medium' alt='' decoding='async' loading='lazy'
                                                                 srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-600x400.png 600w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-810x540.png 810w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-405x270.png 405w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-768x512.png 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png 1200w'
                                                                 sizes='(max-width: 600px) 100vw, 600px'
                                                               />
                                                               </a>
                  </div>
                  <div id='brxe-nzmqxq' className='brxe-block'><a
                    className='brxe-image tag bricks-lightbox'
                    href='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png'
                    data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png'
                    data-pswp-width='1200' data-pswp-height='800'
                                                               ><img
                                                                 width='600' height='400'
                                                                 src='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-600x400.png'
                                                                 className='css-filter size-bricks_medium' alt='' decoding='async' loading='lazy'
                                                                 srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-600x400.png 600w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-810x540.png 810w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-405x270.png 405w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-768x512.png 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png 1200w'
                                                                 sizes='(max-width: 600px) 100vw, 600px'
                                                               />
                                                               </a>
                  </div>
                  <div id='brxe-bbqlua' className='brxe-block'><a
                    className='brxe-image tag bricks-lightbox'
                    href='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png'
                    data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png'
                    data-pswp-width='1200' data-pswp-height='800'
                                                               ><img
                                                                 width='600' height='400'
                                                                 src='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-600x400.png'
                                                                 className='css-filter size-bricks_medium' alt='' decoding='async' loading='lazy'
                                                                 srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-600x400.png 600w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-810x540.png 810w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-405x270.png 405w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-768x512.png 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png 1200w'
                                                                 sizes='(max-width: 600px) 100vw, 600px'
                                                               />
                                                               </a>
                  </div>
                  <div id='brxe-kctjax' className='brxe-block'><a
                    className='brxe-image tag bricks-lightbox'
                    href='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png'
                    data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png'
                    data-pswp-width='1200' data-pswp-height='800'
                                                               ><img
                                                                 width='600' height='400'
                                                                 src='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-600x400.png'
                                                                 className='css-filter size-bricks_medium' alt='' decoding='async' loading='lazy'
                                                                 srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-600x400.png 600w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-810x540.png 810w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-405x270.png 405w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-768x512.png 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png 1200w'
                                                                 sizes='(max-width: 600px) 100vw, 600px'
                                                               />
                                                               </a>
                  </div>
                  <div id='brxe-kegifb' className='brxe-block'><a
                    className='brxe-image tag bricks-lightbox'
                    href='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png'
                    data-pswp-src='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png'
                    data-pswp-width='1200' data-pswp-height='800'
                                                               ><img
                                                                 width='600' height='400'
                                                                 src='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-600x400.png'
                                                                 className='css-filter size-bricks_medium' alt='' decoding='async' loading='lazy'
                                                                 srcSet='https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-600x400.png 600w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-810x540.png 810w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-405x270.png 405w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614-768x512.png 768w, https://rwittmercom.delabridge.dev/wp-content/uploads/placeholder-614.png 1200w'
                                                                 sizes='(max-width: 600px) 100vw, 600px'
                                                               />
                                                               </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='brx-popup-backdrop' />
      </div>
    </>
  )
}
