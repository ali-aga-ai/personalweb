window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop; //absolute value of pixels scrolled
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight; //totaql height of entire doc
  var scrolled = (winScroll / height) * 100; //%ge of webpage scrolled

  var myComponent = document.getElementById("new");
  var progComponent = document.getElementById("prog");

  var blog = document.getElementById("blog");
  var about_txt = document.getElementById("about_txt");
  var about = document.getElementById("about");

  var trans = document.getElementById("trans");
  document.getElementById("myBar").style.width = scrolled + "%";
  
  if(scrolled>0){
    document.getElementById("new").style.position = "fixed";
    document.getElementById("new").style.backgroundColor= "white";
    document.getElementById("new").style.opacity= "  0.85";
    document.getElementById("new").classList.add("fixed");


  }else {
    document.getElementById("new").style.backgroundColor= "";
    document.getElementById("new").classList.remove("fixed");
    document.getElementById("new").style.position = "";
    document.getElementById("new").style.top = "";

}
if (winScroll>=435) {
  progComponent.style.position = "fixed";
  progComponent.style.top = myComponent.offsetHeight + "px";
} 
else{
  progComponent.style.top = "";
  progComponent.style.position = "";

}

if (winScroll >= 435 && winScroll < height - 500) {
  trans.style.position = "fixed";
  trans.style.left = "10px";
  trans.style.top = "100px";
  trans.style.transition = "transform 0.5s ease"; // Apply transition
  trans.style.transform = "translateX(0)";
  trans.style.marginLeft = "3vw";

} 

else if (winScroll >= height - 500) {
  trans.style.position = "fixed";
  trans.style.left = "0"; // Change this value to your desired left position
  trans.style.top = "100px";
  trans.style.transition = "transform 0.5s ease"; // Apply transition
  trans.style.transform = "translateX(-100%)";
  trans.style.marginLeft = "0px";
}
  
  
  else {
  trans.style.position = "relative";
  trans.style.left = "";
  trans.style.top = "";
  trans.style.transition = "none"; // Disable transition for other cases
  trans.style.marginLeft = "3vw";

}



}
