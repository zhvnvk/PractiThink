document.addEventListener('DOMContentLoaded', function () {
    // TABS
    const tabsItems = document.querySelectorAll('.tabs__item')
    const commentsTabsItems = document.querySelectorAll('.comments-tabs__item')

    if (tabsItems) {
        tabsItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.tabs__item').forEach((child) => child.classList.remove('tabs__item--active'))
                document.querySelectorAll('.tabs__content').forEach((child) => child.classList.remove('tabs__content--active'))
    
                item.classList.add('tabs__item--active')
                document.querySelectorAll('.tabs__content')[i].classList.add('tabs__content--active')
            })
        })
    }

    if (commentsTabsItems) {
        commentsTabsItems.forEach((item, i) => {
            item.addEventListener('click', () => {
                document.querySelectorAll('.comments-tabs__item').forEach((child) => child.classList.remove('comments-tabs__item--active'))
                document.querySelectorAll('.comments-tabs__content').forEach((child) => child.classList.remove('comments-tabs__content--active'))
    
                item.classList.add('comments-tabs__item--active')
                document.querySelectorAll('.comments-tabs__content')[i].classList.add('comments-tabs__content--active')
            })
        })
    }
    // MOBILE MENU
    const hamburger = document.getElementById('hamburger-toggle')
    const mobileMenu = document.querySelector('.header__overlay')

    if (hamburger) {
        hamburger.addEventListener('click', (event) => {
            event.preventDefault()

            if (hamburger.classList.contains('hamburger--active') && mobileMenu.classList.contains('header__overlay--active')) {
                hamburger.classList.remove('hamburger--active')
                mobileMenu.classList.remove('header__overlay--active')
                document.body.classList.remove('scroll-disabled')
            } else {
                hamburger.classList.add('hamburger--active')
                mobileMenu.classList.add('header__overlay--active')
                document.body.classList.add('scroll-disabled')
            }
        })
    }
});