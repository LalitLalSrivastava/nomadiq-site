function toggleTheme() {
  document.body.classList.toggle('dark');
}

function openGallery(folder) {
  const imageNames = {
    'portraits': [
      'flame-focus.jpg',
      'freckled-thoughts.jpg',
      'hiding-frame.jpg',
      'neon-haze.jpg',
      'pierced-reflection.jpg',
      'shadow-gaze.jpg',
      'smoke-ring.jpg',
      'watchful-eye.jpg'
    ],
    'susa': [
      'cat-whisper.jpg',
      'dog-window.jpg',
      'house-in-hills.jpg',
      'lamppost-and-peak.jpg',
      'motorcycle-alley.jpg',
      'spire-framed.jpg',
      'wildgrass-close.jpg'
    ]
  }[folder];

  if (!imageNames) return;
  const container = document.createElement('div');
  container.classList.add('gallery');
  imageNames.forEach(name => {
    const img = document.createElement('img');
    img.src = `images/${folder}/${name}`;
    img.alt = name;
    img.onclick = e => {
      e.stopPropagation();
      openLightbox(img.src);
    };
    container.appendChild(img);
  });

  document.body.innerHTML = '';
  document.body.appendChild(container);
}

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const img = document.getElementById('lightbox-img');
  img.src = src;
  lightbox.classList.add('active');
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('active');
}


