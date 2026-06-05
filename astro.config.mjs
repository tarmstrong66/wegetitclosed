// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://wegetitclosed.com',
  integrations: [sitemap(), mdx()],
  output: 'static',
  redirects: {
    // WP URL cleanup
    '/about-us-2': '/about',

    // Blog post migration (root → /blog/)
    '/dscr-loans-vs-conventional-mortgages-which-one-fits-your': '/blog/dscr-loans-vs-conventional-mortgages-which-one-fits-your',
    '/how-to-qualify-for-a-dscr-loan-tips-for-real-estate-investors': '/blog/how-to-qualify-for-a-dscr-loan-tips-for-real-estate-investors',
    '/what-is-a-dscr-loan-2': '/blog/what-is-a-dscr-loan',
    '/how-to-use-dscr-loans-to-grow-your-rental-portfolio-in-florida': '/blog/how-to-use-dscr-loans-to-grow-your-rental-portfolio-in-florida',

    // Blog category migration
    '/category/dscr-loans': '/blog/category/dscr-loans',
    '/category/standard-home-loans': '/blog/category/standard-home-loans',

    // WP thank-you pages → parent
    '/programs/conventional-loans/conventional-loans-thank-you': '/programs/conventional-loans',
    '/programs/fha/fha-thank-you': '/programs/fha',
    '/programs/jumbo-loans/jumbo-loans-thank-you': '/programs/jumbo-loans',
    '/programs/usda/usda-thank-you': '/programs/usda',
    '/lp/thank-you-refinance': '/refinance',
    '/lp/thank-you-va-loans': '/lp/va-loans',
    '/lp/thank-you-va-refinance': '/lp/va-refinance',
    '/lp/thank-you-purchase': '/purchase',
    '/lp/thank-you-dcsr-loans': '/lp/dscr',
  },
});
