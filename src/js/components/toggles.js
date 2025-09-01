import { disableScroll } from '../functions/disable-scroll.js'
import { enableScroll } from '../functions/enable-scroll.js'

;(function () {
  const burger = document.querySelector('[data-burger]')
  const menu = document.querySelector('[data-mobile-menu]')
  const cartButton = document.querySelector('[data-cart-button]')
  const cartPanel = document.querySelector('[data-cart-panel]')
  const cartCloseButton = document.querySelector('[data-cart-close]')
  // const overlay = document.querySelector('[data-menu-overlay]')

  if (!burger || !menu) return

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('header__burger--active')
    menu.classList.toggle('header__mobile-navigation--open')
    // overlay.classList.toggle('overlay--active')

    if (menu.classList.contains('header__mobile-navigation--open')) {
      burger.setAttribute('aria-expanded', 'true')
      burger.setAttribute('aria-label', 'Close menu')
      disableScroll()
    } else {
      burger.setAttribute('aria-expanded', 'false')
      burger.setAttribute('aria-label', 'Open menu')
      enableScroll()
    }
  })

  // overlay.addEventListener('click', () => {
  //   closeMenu()
  // })

  const closeMenu = () => {
    burger.setAttribute('aria-expanded', 'false')
    burger.setAttribute('aria-label', 'Open menu')
    burger.classList.remove('page-header__burger--active')
    menu.classList.remove('page-header__navigation--active')
    // overlay.classList.remove('overlay--active')
    enableScroll()
  }

  // Cart panel functionality
  if (cartButton && cartPanel) {
    cartButton.addEventListener('click', (e) => {
      e.preventDefault()
      cartButton.classList.toggle('icon-button--active')
      cartPanel.classList.toggle('cart-panel--open')

      if (cartPanel.classList.contains('cart-panel--open')) {
        cartButton.setAttribute('aria-expanded', 'true')
        cartButton.setAttribute('aria-label', 'Close cart')
        disableScroll()
        // Close mobile menu if it's open
        if (menu.classList.contains('page-header__navigation--active')) {
          closeMenu()
        }
      } else {
        cartButton.setAttribute('aria-expanded', 'false')
        cartButton.setAttribute('aria-label', 'Open cart')
        enableScroll()
      }
    })
  }

  // Handler for cart close button
  if (cartCloseButton) {
    cartCloseButton.addEventListener('click', () => {
      closeCart()
    })
  }

  const closeCart = () => {
    if (cartButton && cartPanel) {
      cartButton.setAttribute('aria-expanded', 'false')
      cartButton.setAttribute('aria-label', 'Open cart')
      cartButton.classList.remove('icon-button--active')
      cartPanel.classList.remove('cart-panel--open')
      enableScroll()
    }
  }

  // Close panels on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (menu.classList.contains('page-header__navigation--active')) {
        closeMenu()
      }
      if (cartPanel && cartPanel.classList.contains('cart-panel--open')) {
        closeCart()
      }
    }
  })

  // Close panels on window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      closeMenu()
      closeCart()
    }
  })
})()
