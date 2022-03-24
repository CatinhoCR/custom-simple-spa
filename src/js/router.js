import Router from './config/routing'

class RoutingModule {
  constructor(container) {
    this.body = container
    // this.viewContainer = document.querySelector('#root')
    this.router()
  }

  router() {
    console.log(this.body)
    const router = new Router({
      mode: 'hash',
      root: '/',
    })
    // @todo Login, Session Cookies, Auth Guards, Set Dynamic Token session
    // @todo Actual routes and get/set query params and resp
    router
      // .add('dashboard', () => {
      //   Dashboard.init(this.viewContainer)
      // })
      .add('', () => {
        // @todo Wildcard route handling and AUTH GUARDS
        console.log('webpack starterkit catowl') // eslint-disable-line no-console
        // this.body.innerHTML = ''
        const intro = 'Welcome, this is a pseudo base route or 404. Meaning view still to be done.'
        const pageTitle = document.createElement('h1')
        pageTitle.classList.add('heading', 'heading--md')
        pageTitle.innerHTML = intro
        // this.viewContainer.appendChild(pageTitle)
        this.body.appendChild(pageTitle)
      })
  }
}

const routerModule = {
  init(el) {
    const router = new RoutingModule(el) // eslint-disable-line no-unused-vars
  },
}

export default routerModule
