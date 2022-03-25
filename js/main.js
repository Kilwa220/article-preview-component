let social = document.querySelector(".social");

let shares = document.querySelectorAll(".share");

shares.forEach((share) => {
  share.addEventListener("click", (e) => {
    if (social.style.opacity == 0) {
      social.style.cssText = " opacity: 1; visibility: visible;";
    } else {
      social.style.cssText = " opacity: 0; visibility: hidden;";
    }
  });
});
