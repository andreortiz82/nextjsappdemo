const outputPath = "./tokens"
const tokenTypes = ['color', 'measurement', 'opacity', 'shadow', 'textStyle', 'duration']

module.exports = {
    repository: "@picasso/foundations",
    head: "specify",
    base: "main",
    personalAccessToken: process.env.SPECIFY_TOKEN,
    rules: [
        {
            name: "Foundation / JavaScript",
            path: `${outputPath}/foundation.js`,
            filter: { types: tokenTypes },
            parsers: [
                {
                    name: "camelcasify",
                    options: {
                        keys: [
                            "name"
                        ]
                    }
                },
                {
                    "name": "px-to-rem",
                    "options": {
                        "keys": ["fontSize"]
                    }
                },
                {
                    name: "to-jss"
                }
            ]
        },
        {
            name: "Foundation / SASS",
            path: `${outputPath}/foundation.scss`,
            filter: { types: tokenTypes },
            parsers: [
                {
                    name: "kebabcasify",
                    options: {
                        keys: [
                            "name"
                        ]
                    }
                },
                {
                    name: "sort-by",
                    options: {
                        keys: ["value"],
                    },
                },
                {
                    name: "px-to-rem",
                    options: {
                        keys: ["fontSize"],
                    },
                },
                {
                    name: "to-scss-variables"
                }
            ]
        },
        {
            name: "Foundation / Icons / SASS",
            path: `${outputPath}/icons.scss`,
            filter: { types: ['vector'] },
            parsers: [
                {
                    name: "kebabcasify",
                    options: {
                        keys: [
                            "name"
                        ]
                    }
                },
                {
                    name: "sort-by",
                    options: {
                        keys: ["value"],
                    },
                },
                {
                    name: "to-scss-variables"
                }
            ]
        },
    ]
};