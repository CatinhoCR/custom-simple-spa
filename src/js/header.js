class Header {
  constructor(el) {
    this.elem = el
    this.init()
  }

  init() {
    this.btn = document.querySelector('.hamburger')
    this.icon = document.querySelector('.hamburger__icon')

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

export { Header }
