document.getElementById('toggleTheme').onclick = () => {
  document.body.classList.toggle('light');
};

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeBtn = document.getElementById('closeBtn');

closeBtn.onclick = () => lightbox.classList.add('hidden');

function openGallery(folder) {
  const images = {
    portraits: [
      "flame-focus.jpg",
      "neon-haze.jpg",
      "freckled-thoughts.jpg",
      "smoke-ring.jpg",
      "pierced-reflection.jpg",
      "watchful-eye.jpg",
      "hiding-frame.jpg",
      "shadow-gaze.jpg"
    ],
    susa: [
      "cat-whisper.jpg",
      "dog-window.jpg",
      "house-in-hills.jpg",
      "lamppost-and-peak.jpg",
      "motorcycle-alley.jpg",
      "spire-framed.jpg",
      "wildgrass-close.jpg"
    ]
  };

  let index = 0;
  const paths = images[folder].map(name => `images/${folder}/${name}`);

  function showImage(i) {
    lightboxImg.src = paths[i];
    lightboxCaption.innerText = `${folder.charAt(0).toUpperCase() + folder.slice(1)} – Image ${i + 1} of ${paths.length}`;
    lightbox.classList.remove("hidden");
  }

  showImage(index);

  lightbox.onclick = () => {
    index = (index + 1) % paths.length;
    showImage(index);
  };
}
