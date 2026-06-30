window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 3000);

  updateTimer();
  setInterval(updateTimer, 1000);
};

function startJourney() {
  document.querySelector(".gallery").classList.remove("hidden");
  document.querySelector(".counter").classList.remove("hidden");
  document.querySelector(".letters").classList.remove("hidden");
  document.querySelector(".final").classList.remove("hidden");

  document.getElementById("bgMusic").play();
}

function updateTimer() {
  const startDate = new Date("2024-12-13");
  const now = new Date();

  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  document.getElementById("timer").innerHTML =
    `${days} يوم <br> ${hours} ساعة : ${minutes} دقيقة : ${seconds} ثانية`;
}

function openLetter(el) {
  el.style.background = "#ff69b4";
}

function showFinal() {
  document.getElementById("finalMessage").classList.remove("hidden");
}