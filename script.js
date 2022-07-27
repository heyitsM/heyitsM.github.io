const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");

const col12 = document.getElementById("col12");
const col22 = document.getElementById("col22");

const width = document.getElementById("getwidth");
const background = document.body;
const switch_color_mode = document.getElementById("switch");

const buttons = document.getElementsByClassName("button_change");

const dark_boxes = document.getElementsByClassName("card_change");
const light_boxes = document.getElementsByClassName("card_change_light");
const text = document.getElementsByClassName("text_changing");

const about = document.getElementById("btn_about");
const resume = document.getElementById("btn_resume");
const code = document.getElementById("btn_code");

const in_box = document.getElementsByClassName("warning_to_light");

function goDark() {
  background.style.backgroundColor="Gray";
  //background.className="bg-"

  for (let i = 0; i < text.length; i++) {
    text[i].style.color="White";
  }

  for (let k = 0; k < dark_boxes.length; k++) {
    dark_boxes[k].className="card border-light card_change";
    dark_boxes[k].style.backgroundColor="DimGray";
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className="btn btn-outline-light button_change";
  }

  for (let i = 0; i < in_box.length; i++) {
    in_box[i].className="btn btn-outline-light warning_to_light";
  }

  for (let i = 0; i < light_boxes.length; i++) {
    light_boxes[i].style.backgroundColor="LightGray";
  }

  about.src="images/about_dark.svg";
  resume.src="images/resume_dark.svg";
  code.src="images/code_dark.svg";
}

function goLight() {
  background.style.backgroundColor="white";
  
  for (let i = 0; i < text.length; i++) {
    text[i].style.color="Black";
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className="btn btn-outline-dark button_change";
  }

  for (let i = 0; i < dark_boxes.length; i++) {
    dark_boxes[i].className="card border-dark card_change";
    dark_boxes[i].style.backgroundColor="White";
  }

  for (let i = 0; i < in_box.length; i++) {
    in_box[i].className="btn btn-outline-warning warning_to_light";
  }

  for (let i = 0; i < light_boxes.length; i++) {
    light_boxes[i].style.backgroundColor="White";
  }

  about.src="images/about_light.svg";
  resume.src="images/resume_light.svg";
  code.src="images/code_light.svg";
}

function switchLightMode() {
  if (dark_boxes[0].className === "card border-dark card_change") {
    goDark();
  } else {
    goLight();
  }
}

function showAboutMe() {
  if (col1.style.display == "none") {
    col1.style.display = "block";
    col12.style.display = "none";
  } else {
    col1.style.display = "none";
    col12.style.display = "block";
  }
}

function showProjects() {
  if (col2.style.display == "none") {
    col2.style.display = "block";
    col22.style.display = "none";
  } else {
    col2.style.display = "none";
    col22.style.display = "block";
  }
}
