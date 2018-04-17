document.addEventListener('DOMContentLoaded', function() {

  (function() {
    const modalState = 'modal--active';
    const button = document.querySelector('.js-button');
    const modal = document.querySelector('.js-modal');

    button.addEventListener('click', function(e) {
      modal.classList.add(modalState);
    });

    modal.addEventListener('click', (event) => {
      if(event.target.classList.contains(modalState)) {
          modal.classList.remove(modalState)
      }
    })
  })();


})
