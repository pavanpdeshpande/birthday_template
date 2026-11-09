const wishButton = document.querySelector("#wish-button");
const wishMessage = document.querySelector("#wish-message");
const confettiLayer = document.querySelector("#confetti-layer");
const birthdayArt = document.querySelector(".birthday-art");
const confettiColors = ["#d77f91", "#a994c2", "#f0c66f", "#e7a99a", "#8ba995", "#fff0db"];

wishButton.addEventListener("click", () => {
  wishMessage.textContent = "Wish sent, Srushti. Here's to a year full of wonder.";
  birthdayArt.classList.add("wish-made");

  for (let index = 0; index < 64; index += 1) {
    const piece = document.createElement("span");
    const delay = Math.random() * 0.65;
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    piece.style.borderRadius = index % 3 === 0 ? "50%" : "2px";
    piece.style.animationDelay = `${delay}s`;
    piece.style.animationDuration = `${2.5 + Math.random()}s`;
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    confettiLayer.append(piece);
    window.setTimeout(() => piece.remove(), (delay + 3.5) * 1000);
  }
});
