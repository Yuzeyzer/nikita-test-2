// let resultRightBox = document.getElementsByClassName('ResultsRigthBoxWrapper')[0];
// let array = [];
// console.log(resultRightBox)
// resultRightBox.addEventListener('click', function(event) {
//   'use strict';
//   event.preventDefault();
//   let products = document.getElementsByClassName('productListThumb');
//   let index = [...products].findIndex(el => el === event.target);
//   if (event.target.classList.contains('productListThumb')) {
//     window.location.href = document.getElementsByClassName('productListThumb')[index+3].href;
//     console.log(window.location.href = document.getElementsByClassName('productListThumb')[index+3].href)
//   }
// });
document.querySelector('#tResult').addEventListener('click', function(event) {
  'use strict';
  event.preventDefault();
  let products = document.getElementsByClassName('productListThumb');
  let index = [...products].findIndex(el => el === event.target);
  if (event.target.parentNode.classList.contains('prodImageInner')) {
    window.location.href = document.getElementsByClassName('productListThumb')[index+3].href;
  }
});