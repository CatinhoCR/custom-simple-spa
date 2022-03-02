// Include css for webpack (for development only)
// const css = require('../scss/main.scss') // eslint-disable-line no-unused-vars
import 'styles/app.scss'

// Hot reloading (for development only)
if (module.hot) {
  module.hot.accept()
}

class App {
  constructor() {
    this.msg = ''
    this.init()
  }

  init() {
    this.msg = 'hi bru'
    console.log(this.msg)
  }
}

const app = new App() // eslint-disable-line no-unused-vars
