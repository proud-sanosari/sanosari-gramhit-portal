// ===== Mobile Menu =====

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });
}

// ===== Homepage Stats =====

const complaintCount = document.getElementById("complaintCount");
const newsCount = document.getElementById("newsCount");
const pollCount = document.getElementById("pollCount");
const galleryCount = document.getElementById("galleryCount");

if (complaintCount) complaintCount.innerText = "0";
if (newsCount) newsCount.innerText = "0";
if (pollCount) pollCount.innerText = "0";
if (galleryCount) galleryCount.innerText = "0";