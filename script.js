const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");

const col12 = document.getElementById("col12");
const col22 = document.getElementById("col22");

function goGithub() {
  window.location.href = "https://github.com/heyitsM"
}

function goLinkedin() {
  window.location.href = "https://www.linkedin.com/in/emily-berger-941161207/"
}

function goEmail() {
  window.location.href = "mailto:eberge11@jhu.edu"
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
  alert("hello world")
}
