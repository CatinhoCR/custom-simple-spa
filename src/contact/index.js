import contactHtml from './contact.html'

class Contact {
  constructor(el) {
    if (!el) return
    this.container = el
    this.init()
  }

  init() {
    if (!contactHtml || !this.container) return
    console.log('contact')
    this.container.innerHTML = contactHtml

    this.afterRender()
  }

  afterRender() {
    this.view = document.querySelector('#contact-view')
  }
}

const contact = {
  init(wrapper) {
    const contact = new Contact(wrapper) // eslint-disable-line no-unused-vars
  }
}

export default contact