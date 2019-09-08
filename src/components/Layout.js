import React from 'react'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="apple-touch-icon" sizes="57x57" href="/img/ico/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/img/ico/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/img/ico/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/img/ico/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/img/ico/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/img/ico/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/img/ico/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/img/ico/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/img/ico/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/img/ico/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/ico/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/img/ico/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/ico/favicon-16x16.png"/>
        <link rel="manifest" href="/img/ico/manifest.json"/>
        <meta name="msapplication-TileColor" content="#FFFFFF"/>
        <meta name="msapplication-TileImage" content="/img/ico/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#FFFFFF" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
