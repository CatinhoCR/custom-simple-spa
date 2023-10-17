import hamburger from './hamburger.html'
import nav from './drawer.html'
import { data } from 'autoprefixer';

class DrawerSidebar {
  constructor(el) {
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
    this.isSidebarOpen = false
    this.isSubmenuExpanded = false
    this.isDocked = false; // @todo

    this.openedSubmenu = document.querySelector('.drawer__flyout--open')
    // this.openDetailsCss = 'drawer__flyout--sub-active'
    this.elem.innerHTML = this.hamburgerHtml + this.navHtml;
    this.onMounted()
  }

  /**
   * @function onCreated()
   *
   */
  onMounted() {
    this.page = document.querySelector('.page')
    this.aside = document.querySelector('.drawer')
    this.drawer = document.querySelector('.drawer__nav')
    this.header = document.querySelector('.drawer__header')
    this.toggler = document.querySelector('.drawer__toggler')
    this.icon = document.querySelector('.drawer__toggler-icon')
    if (this.isDocked) this.elem.classList.add('drawer--docked')

    this.menuItems = [].slice.call(
      document.querySelectorAll('.drawer__button')
    )

    this.subMenus = [].slice.call(
      document.querySelectorAll('.drawer__flyout')
    )

    this.dropdownMenus = [].slice.call(
      document.querySelectorAll('.drawer__sublink')
    )

      this.subcategory = [].slice.call(
        document.querySelectorAll('.drawer__subcategory')
      )
    // this.subcategory = document.querySelector('.drawer__subcategory')
    this.initEventHandlers()
  }

  initEventHandlers() {
    this.clickTriggerButton()
    this.clickMenuItem()
    this.clickSubmenuParent()
    this.navigateToItem()
  }

  clickTriggerButton() {
    this.toggler.addEventListener('click', () => {
      // this.isSidebarOpen = !this.isSidebarOpen
      if (this.isSubmenuExpanded) {
        this.isDocked = true
        this.onBackClick()
      } else {
        // if (this.isDocked) {
        //   this.elem.classList.remove('drawer--docked')
        //   this.isDocked = false
        // }
        this.toggleSidebarClasses()
      }
    })
  }

  clickMenuItem() {
    this.menuItems.forEach(item => {
      item.addEventListener('click', e => {
        const anchor = item.getAttribute('href')
        if (!anchor) {
          e.preventDefault()
        } else {
          this.toggleSidebarClasses()
          console.log('d');
        }
        console.log(anchor);
        // Remove active classes
        this.menuItems.forEach(button => {
          if (button !== item) button.parentElement.classList.remove('drawer__item--active')
          // button.parentElement.classList.remove('active')
          // if (button.parentElement.classList.contains('active')) button.parentElement.classList.remove('active')
        })

        item.parentElement.classList.toggle('drawer__item--active')

        // Get opened submenu, match closes it.

        const SubMenu = item.nextElementSibling
        // console.log(SubMenu);
        if (SubMenu) {
          if (!this.isSidebarOpen) {
            // this.isSidebarOpen = true
            this.toggleSidebarClasses()
          }
          // if (!this.isOpen) {
          //   this.page.classList.add('drawer__page')
          //   this.aside.classList.add('drawer--open')
          //   this.icon.classList.add('hamburger-icon--open')
          //   this.drawer.classList.add('drawer__nav--open')
          //   this.header.classList.add('drawer__header--visible')
          //   this.isOpen = true;
          // }
          this.toggleFlyout(SubMenu)
        } else {
          this.onBackClick(e.target.parentElement)
        }
      })
    })
  }

  clickSubmenuParent() {
    this.subcategory.forEach(item => {
      item.addEventListener('click', () => {
        this.onBackClick()
      })
    })
    // this.subcategory.addEventListener('click', () => {
    //   this.onBackClick()
    // })
  }

  onBackClick(target = null) {
    // console.log('back sub menu')
    if (target || this.openedSubmenu) {
      this.menuItems.forEach(button => {
        if (target !== button || this.openedSubmenu === button) {
          button.parentElement.classList.remove('drawer__item--active')
        }
      })
    }
    if (this.openedSubmenu) this.openedSubmenu.classList.remove('drawer__flyout--open')
    this.icon.classList.remove('hamburger-icon--arrow-left')
    this.isSubmenuExpanded = false
    this.openedSubmenu = null
    this.isDocked = true
    if (this.isDocked) this.elem.classList.add('drawer--docked')
    // this.isSidebarOpen = false
    // this.header.innerHTML = 'Collapse Sidebar'
    // this.mainTogglerClasses()
    // this.subMenus.forEach(submenu => {})
  }

  toggleSidebarClasses() {
    this.page.classList.toggle('drawer__page')
    this.aside.classList.toggle('drawer--open')
    this.icon.classList.toggle('hamburger-icon--open')
    this.drawer.classList.toggle('drawer__nav--open')
    this.header.classList.toggle('drawer__header--visible')
    this.isSidebarOpen = !this.isSidebarOpen
    // this.isOpen = !this.isOpen
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
      this.isSubmenuExpanded = true
      // this.header.innerHTML = 'Collapse Item Submenu'
    } else {
      this.openedSubmenu = null
      openSubmenu.classList.remove('drawer__flyout--open')
      this.icon.classList.remove('hamburger-icon--arrow-left')
      this.isSubmenuExpanded = false
      // this.header.innerHTML = 'Collapse Sidebar'
    }
  }

  navigateToItem() {
    this.dropdownMenus.forEach(dropdown => {
      dropdown.addEventListener('click', () => {
        this.toggleSidebarClasses()
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
