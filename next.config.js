const {PHASE_DEVELOPMENT_SERVER} = require("next/constants");

module.exports = (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  return {
    reactStrictMode: true,
    swcMinify: true,
    basePath: phase !== PHASE_DEVELOPMENT_SERVER ? '/pf' : '',
    images: {unoptimized: true},
  }
}
