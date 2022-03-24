import Event from '../helpers/events'

class DrawerModel {
  constructor() {
    this.submenuEvent = new Event()
  }

  init() {

  }

  async GetDrawerNav() {
    // const MenuItems = await fetch('./../api/drawerNav.json', {
    const MenuItems = await fetch('./../api/nav.json', {
      mode: 'no-cors',
    })
      .then(response => response.json())
      .then(result => result)
      .catch(error => {
        console.log(error) // eslint-disable-line
      })
    return MenuItems
  }

  async GetSubmenuItem(submenu) {
    const SubMenuItems = await fetch('./../api/' + submenu, {
      mode: 'no-cors',
    })
      .then(response => response.json())
      .then(result => result)
      .catch(error => {
        console.log(error) // eslint-disable-line
      })
    return SubMenuItems
  }

  // TODO: Get data as user clicks for light loading in stuff
  // async GetSelectionData() {}
}

export { DrawerModel }
