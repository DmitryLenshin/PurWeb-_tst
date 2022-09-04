document.querySelectorAll(".video").forEach((vid) => {
  vid.onclick = () => {
    document.querySelector(".pop-up").style.display = "block";
  };
});

document.querySelector(".pop-up .btn").onclick = () => {
  document.querySelector(".pop-up").style.display = "none";
};

// burger


document.querySelectorAll(".header__nav-btn").forEach((vid) => {
  vid.onclick = () => {
    document.querySelector(".header__nav-mobile").style.display = "block";
    document.querySelector(".burger-cloz").style.display = "block";
    document.querySelector(".header__nav-btn").style.display = "none";
  };
});

document.querySelector(".burger-cloz").onclick = () => {
  document.querySelector(".header__nav-mobile").style.display = "none";
  document.querySelector(".header__nav-btn").style.display = "block";
  document.querySelector(".burger-cloz").style.display = "none";
};
