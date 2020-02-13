// let rowWrapper = document.getElementById('row');
// let i;
// let products = document.getElementsByClassName('products')
// document.addEventListener('click', function(event) {
//   let index = [...rowWrapper.children].findIndex(el => el == event.target)
//     let box = document.getElementsByClassName('products')[index+2].target;
//   console.log(box);
//   let next = box.nextElementSibling.location.hash;
//   console.log(next)
// })
// let count = 0;
//   let balloon = document.getElementsByClassName("balloon__childs")
//   balloon.addEventListener("click", function(event){
//        document.getElementsByClassName('balloon__count_item')[count].src = event.target.src
//        count++
//       console.log(event.target.src)
//   })
//   let small = document.getElementsByClassName('small-img');
// document.addEventListener('click',function(event){
//    if(event.target.classList.contains('small-img')){
//       document.querySelector('.big-img').src = event.target.src
//    }
// })
let rowWrapper = document.getElementById('row');
let products = document.getElementsByClassName('GridProducts')
console.log(products)
rowWrapper.addEventListener('click', function(event) {
  let index = [...rowWrapper.children].findIndex(el => el == event.target.parentNode)
  if(event.target.parentNode.classList.contains('GridProducts')){
    console.log(document.getElementsByClassName('products')[index+3].href);;
    window.location.href = document.getElementsByClassName('products')[index+3].href;
    // document.getElementsByClassName('products')[index].href = document.getElementsByClassName('products')[index+2].href;
    // let box = document.getElementsByClassName('products')[index+2].href;)
 }
//  console.log(document.getElementsByClassName('products')[index+2].href);
})