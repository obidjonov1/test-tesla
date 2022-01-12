var header = document.getElementById("header");
var ms = document.getElementById("modelS");
var m3 = document.getElementById("model3");
var mx = document.getElementById("modelX");
var my = document.getElementById("modelY");
var model = document.getElementById("model");
var h2 = document.getElementById("h2");
var maxspeed = document.getElementById("maxSpeed");
var maxrange = document.getElementById("maxRange");

ms.onclick = function () {
  header.style.backgroundImage = "url(images/image-1.png)";
  model.innerHTML = "Model S";
  h2.innerHTML = "1.9 s";
  maxspeed.innerHTML = "200 mph";
  maxrange.innerHTML = "396 mi";
};
m3.onclick = function () {
  header.style.backgroundImage = "url(images/image-2.jpg)";
  model.innerHTML = "Model 3";
  h2.innerHTML = "3.1 s";
  maxspeed.innerHTML = "261 mph";
  maxrange.innerHTML = "272 mi";
};
mx.onclick = function () {
  header.style.backgroundImage = "url(images/image-3.jpeg)";
  model.innerHTML = "Model X";
  h2.innerHTML = "2.5 s";
  maxspeed.innerHTML = "262 mph";
  maxrange.innerHTML = "360 mi";
};
my.onclick = function () {
  header.style.backgroundImage = "url(images/image-4.png)";
  model.innerHTML = "Model Y";
  h2.innerHTML = "4.8 s";
  maxspeed.innerHTML = "250 mph";
  maxrange.innerHTML = "326 mi";
};
