const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");

const col12 = document.getElementById("col12");
const col22 = document.getElementById("col22");

const width = document.getElementById("getwidth");
const background = document.body;
const switch_color_mode = document.getElementById("switch");

const buttons = document.getElementsByClassName("button_change");
const dark_boxes = document.getElementsByClassName("card_change");
const title = document.getElementById("h1title");

function goGithub() {
  window.location.href = "https://github.com/heyitsM";
}

function goLinkedin() {
  window.location.href = "https://www.linkedin.com/in/emily-berger-941161207/";
}

function goEmail() {
  window.location.href = "mailto:eberge11@jhu.edu";
}

function goDark() {
  background.style.backgroundColor="Gray";
  title.style.color="White";

  for (let k = 0; k < dark_boxes.length; k++) {
    dark_boxes[k].className="card border-light card_change";
    dark_boxes[k].style.backgroundColor="DimGray";
  }

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className="btn btn-outline-light button_change";
  }
  
}

function goLight() {
  background.style.backgroundColor="white";
  title.style.color="Black";

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].className="btn btn-outline-dark button_change";
  }

  for (let i = 0; i < dark_boxes.length; i++) {
    dark_boxes[i].className="card border-dark card_change";
    dark_boxes[i].style.backgroundColor="White";
  }
}

function switchLightMode() {
  if (buttons[0].className === "btn btn-outline-dark button_change") {
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

function webPDF() {
  alert(width.clientWidth)
}
