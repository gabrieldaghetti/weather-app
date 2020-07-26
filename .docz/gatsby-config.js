const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Weather App',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'C:\\Projetos\\weather-app\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Weather App',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'C:\\Projetos\\weather-app',
          templates:
            'C:\\Projetos\\weather-app\\node_modules\\docz-core\\dist\\templates',
          docz: 'C:\\Projetos\\weather-app\\.docz',
          cache: 'C:\\Projetos\\weather-app\\.docz\\.cache',
          app: 'C:\\Projetos\\weather-app\\.docz\\app',
          appPackageJson: 'C:\\Projetos\\weather-app\\package.json',
          appTsConfig: 'C:\\Projetos\\weather-app\\tsconfig.json',
          gatsbyConfig: 'C:\\Projetos\\weather-app\\gatsby-config.js',
          gatsbyBrowser: 'C:\\Projetos\\weather-app\\gatsby-browser.js',
          gatsbyNode: 'C:\\Projetos\\weather-app\\gatsby-node.js',
          gatsbySSR: 'C:\\Projetos\\weather-app\\gatsby-ssr.js',
          importsJs: 'C:\\Projetos\\weather-app\\.docz\\app\\imports.js',
          rootJs: 'C:\\Projetos\\weather-app\\.docz\\app\\root.jsx',
          indexJs: 'C:\\Projetos\\weather-app\\.docz\\app\\index.jsx',
          indexHtml: 'C:\\Projetos\\weather-app\\.docz\\app\\index.html',
          db: 'C:\\Projetos\\weather-app\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
