// An array of links for navigation bar
const navBarLinks = [
//  { name: "Home", url: "/" },
  { name: "Discussions", url: "https://commercequest.space/" },
  { name: "Events", url: "https://commercequest.space/events/category" },
  { name: "Resources", url: "/guides/intro" },
//  { name: "Jobs", url: "https://commercequest.space/categories/jobs" },
//  { name: "Products", url: "/products" },
  { name: "Hackathon Log", url: "/blog" },
  { name: "About", url: "/about" },
  { name: "Contact", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "CQ Ecosystem",
    links: [
      { name: "Spryker", url: "/spryker" },
      { name: "Oryx", url: "/oryx" },
      { name: "Propel", url: "/propel" },
      { name: "Documentation", url: "/guides/intro" },
      { name: "Community Tools", url: "https://github.com/orgs/spryker-community/repositories" },
      { name: "Code of Conduct", url: "https://spryker.com/sprykercodeofconduct/" },
      { name: "Help improve this site", url: "https://github.com/spryker-community/spryker-community.github.io?tab=readme-ov-file#landingpage--docs" },
    ],
  },
  {
    section: "CommerceQuest",
    links: [
      { name: "About us", url: "/about" },
      { name: "Forum", url: "https://commercequest.space/" },
      { name: "Blog", url: "/blog" },
      { name: "Careers", url: "https://spryker.com/career/" },
      { name: "Customers", url: "https://spryker.com/customer-overview/" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/Spryker/",
  x: "https://twitter.com/sprysys",
  github: "https://github.com/spryker-community",
  youtube: "https://www.youtube.com/channel/UC6lVOEbqXxUh0W5FMTvlPDQ",
  linkedin: "https://www.linkedin.com/company/spryker-systems-gmbh",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};