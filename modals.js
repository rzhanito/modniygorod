/* const wrapper = document.querySelector('.team-wrap')

wrapper.addEventListener('click', event => {
   event.preventDefault()
   const t = event.target,
      masterButton = t.closest('.master-more'),
      masterParent = t.closest('.team-master')



   if (masterButton && masterParent) {
      const info = document.querySelector('.master-description'),
         masterClose = document.querySelector('.modal-close')
      info && info.classList.toggle('hidden')

      masterClose.addEventListener('click', () => {
         info.classList.add('hidden')
      })
   }

}) */