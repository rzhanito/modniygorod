
/* const body = document.body

body.addEventListener('click', event => {
   event.preventDefault()
   const t = event.target,
      modalWindow = document.querySelector('.modal-visit'),
      modalClose = t.closest('.modal-close'),
      modalSendButton = t.closest('.visit-button'),
      visitButton = t.closest('.header-button'),
      serviceButton = t.closest('.service-button')


   if (t === visitButton || t === serviceButton) {
      modalWindow.style.display = 'flex';
   } else if (t === modalClose || t === modalSendButton) {
      modalWindow.style.display = 'none'
   }


}) */

const headerButton = document.querySelector('.header-button'),
   serviceButton = document.querySelector('.service-button'),
   modalWindow = document.querySelector('.modal-visit'),
   modalCloseButton = document.querySelector('.modal-close'),
   modalVisitButton = document.querySelector('.visit-button'),
   modalButtons = document.querySelectorAll('.button'),
   modalInner = document.querySelector('.modal-inner'),
   mainButton = document.querySelector('.main-button')


modalButtons.forEach((button) => {
   button.addEventListener('click', event => {
      event.preventDefault()
      if (event.target === serviceButton || event.target === headerButton || event.target === mainButton)
         modalWindow.style.display = 'flex'/* 
      document.body.style.overflow = 'hidden' */
      document.body.style.cssText = 'height: 100%; overflow: hidden;'
   })
})
modalWindow.addEventListener('click', event => {
   event.preventDefault()
   const isModal = event.target.closest('.visit-inner')
   if (!isModal) {
      modalWindow.style.display = 'none'/* 
      document.body.style.overflow = 'visible' */
      document.body.style.cssText = 'height: 100%; overflow: visible;'
   }

   if (event.target === modalCloseButton || event.target === modalVisitButton) {/* 
      document.body.style.overflow = 'visible' */
      modalWindow.style.display = 'none'
      document.body.style.cssText = 'height: 100%; overflow: visible;'
   }
})
/* 
modalShow.addEventListener('click', event => {
   event.preventDefault()
   if (event.target === modalShow)
      modalWindow.style.display = 'flex'
})

modalShowTwo.addEventListener

 */

