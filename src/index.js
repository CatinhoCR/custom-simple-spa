import RouterModule from './js/router'
import { Header } from './js/header'

// Include css for webpack (for development only)
import 'styles/app.scss'

// Hot reloading (for development only)
if (module.hot) {
  module.hot.accept()
}

class App {
  constructor(el) {
    this.body = el
    this.header = new Header()
    this.init()
  }

  init() {
    RouterModule.init()
    this.header.init()
  }
}

const app = {
  init() {
    const wrapperEl = document.querySelector('#app')
    if (wrapperEl) {
      const app = new App(wrapperEl) // eslint-disable-line no-unused-vars
    }
  },
}

// load
window.addEventListener('load', () => app.init())
