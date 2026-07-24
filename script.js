const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggle.innerHTML = "☀️";
    } else {
        toggle.innerHTML = "🌙";
    }
});
const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

hiddenElements.forEach((el)=>{
    el.classList.add("hidden");
    observer.observe(el);
});
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
particlesJS("particles-js", {
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#38bdf8"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 2
    },
    line_linked: {
      enable: true,
      color: "#38bdf8"
    }
  }
});
