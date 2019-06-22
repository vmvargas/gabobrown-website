import CMS from 'netlify-cms-app'
// import uploadcare from 'netlify-cms-media-library-uploadcare'
// import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import PortfolioPostPreview from './preview-templates/PortfolioPostPreview'
import HomePagePreview from './preview-templates/HomePagePreview'

// CMS.registerMediaLibrary(uploadcare);
// CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('home', HomePagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('portfolio', PortfolioPostPreview)