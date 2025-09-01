const srcFolder = './src'
const buildFolder = './dist'

export const paths = {
  base: {
    src: srcFolder,
    build: buildFolder
  },
  srcSvg: `${srcFolder}/assets/images/svg/**.svg`,
  srcImgFolder: `${srcFolder}/assets/images`,
  buildImgFolder: `${buildFolder}/images`,
  srcScss: `${srcFolder}/styles/**/*.scss`,
  buildCssFolder: `${buildFolder}/css`,
  srcFullJs: `${srcFolder}/js/**/*.js`,
  srcMainJs: `${srcFolder}/js/main.js`,
  buildJsFolder: `${buildFolder}/js`,
  srcComponentsFolder: `${srcFolder}/blocks`,
  assetsFolder: `${srcFolder}/assets`
}
