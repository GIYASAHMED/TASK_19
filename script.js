const userNameDisplay = document.querySelector(".user");
const userName = document.getElementById("userName");
const great = document.getElementById("great");
const boxes = document.querySelectorAll('.box');
const heroSection = document.querySelector('.heroSection');


const heroSectionBoxes = document.querySelector('.heroSectionBoxes');

heroSectionBoxes.addEventListener('click', (e)=>{
  let targetValue = e.target.textContent;
  boxes.forEach((box)=>{
    if(box.textContent == targetValue){
      box.style.background = box.textContent;
    }
  })

})


great.addEventListener('click', showName);
userName.addEventListener("keypress", buttonClick)


function showName(){
  userNameDisplay.textContent = `, ${userName.value}`
}

function buttonClick(event){
  console.log(event)
  if(event.key === "Enter"){
    showName()
  }

  
}
