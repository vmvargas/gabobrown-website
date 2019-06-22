import React from 'react'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const NotFoundPage = () => (
  <Layout>
  <section className="hero">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-half">
            <h1 className="title is-size-1 has-text-centered" style={{
              margin: "0",
              padding: "0"
            }}>SORRY</h1>
            <h1 className="title is-size-3 has-text-centered">I couldn't find that page</h1>
            <p className="has-text-centered">Try going back to <a href="./">GaboBrown's home page</a>.</p>
            <br/>
            <figure class="image is-1by1">
              <PreviewCompatibleImage
                imageInfo={{
                  image: '../../img/BaileyTheAussie.jpg',
                  alt: `Bailey The Aussie`,
                }}/>
            </figure>
            <p className="has-text-centered">Meet <a href="https://www.instagram.com/baleytheaussie/">Bailey The Aussie</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  </Layout>
)

export default NotFoundPage
