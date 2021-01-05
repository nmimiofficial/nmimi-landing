module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/images");
  return {
    passthroughFileCopy: true,
    markdownTemplateEngine: "njk",
    templateFormats: ["html", "njk", "md"],
    dir: {
      input: "src"
    }
  }
}