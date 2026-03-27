function toggleSidebar(){

document.getElementById("sidebar").classList.toggle("collapsed")

}

function showTab(tabId){

// hide all tabs
document.querySelectorAll(".tab").forEach(tab=>{
tab.classList.remove("active");
});

// show selected tab
document.getElementById(tabId).classList.add("active");

// remove nav highlights
document.querySelectorAll(".sidebar li").forEach(item=>{
item.classList.remove("active");
});

// highlight selected nav item
document.getElementById("nav-" + tabId).classList.add("active");

// save tab
localStorage.setItem("activeTab", tabId);

}

window.addEventListener("load", () => {

let savedTab = localStorage.getItem("activeTab");

if(savedTab){
showTab(savedTab);
}else{
showTab("intro");
}

});

let acc = document.querySelectorAll(".accordion-btn");

acc.forEach(button => {
button.addEventListener("click", function(){

let content = this.nextElementSibling;

if(content.style.display === "block"){
content.style.display = "none";
}else{
document.querySelectorAll(".accordion-content").forEach(c=>{
c.style.display = "none";
});
content.style.display = "block";
}

});
});

let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index){
slides.forEach(slide => slide.classList.remove("active"));
slides[index].classList.add("active");
}

function changeSlide(direction){
currentSlide += direction;

if(currentSlide < 0){
currentSlide = slides.length - 1;
}

if(currentSlide >= slides.length){
currentSlide = 0;
}

showSlide(currentSlide);
}

/* Image expand modal */

function openModal(img){
document.getElementById("imgModal").style.display = "flex";
document.getElementById("modalImg").src = img.src;
}

function closeModal(){
document.getElementById("imgModal").style.display = "none";
}