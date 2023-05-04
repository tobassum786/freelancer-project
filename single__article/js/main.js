 // Select all elements with the "i" tag and store them in a NodeList called "stars"
const stars = document.querySelectorAll(".stars i");

// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

//reveal the hidden content

//=================popup model============
const model = document.querySelector('.hidden__content');
var closeBtn = document.getElementById("close");

closeBtn.onclick = function() {
    model.style.display = "none";
}

const rvBtn = document.querySelector('.model-btn');
const hiddenModel = document.querySelector('.hidden__content');

function revealModel() {
    if(hiddenModel.classList.contains('show__model')) {
        hiddenModel.classList.remove('show__model')
        return false;
    } else {
        hiddenModel.classList.add('show__model')
        return false;
    }
}

rvBtn.addEventListener('click', revealModel);

////show pop up

const btnP = document.querySelector('.btn-glasss');
const hiddenPop = document.querySelector('.popup__wrapper');

function showPopup (){
    if(hiddenPop.classList.contains('show')) {
        hiddenPop.classList.remove('show')
        return false;
    } else {
        hiddenPop.classList.add('show')
        return false;
    }
}

btnP.addEventListener('click', showPopup);

