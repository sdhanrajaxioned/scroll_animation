var boxes = document.querySelectorAll('.box')

var viewport_height = window.innerHeight 
window.addEventListener('scroll',showBoxes())

// boxes.forEach((box) => console.log(box.getBoundingClientRect().top))
function showBoxes() {
  
  console.log(viewport_height)
  boxes.forEach(function(box) {
    var box_top = box.getBoundingClientRect().top;
    console.log(box_top)
    if(box_top < viewport_height) {
      box.classList.add('show')
    }
    else{
      box.classList.remove('show')
    }
  })
}