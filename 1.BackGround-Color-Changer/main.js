let bodyEle = document.getElementById("body"),
  colorChanger = document.getElementById("button");

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function random() {
  let r, g, b;
  red = getRandomInt(0, 255);
  green = getRandomInt(0, 255);
  blue = getRandomInt(0, 255);

  let final = "rgb" + "(" + red + " ," + green + " ," + blue + ")";
  return final;
}

function output() {
  bodyEle.style.backgroundColor = random();
}
colorChanger.addEventListener("click", output);







