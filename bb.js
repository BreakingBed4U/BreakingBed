const adUrl = "https://dowryhandgripballot.com/pxfb5x3qq?key=8219a9b8c7c0d4950a7924d7878dbdc9";
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const loader = document.getElementById('loader');
const progressContainer = document.getElementById('progressContainer');
const pleaseWait = document.getElementById('pleaseWait');
const playBtn = document.getElementById('playBtn');

// Show play button after 1.5 seconds total
function showPlayButton() {
  loader.style.display = 'none';
  progressContainer.style.display = 'none';
  progressText.style.display = 'none';
  pleaseWait.style.display = 'none';

  playBtn.style.display = 'flex';
  playBtn.classList.add('pulse');
}

// Animate progress for 1 second
function fakeLoading(duration = 1000) {
  let progress = 0;
  const stepTime = duration / 100;
  const interval = setInterval(() => {
    progress++;
    if (progress > 100) {
      clearInterval(interval);

      // Show "Please wait..." text for 0.5s
      pleaseWait.style.display = 'block';
      setTimeout(() => pleaseWait.classList.add('show'), 50);

      // After total 1.5s, show play button
      setTimeout(showPlayButton, 500);
    } else {
      progressBar.style.width = progress + '%';
      progressText.textContent = progress + '%';
    }
  }, stepTime);
}

// Play button click opens ad popup and redirects
playBtn.addEventListener('click', () => {
  window.open(adUrl, "_blank");
  window.location.href = adUrl;
});

// Start loading
fakeLoading(1000);

// Handle back button
window.addEventListener('pageshow', function(event) {
  if (event.persisted || (window.performance && window.performance.getEntriesByType("navigation")[0].type === 'back_forward')) {
    progressBar.style.width = '0%';
    progressText.textContent = '0%';
    loader.style.display = 'block';
    progressContainer.style.display = 'block';
    progressText.style.display = 'block';
    pleaseWait.style.display = 'none';
    playBtn.style.display = 'none';
    playBtn.classList.remove('pulse');
    fakeLoading(1000);
  }
});

