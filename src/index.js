import RouterModule from 'js/router'
// import Router from 'js/config/routing'
// Include css for webpack (for development only)
// const css = require('../scss/main.scss') // eslint-disable-line no-unused-vars
import 'styles/app.scss'

// Hot reloading (for development only)
if (module.hot) {
  module.hot.accept()
}

class App {
  constructor(el) {
    // this.msg = ''
    this.body = el
    this.init()
  }

  init() {
    // this.msg = 'hi bru'
    // console.log(this.msg)
    RouterModule.init(this.body)
    // this.router()
  }

  // router() {
  //   console.log(this.body)
  //   const router = new Router({
  //     mode: 'hash',
  //     root: '/',
  //   })
  //   // @todo Login, Session Cookies, Auth Guards, Set Dynamic Token session
  //   // @todo Actual routes and get/set query params and resp
  //   router
  //     // .add('dashboard', () => {
  //     //   Dashboard.init(this.viewContainer)
  //     // })
  //     .add('', () => {
  //       // @todo Wildcard route handling and AUTH GUARDS
  //       console.log('webpack starterkit') // eslint-disable-line no-console
  //       this.body.innerHTML = ''
  //       const intro = 'Welcome, this is a pseudo base route or 404. Meaning view still to be done.'
  //       const pageTitle = document.createElement('h1')
  //       pageTitle.classList.add('heading', 'heading--md')
  //       pageTitle.innerHTML = intro
  //       // this.viewContainer.appendChild(pageTitle)
  //       this.body.appendChild(pageTitle)
  //     })
  // }
}

const app = {
  init() {
    const wrapperEl = document.querySelector('#root')
    if (wrapperEl) {
      const app = new App(wrapperEl) // eslint-disable-line no-unused-vars
    }
  },
}

// load
window.addEventListener('load', () => app.init())

// const app = new App() // eslint-disable-line no-unused-vars
