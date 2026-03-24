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