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

// Call the dropdowns via JavaScript
const dropdownElementList = [].slice.call(
  document.querySelectorAll('.dropdown-toggle')
)
const dropdownList = dropdownElementList.map(function (dropdownToggleEl) {
  return new bootstrap.Dropdown(dropdownToggleEl)
})

//show search results
const searchInput = document.querySelector('#game-search')
const searchResult = document.querySelector('.search-details')

searchInput?.addEventListener('focus', () => {
  searchResult.classList.add('active')
})

//notification dropdown
const notificationBtn = document.querySelector('.notification')
const notificationDropdown = document.querySelector('.notification-dropdown')
notificationBtn?.addEventListener('click', () => {
  notificationDropdown.classList.toggle('active')
})

//add listing page
const searchLists = document.querySelectorAll('.search-details li > div')
const resetBtn = document.querySelector('.reset-btn')
const searchSectionEl = document.querySelector('.search-section')
const selectedSectionEl = document.querySelector('.selected-section')
searchLists?.forEach((searchItem) => {
  searchItem.addEventListener('click', () => {
    searchResult.classList.remove('active')
    let scrollHeight = selectedSectionEl.scrollHeight
    searchSectionEl.style.cssText = 'height: 0px; overflow: hidden'
    selectedSectionEl.style.height = scrollHeight + 'px'
  })
})
resetBtn?.addEventListener('click', () => {
  let scrollHeight = searchSectionEl.scrollHeight
  console.log('reset')
  selectedSectionEl.style.height = '0px'
  searchSectionEl.style.cssText = `height: ${scrollHeight}px; overflow: hidden`
  setTimeout(() => {
    searchSectionEl.style.overflow = 'unset'
  }, 300)
})

//add game page dropdown
const changingBackground = document.querySelector('.system')
const changingText = document.querySelector('.changing-text')
const systemItems = document.querySelectorAll('.system-item')
const systemDropdown = document.querySelector('.system-dropdown')
const searching = document.querySelector('.searching')
const searchGame = document.querySelector('.search-game-btn')

systemItems.forEach((systemItem) => {
  systemItem.addEventListener('click', () => {
    changingText.innerHTML = systemItem?.innerText || ''
    changingBackground.style.background = systemItem.getAttribute('data-color')
  })
})

searchGame?.addEventListener('click', () => {
  searchGame.innerHTML = '<i class="fa fa-spinner fa-pulse fa-fw"></i>'
  systemDropdown.classList.add('d-none')
  searching.classList.remove('d-none')
})

//product
const priceInput = document.querySelector('#price-input')
const priceElement = document.querySelector('#price')

priceInput?.addEventListener('click', () => {
  const scrollHeight = priceElement.scrollHeight
  if (priceInput.checked) {
    priceElement.style.height = scrollHeight + 'px'
  } else priceElement.style.height = 0
})

//media modal
const mediaModal = document.querySelector('.media-modal')
const mediaOverlay = document.querySelector('.media-overlay')
const mediaItemImages = document.querySelectorAll('.media-item')

mediaItemImages?.forEach((image) => {
  image.addEventListener('click', () => {
    const imgElement = document.createElement('img')
    const imageSrc = image.getAttribute('data-image')
    const video = image.getAttribute('data-video')
    mediaModal.innerHTML = null
    if (imageSrc) {
      imgElement.setAttribute('src', imageSrc)
      mediaModal.appendChild(imgElement)
      mediaModal.classList.remove('d-none')
      mediaOverlay.classList.remove('d-none')
    } else {
      const videoWrapper = document.createElement('div')
      videoWrapper.classList.add('video-wrapper')
      videoWrapper.innerHTML = video
      mediaModal.classList.remove('d-none')
      mediaOverlay.classList.remove('d-none')
      mediaModal.appendChild(videoWrapper)
    }
  })
})
mediaOverlay?.addEventListener('click', () => {
  mediaModal.classList.add('d-none')
  mediaOverlay.classList.add('d-none')
})
