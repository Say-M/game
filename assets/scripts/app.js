//change header background color
const header = document.querySelector('header')
const headerEvents = ['scroll', 'DOMContentLoaded']
headerEvents.forEach((headerEvent) => {
  window.addEventListener(headerEvent, (e) => {
    if (e.target.scrollingElement.scrollTop > 50)
      header.classList.add('bg-dark')
    else header.classList.remove('bg-dark')
  })
})

//header functions
const ellipsis = document.querySelector('.ellipsis')
const rightHeader = document.querySelector('.right-header')
ellipsis.addEventListener('click', () => rightHeader.classList.toggle('active'))

//Sidebar functionality
const menu = document.querySelector('.menu')
const close = document.querySelector('.close')
const sidebar = document.querySelector('.left-header ul')
const listingBtn = document.querySelector('.list-nav')
const listingSub = document.querySelector('.list-nav > div')
menu.addEventListener('click', () => {
  sidebar.classList.add('active')
})
close.addEventListener('click', () => {
  sidebar.classList.remove('active')
})
listingBtn.addEventListener('click', () => {
  const height = listingSub.clientHeight
  const scrollHeight = listingSub.scrollHeight
  if (height === 0) {
    listingSub.style.height = scrollHeight + 'px'
  } else listingSub.style.height = 0
})

//search
const searchBtn = document.querySelectorAll('.search-btn')
const closeSearchBtn = document.querySelector('.close-search-btn')
const searchElement = document.querySelector('.search-box')
searchBtn.forEach((eachBtn) => {
  eachBtn.addEventListener('click', () => {
    searchElement.classList.add('active')
  })
})

closeSearchBtn.onclick = () => {
  searchElement.classList.remove('active')
}
