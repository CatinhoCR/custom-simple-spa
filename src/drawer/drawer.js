import hamburger from './hamburger.html'
import nav from './drawer.html'

class DrawerSidebar {
  constructor(el) {
    console.log(el);
    if (!el) return;
    this.elem = el;
    this.hamburgerHtml = hamburger
    this.navHtml = nav
    this.init();
  }

  /**
   * Get initial data, selectors, inject HTML, call afterRender
   */
  init() {
    this.isExpanded = false
    this.isDocked = false; // @todo

    this.openedSubmenu = document.querySelector('.drawer__flyout--open')
    this.openDetailsCss = 'drawer__flyout--sub-active'
    this.elem.innerHTML = this.hamburgerHtml + this.navHtml;
    this.onCreated()
  }

  /**
   * @function onCreated()
   *
   */
  onCreated() {
    if (this.isDocked) this.elem.classList.add('drawer--docked')

    this.drawer = document.querySelector('.drawer__nav')
    this.toggler = document.querySelector('.drawer__toggler')
    this.icon = document.querySelector('.drawer__toggler-icon')

    this.menuItems = [].slice.call(
      document.querySelectorAll('.drawer__button')
    )

    this.subMenus = [].slice.call(
      document.querySelectorAll('.drawer__flyout')
    )

    this.dropdownMenus = [].slice.call(
      document.querySelectorAll('.drawer__sublink')
    )

    this.onMounted()
  }

  /**
   * @function onMounted()
   */
  onMounted() {
    this.onTogglerClick();
    this.onSubmenuClick();
    this.onDropdownClick();
    // this.initScrollBtns();
  }

  mainTogglerClasses() {
    this.icon.classList.toggle('hamburger-icon--open')
    this.drawer.classList.toggle('drawer__nav--open')
  }

  onTogglerClick() {
    this.toggler.addEventListener('click', () => {
      if (this.isExpanded) {
        this.onBackClick()
      } else {
        this.mainTogglerClasses()
      }
    })
  }

  /**
   *
   * @param {*} target
   * TODO check catix forge wink for third level menu
   */
  onBackClick(target = null) {
    console.log('back sub menu')
    // this.subMenus = [].slice.call(
    //   document.querySelectorAll('.drawer__flyout')
    // )
    if (target) {
      this.menuItems.forEach(button => {
        if (target !== button) button.parentElement.classList.remove('active')
      })
    }
    if (this.openedSubmenu) this.openedSubmenu.classList.remove('drawer__flyout--open')
    this.icon.classList.remove('hamburger-icon--arrow-left')
    this.isExpanded = false
    this.openedSubmenu = null
    this.mainTogglerClasses()
    // this.subMenus.forEach(submenu => {})
  }

  /**
   *
   */
  initScrollBtns () {
    // this.buttons = nav.querySelectorAll('.scroll-btn')
    this.menuItems.forEach(button => {
      button.addEventListener('click', e => {
        e.preventDefault()
        // const anchor = e.target.getAttribute('href')
        const anchor = button.getAttribute('href')
        // eslint-disable-next-line prefer-destructuring
        const offsetTop = document.querySelector(anchor).offsetTop

        window.scroll({
          top: offsetTop - 60,
          behavior: 'smooth',
        })

        this.mainTogglerClasses()
      })
    })
  }

  /**
   *
   */
  onSubmenuClick() {
    this.menuItems.forEach(item => {
      item.addEventListener('click', e => {
        // Remove active classes
        this.menuItems.forEach(button => {
          if (button !== item) button.parentElement.classList.remove('active')
          // button.parentElement.classList.remove('active')
          // if (button.parentElement.classList.contains('active')) button.parentElement.classList.remove('active')
        })

        item.parentElement.classList.toggle('active')

        // Get opened submenu, match closes it.

        const SubMenu = item.nextElementSibling
        // console.log(SubMenu);
        if (SubMenu) {
          this.toggleFlyout(SubMenu)
        } else {
          this.onBackClick(e.target.parentElement)
        }
      })
    })
  }

  toggleFlyout(openSubmenu) {
    // console.log('toggle flyout')
    // // Check if it's diff sub menu item to open
    if (this.openedSubmenu !== openSubmenu) {
      if (this.openedSubmenu) {
        this.openedSubmenu.classList.remove('drawer__flyout--open')
      }
      this.openedSubmenu = openSubmenu
      this.icon.classList.add('hamburger-icon--arrow-left')
      openSubmenu.classList.add('drawer__flyout--open')
      this.isExpanded = true
    } else {
      this.openedSubmenu = null
      openSubmenu.classList.remove('drawer__flyout--open')
      this.icon.classList.remove('hamburger-icon--arrow-left')
      this.isExpanded = !this.isExpanded
    }
  }

  /**
   * @todo
   * Not implemented
   * Meant to be used for dropdown menus from SUB menu item clicks
   */
  onDropdownClick() {
    this.dropdownMenus.forEach(item => {
      item.addEventListener('click', e => {
        this.onBackClick(e.target.parentElement.parentElement)
      })
    })
  }
}

const sidebarDrawer = {
  init () {
    const wrapperEl = document.querySelector('#drawer-navigation')
    if (wrapperEl !== null) {
        new DrawerSidebar(wrapperEl)
    }
  },
}

export default sidebarDrawer
