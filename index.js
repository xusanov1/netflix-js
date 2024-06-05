document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.querySelector('.video-grid');
  
    fetch('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(video => {
          const videoCard = document.createElement('div');
          videoCard.classList.add('video-card');
  
          videoCard.innerHTML = `
            <img src="${video.thumbnailUrl}" alt="${video.title}">
            <div class="overlay">
              <h3>${video.title}</h3>
              <p>${video.description}</p>
              <a href="#" class="btn" data-video-id="${video.id}">Watch Now</a>
            </div>
          `;
  
          videoGrid.appendChild(videoCard);
            videoCard.addEventListener('click', () => {
            window.location.href = `./videos/bigBunny.html`;  
          });
        });
      })
      .catch(error => {
        console.error('Error fetching video data:', error);
      });
  });