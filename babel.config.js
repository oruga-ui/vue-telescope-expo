module.exports = {
  presets: [
    ['@vue/app', {
      useBuiltIns: false
    }]
  ],
  plugins: [
    ['babel-plugin-istanbul', {
      extension: ['.js', '.vue']
    }]
  ]
}
