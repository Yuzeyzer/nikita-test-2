let resultRightBox = document.getElementsByClassName('ResultsRigthBoxWrapper')[0];
resultRightBox.addEventListener('click', function(event) {
  'use strict';
  let products = document.getElementsByClassName('productListThumb');
  let index = [...products].findIndex(el => el === event.target);
  if (event.target.classList.contains('productListThumb')) {
    window.location.href = document.getElementsByClassName('productListThumb')[index+3].href;
  }
});