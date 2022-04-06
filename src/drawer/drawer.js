import hamburger from './hamburger.html'
import nav from './nav.html'

class Drawer {
  constructor(el) {
    this.container = el
    this.hamburgerHtml = hamburger
    this.navHtml = nav
    this.init()
  }

  // Initialize component and evertything needed
  async init() {
    await this.render()
    this.afterRender()
    this.handleToggleClick()
  }

  // Initial component's content rendering
  render() {
    this.container.innerHTML = this.hamburgerHtml + this.navHtml;
  }

  // Save DOM elements into local cached vars
  afterRender() {
    this.btn = document.querySelector('.drawer__toggler')
    this.icon = document.querySelector('.drawer__icon')

    this.menu = document.querySelector('.nav')
  }

  handleToggleClick() {
    this.btn.addEventListener('click', () => {
      // Change icon class to transition the states and animate it
      this.icon.classList.toggle('hamburger-icon--open')

      // Change nav class to show/hide
      this.menu.classList.toggle('hidden')
    })
  }


}

const drawer = {
  init() {
    const wrapperEl = document.querySelector('#drawer-navigation')
    if (wrapperEl) {
      const sidebar = new Drawer(wrapperEl) // eslint-disable-line no-unused-vars
    }
  },
}


export default drawer
