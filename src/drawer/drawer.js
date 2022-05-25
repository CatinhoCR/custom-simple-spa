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

  // Get initial data, selectors
  init() {
    this.isExpanded = false
    this.isDocked = false

    // this.openedSubmenu = document.querySelector('.drawer__flyout--open')
    // this.openDetailsCss = 'drawer__flyout--sub-active'
    this.elem.innerHTML = this.hamburgerHtml + this.navHtml;
    this.render()
  }

  //
  render() {
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

    this.afterRender()
  }

  //
  afterRender() {
    this.onTogglerClick();
    // this.onSubmenuClick();
    this.initScrollBtns();
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

  onBackClick() {
    // console.log('back sub menu')
    // this.subMenus = [].slice.call(
    //   document.querySelectorAll('.drawer__flyout')
    // )
    // function isThirdLevel(element) {
    //   return element.classList.contains('drawer__flyout--sub-active')
    // }
    // if (this.subMenus.some(isThirdLevel)) {
    //   this.openedSubmenu.classList.remove(this.openDetailsCss)
    //   // this.detailsNav.classList.remove('active')
    //   this.isExpanded = true
    // } else {
    //   this.openedSubmenu.classList.remove('drawer__flyout--open')
    //   this.icon.classList.remove('hamburger-icon--arrow-left')
    //   this.isExpanded = false
    // }
    // this.subMenus.forEach(submenu => {})
  }

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

  onSubmenuClick() {
    this.menuItems.forEach(item => {
      item.addEventListener('click', e => {
        // Remove active classes
        this.menuItems.forEach(button => {
          button.parentElement.classList.remove('active')
        })

        item.parentElement.classList.add('active')

        // Get opened submenu, match closes it.

        // const SubMenu = item.nextElementSibling
        // if (SubMenu) {
        //   this.toggleFlyout(SubMenu)
        // } else {
        //   this.onBackClick()
        // }
      })
    })
  }

  toggleFlyout(openSubmenu) {
    // console.log('toggle flyout')
    // // Check if it's diff sub menu item to open
    // if (this.openedSubmenu !== openSubmenu) {
    //   if (this.openedSubmenu) {
    //     this.openedSubmenu.classList.remove('drawer__flyout--open')
    //   }
    //   this.openedSubmenu = openSubmenu
    //   this.icon.classList.add('hamburger-icon--arrow-left')
    //   openSubmenu.classList.add('drawer__flyout--open')
    //   this.isExpanded = true
    // } else {
    //   openSubmenu.classList.remove('drawer__flyout--open')
    //   this.icon.classList.remove('hamburger-icon--arrow-left')
    //   this.isExpanded = !this.isExpanded
    // }
  }
}

const sidebarDrawer = {
  init () {
    const wrapperEl = document.querySelector('#drawer-navigation')
    // const wrapperEl = document.querySelectorAll('.vod-category-slider')
    if (wrapperEl !== null) {
      // document.addEventListener('DOMContentLoaded', () => {
        // const miscNav = new DrawerSidebar(wrapperEl) // eslint-disable-line no-unused-vars
        new DrawerSidebar(wrapperEl)
        // wrapperEl.forEach(component => {
        //   new VODCategorySlider(component) // eslint-disable-line no-new
        // })
      // })
    }
  },
}

export default sidebarDrawer
