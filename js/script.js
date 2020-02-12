// let box = document.getElementsByClassName('box')[0];
// let col = document.getElementsByClassName('col-2')[0];
// // let active = document.getElementsByClassName('active');
// box.addEventListener("click", function(event){
//         let next = col.nextElementSibling.classList.add('active');
//         if (box.classList.contains('active')){
//         box.classList.remove('active');
//         console.log("example");
//         }
// console.log(event)
//            // let toRemove = document.querySelector('active');
// 	// toRemove.parentNode.removeChild(toRemove);
// })
// let products = document.getElementsByClassName('row box');
// let rowWrapper = document.getElementById('rowWrapper');
// rowWrapper.addEventListener('click', function(event){
//     let current = products.index(this)
//     console.log(current)
// })
let rowWrapper = document.getElementById('rowWrapper');
let i;
let active = document.getElementsByClassName('active')
rowWrapper.addEventListener('click', function(event) {
    for (i=0;i<[...rowWrapper.children].length;i++) {
        let startPoint = document.querySelectorAll('.box')[i];
        startPoint.classList.remove('active')
    }
  let index = [...rowWrapper.children].findIndex(el => el == event.target)
  let box = document.getElementsByClassName('box')[index];
  let next = box.nextElementSibling.classList.add('active');
// while (box.classList.contains('active')) {
//     box.classList.remove('active')
// }
//   if (box.classList.contains('active')){
//     box.classList.remove('active')
//     }
})