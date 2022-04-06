import Router from './config/routing'

import contact from '../contact/contact'

class RoutingModule {
  constructor() {
    this.viewContainer = document.querySelector('#main')
    this.router()
  }

  router() {
    console.log(this.viewContainer)
    const router = new Router({
      mode: 'hash',
      root: '/',
    })
    router
      .add('contact', () => {
        contact.init(this.viewContainer)
      })
      .add('', () => {
        console.log('webpack starterkit catowl') // eslint-disable-line no-console
        this.viewContainer.innerHTML = ''
        const intro = 'Welcome, this is a pseudo base route or 404. Meaning view still to be done.'
        const pageTitle = document.createElement('h1')
        pageTitle.classList.add('heading', 'heading--md')
        pageTitle.innerHTML = intro
        this.viewContainer.appendChild(pageTitle)
      })
  }
}

const routerModule = {
  init() {
    const router = new RoutingModule() // eslint-disable-line no-unused-vars
  },
}

export default routerModule
