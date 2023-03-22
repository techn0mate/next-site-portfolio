const getAllPosts = require('./lib/posts');

const sitemapOptions = {
  // These are the options you want to specify
  siteUrl: 'https://soumyamondal.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/secret" },
      { userAgent: "*", allow: "/" },
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/404'],
};

const staticPaths = {
  '/': { page: '/' },
  '/blog': { page: '/blog' },
  '/about': { page: '/about' },
  '/contact': { page: '/contact' },
  '/portfolio': { page: '/portfolio' },
  '/link': { page: '/link' },
  '/faq': { page: '/faq' },
  '/newsletter': { page: '/newsletter' },
}

const generatePaths = async () => {
  const getProps = await fetch(`${process.env.BACKEND_URL}/wp/v2/posts?_embed`);
  const posts = await getProps.json();
  const dynamicPaths = {};
  await posts.forEach(post => {
    dynamicPaths[`/blog/${post.slug}`] = { loc: `${post.link}`, lastmod: new Date().toISOString() }
  })
  return dynamicPaths
}

module.exports = {
  ...sitemapOptions,

  trailingSlash: true,
  exportPathMap: async function() {
    const dynamicPaths = await generatePaths()
    return {
      ...staticPaths,
      ...dynamicPaths,
      '/sitemap.xml': { page: '/sitemap.xml' }
    }
  }
};

