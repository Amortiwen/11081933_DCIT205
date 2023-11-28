'use strict';
 
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
} 

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);
 

const header = document.querySelector("[data-header]");

const headerActive = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

window.addEventListener("scroll", headerActive);

function showPopup(staffId) {
  const staffCard = document.getElementById(staffId);
  const popup = document.getElementById('popup');
  const popupImg = document.getElementById('popup-img');
  const popupName = document.getElementById('popup-name');
  const popupTitle = document.getElementById('popup-title');
  const popupBio = document.getElementById('popup-bio'); 
  // Replace with actual staff details
  const staffDetails = {
      id: staffId,
      imgSrc: staffCard.querySelector('img').src,
      name: staffCard.querySelector('h3').innerText,
      title: staffCard.querySelector('p').innerText,
      bio: "Things get interesting because you are eager to know more , or you become eager to know more because it is interesting?",
  
  };

  popupImg.src = staffDetails.imgSrc;
  popupName.innerText = staffDetails.name;
  popupTitle.innerText = staffDetails.title;
  popupBio.innerText = staffDetails.bio;
 
  popup.style.display = 'block';
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}


// JavaScript functionality for form submission
function submitForm(event) {
  event.preventDefault();

  // Retrieve form data
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
      data[key] = value;
  });

  // Log form data to the console (replace with your desired logic)
  console.log('Form Data:', data);
  
}