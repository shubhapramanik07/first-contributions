// YouTube Triple-Click Navigation Extension
// Triple-click left side: -5 seconds, Triple-click right side: +5 seconds

(function() {
  'use strict';

  let clickCount = 0;
  let clickTimer = null;
  const CLICK_DELAY = 500; // milliseconds to detect triple-click
  const SKIP_SECONDS = 5;

  // Function to get the video element
  function getVideoElement() {
    return document.querySelector('video. html5-main-video') || document.querySelector('video');
  }

  // Function to get the video player container
  function getVideoPlayer() {
    return document.querySelector('.html5-video-player') || 
           document.querySelector('#movie_player') ||
           document.querySelector('video').parentElement;
  }

  // Function to skip video
  function skipVideo(seconds) {
    const video = getVideoElement();
    if (video) {
      video.currentTime = Math.max(0, Math.min(video.currentTime + seconds, video.duration));
      
      // Show visual feedback (optional)
      showSkipFeedback(seconds);
    }
  }

  // Function to show visual feedback
  function showSkipFeedback(seconds) {
    const player = getVideoPlayer();
    if (! player) return;

    const feedback = document.createElement('div');
    feedback.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(0, 0, 0, 0.8);
      color: white;
      padding: 20px 30px;
      border-radius: 10px;
      font-size: 24px;
      font-weight: bold;
      z-index: 9999;
      pointer-events: none;
      font-family: 'YouTube Sans', 'Roboto', sans-serif;
    `;
    feedback.textContent = seconds > 0 ? `+${seconds}s →` : `← ${seconds}s`;
    
    player.appendChild(feedback);
    
    setTimeout(() => {
      feedback.style.transition = 'opacity 0.3s';
      feedback.style. opacity = '0';
      setTimeout(() => feedback.remove(), 300);
    }, 500);
  }

  // Handle click events
  function handleClick(event) {
    const video = getVideoElement();
    const player = getVideoPlayer();
    
    if (!video || !player) return;

    // Check if click is on the video player area
    const rect = player.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const playerWidth = rect.width;
    const isLeftSide = clickX < playerWidth / 2;

    clickCount++;

    if (clickTimer) {
      clearTimeout(clickTimer);
    }

    if (clickCount === 3) {
      // Triple-click detected
      event.preventDefault();
      event.stopPropagation();
      
      if (isLeftSide) {
        skipVideo(-SKIP_SECONDS); // Go backward
      } else {
        skipVideo(SKIP_SECONDS); // Go forward
      }
      
      clickCount = 0;
    } else {
      // Wait to see if more clicks come
      clickTimer = setTimeout(() => {
        clickCount = 0;
      }, CLICK_DELAY);
    }
  }

  // Initialize the extension
  function init() {
    const player = getVideoPlayer();
    if (player) {
      player.addEventListener('click', handleClick, true);
      console.log('YouTube Triple-Click Navigation:  Extension loaded');
    } else {
      // Retry if player not found yet
      setTimeout(init, 1000);
    }
  }

  // Wait for the page to load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Handle YouTube's dynamic page navigation
  let lastUrl = location.href;
  new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      setTimeout(init, 500);
    }
  }).observe(document, { subtree: true, childList: true });

})();