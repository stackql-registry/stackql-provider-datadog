import {themes as prismThemes} from 'prism-react-renderer';
import { createConfig } from './.shared-config/index.js';
import { providerName, providerTitle } from './provider.js';

const config = createConfig({
  providerName,
  providerTitle,
  prismThemes,
  overrides: {
    // Docusaurus Faster (rspack + swc, via @docusaurus/faster) - this site
    // has ~700 generated resource pages, so the faster bundler matters here.
    future: {
      v4: true,
      faster: true,
    },
  },
});

// Date-stamp every doc page ("Last updated on ...") from the git history of
// the generated markdown. The shared config defaults this to false; the
// deploy workflows check out with fetch-depth: 0 so the timestamps resolve.
config.presets[0][1].docs.showLastUpdateTime = true;

// Use the locally vendored registry-branded logos (STACKQL>> | REGISTRY,
// matching the other provider microsites) instead of the shared config's
// hotlinked main-site wordmark - self-contained assets, no cross-origin
// fetch. global.css swaps in the -mobile variants below 996px.
const registryLogo = {
  alt: 'StackQL',
  href: '/',
  src: 'img/stackql-registry-logo.svg',
  srcDark: 'img/stackql-registry-logo-white.svg',
};
config.themeConfig.navbar.logo = { ...registryLogo };
config.themeConfig.footer.logo = { ...registryLogo };

// URL form. Keep the Docusaurus default (pages emitted as <route>/index.html)
// regardless of the shared config's trailingSlash setting, so GitHub Pages
// serves both /services/x/y and /services/x/y/. A trailingSlash: false site
// emits <route>.html instead, which returns 404 for the trailing-slash URL.
delete config.trailingSlash;

export default config;
