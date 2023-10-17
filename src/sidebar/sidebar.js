import nav from './sidebar.html'

class DrawerSidebar {
  constructor(el) {
    if (!el) return;
    console.log('s');
    this.elem = el;

    this.isExpanded = false
    this.activeItem = null
    this.beforeRender();
  }

  /**
   * @function beforeRender
   *
   */
  beforeRender() {
    this.elem.innerHTML = nav;
    this.toggler = document.querySelector('.sidebar__toggler')
    this.drawer = document.querySelector('.sidebar__drawer')
    this.icon = document.querySelector('.sidebar__toggler-icon')
    this.page = document.querySelector('.page')
    this.render()
  }

  handleToggleEvent() {
    this.toggler.addEventListener('click', () => {
      this.drawer.classList.toggle('sidebar__drawer--open')
      this.page.classList.toggle('page--toggled')
      this.icon.classList.toggle('hamburger-icon--open')
      // if (this.isExpanded) {

      // } else {

      // }
    })
  }

  /**
   * Get initial data, selectors, inject HTML, call afterRender
   */
  render() {
    this.handleToggleEvent()
  }


  toggleFlyoutSubmenu() {

  }

  // async getNavMenu() {
  //   // const MenuItems = await fetch('./../api/drawerNav.json', {
  //   const MenuItems = await fetch('./../api/nav.json', {
  //     mode: 'no-cors',
  //   })
  //     .then(response => response.json())
  //     .then(result => result)
  //     .catch(error => {
  //       console.log(error) // eslint-disable-line
  //     })
  //   return MenuItems
  // }
}

const sidebarDrawer = {
  init () {
    const wrapperEl = document.querySelector('#sidebar-navigation')
    if (wrapperEl !== null) {
        new DrawerSidebar(wrapperEl)
    }
  },
}

export default sidebarDrawer
