const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  urlSite: process.env.URL_SITE
}

module.exports = { config };