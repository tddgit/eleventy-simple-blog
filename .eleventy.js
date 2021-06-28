module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('images')
    eleventyConfig.addPassthroughCopy('admin')

    const { DateTime } = require("luxon")

    eleventyConfig.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {
            zone: 'utc'
        }).toFormat('yy-MM-dd')
    })
    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {
            zone: "utc"
        }).toFormat('dd-MM-yy')
    })
}
