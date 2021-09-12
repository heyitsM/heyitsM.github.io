const col1 = document.getElementById("col1");
const col2 = document.getElementById("col2");

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
  } else {
    col1.style.display = "none";
  }
}

function showProjects() {
  if (col2.style.display == "none") {
    col2.style.display = "block";
  } else {
    col2.style.display = "none";
  }
}
