const galleries = {
  portraits: [
    "images/portraits/flame-focus.jpg",
    "images/portraits/freckled-thoughts.jpg",
    "images/portraits/hiding-frame.jpg",
    "images/portraits/neon-haze.jpg",
    "images/portraits/pierced-reflection.jpg",
    "images/portraits/shadow-gaze.jpg",
    "images/portraits/smoke-ring.jpg",
    "images/portraits/watchful-eye.jpg"
  ],
  susa: [
    "images/susa/cat-whisper.jpg",
    "images/susa/dog-window.jpg",
    "images/susa/house-in-hills.jpg",
    "images/susa/lamppost-and-peak.jpg",
    "images/susa/motorcycle-alley.jpg",
    "images/susa/spire-framed.jpg",
    "images/susa/wildgrass-close.jpg"
  ]
};

function openGallery(category) {
  const images = galleries[category];
  const viewer = document.createElement("div");
  viewer.className = "viewer";

  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = category;
    viewer.appendChild(img);
  });

  const closeBtn = document.createElement("span");
  closeBtn.className = "close";
  closeBtn.innerText = "×";
  closeBtn.onclick = () => viewer.remove();

  viewer.appendChild(closeBtn);
  document.body.appendChild(viewer);
}

function toggleTheme() {
  document.body.classList.toggle("dark");
}

document.querySelectorAll(".category").forEach(card => {
  card.onclick = () => openGallery(card.dataset.category);
});

