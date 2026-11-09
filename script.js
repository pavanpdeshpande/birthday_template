const wishButton = document.querySelector("#wish-button");
const wishMessage = document.querySelector("#wish-message");
const confettiLayer = document.querySelector("#confetti-layer");
const confettiColors = ["#d77f91", "#a994c2", "#f0c66f", "#e7a99a", "#8ba995"];

wishButton.addEventListener("click", () => {
  wishMessage.textContent = "Your wish is on its way! ✨";

  for (let index = 0; index < 48; index += 1) {
    const piece = document.createElement("span");
    const delay = Math.random() * 0.65;
    piece.className = "confetti";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = confettiColors[index % confettiColors.length];
    piece.style.animationDelay = `${delay}s`;
    piece.style.setProperty("--drift", `${Math.random() * 180 - 90}px`);
    confettiLayer.append(piece);
    window.setTimeout(() => piece.remove(), (delay + 3) * 1000);
  }
});
