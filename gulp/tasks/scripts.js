import browserSync from 'browser-sync'
import webpackStream from 'webpack-stream'
import TerserPlugin from 'terser-webpack-plugin'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'

export const scripts = () => {
  return app.gulp
    .src(app.paths.srcMainJs)
    .pipe(
      plumber(
        notify.onError({
          title: 'JS',
          message: 'Error: <%= error.message %>'
        })
      )
    )
    .pipe(
      webpackStream({
        mode: app.isProd ? 'production' : 'development',
        entry: {
          "main": app.paths.srcMainJs,
          "main.min": app.paths.srcMainJs,
        },
        output: {
          filename: "[name].js"
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        targets: 'defaults'
                      }
                    ]
                  ]
                }
              }
            }
          ]
        },
        optimization: {
          minimize: true,
          minimizer: [new TerserPlugin({
            include: /\.min\.js$/
          })]
        },
        devtool: !app.isProd ? 'source-map' : false
      })
    )
    .on('error', function (err) {
      console.error('WEBPACK ERROR', err)
      this.emit('end')
    })
    .pipe(app.gulp.dest(app.paths.buildJsFolder))
    .pipe(browserSync.stream())
}
