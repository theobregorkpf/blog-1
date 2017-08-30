module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Alex Bezek's Blog", // Site title.
  siteTitleAlt: "Alex Bezek's Blog", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https:///alex-bezek.github.io", // Domain of your website without pathPrefix.
  pathPrefix: "blog", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A software blog by Alex Bezek", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Alex Bezek", // Username to display in the author segment of RSS feed.
  userTwitter: "alex-bezek", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Kasas City, Kansas", // User location to display in the author segment.
  userAvatar: "https://api.adorable.io/avatars/150/test.png", // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/alex-bezek",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/alex_bezek",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "alex.liam.bezek@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2017. Alex Bezek", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};
