const userNameDisplay = document.querySelector(".user");
const userName = document.getElementById("userName");
const great = document.getElementById("great");
const boxes = document.querySelectorAll('.box');
const heroSection = document.querySelector('.heroSection');

great.addEventListener('click',()=>{
  userNameDisplay.textContent = `, ${userName.value}`;
})

const heroSectionBoxes = document.querySelector('.heroSectionBoxes');

heroSectionBoxes.addEventListener('click', (e)=>{
  let targetValue = e.target.textContent;
  boxes.forEach((box)=>{
    if(box.textContent == targetValue){
      box.style.background = box.textContent;

      // Extra functionlity.
      // heroSection.style.background = box.textContent;
    }
  })

})

