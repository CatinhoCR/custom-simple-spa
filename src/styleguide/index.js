// import styleguideHtml from './styleguide.html'

class Styleguide {
  constructor(el) {
    if (!el) return
    this.container = el
    this.init()
  }

  init() {
    // if (!styleguideHtml || !this.container) return
    console.log('styleguide')
    // this.container.innerHTML = styleguideHtml

    // this.afterRender()
  }

  afterRender() {
    // this.view = document.querySelector('#styleguide-view')
  }
}

const styleguide = {
  init(wrapper) {
    const styleguide = new Styleguide(wrapper) // eslint-disable-line no-unused-vars
  }
}

export default styleguide
