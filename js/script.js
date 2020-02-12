let rowWrapper = document.getElementById('rowWrapper');
let i;
let active = document.getElementsByClassName('active')
rowWrapper.addEventListener('click', function(event) {
    for (i=0;i<[...rowWrapper.children].length;i++) {
        let startPoint = document.querySelectorAll('.box')[i];
        startPoint.classList.remove('active')
    }
  let index = [...rowWrapper.children].findIndex(el => el == event.target)
  let box = document.getElementsByClassName('box')[index +2];
  let next = box.nextElementSibling.classList.add('active');
})