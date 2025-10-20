// HelloChat Screen JavaScript

// Mock message samples
const samples = [
  'Пример сообщения',
  'Всем привет!',
  'Hello from HelloChat',
  'Отличная вечеринка! 🎉',
  'Спасибо за организацию!',
  'Когда будет торт? 🎂',
  'Классная музыка! 🎵'
];

let currentIndex = 0;
let pollInterval;

/**
 * Apply theme from URL parameter
 */
function applyThemeFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const theme = urlParams.get('theme');
  
  // Remove existing theme classes
  document.body.classList.remove('theme-blue', 'theme-lime');
  
  // Apply theme
  switch (theme) {
    case 'lime':
      document.body.classList.add('theme-lime');
      break;
    case 'blue':
    default:
      document.body.classList.add('theme-blue');
      break;
  }
}

/**
 * Toggle QR visibility from URL parameter
 */
function toggleQRFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const showQR = urlParams.get('qr');
  const qrPanel = document.getElementById('qrPanel');
  
  if (qrPanel) {
    if (showQR === '0') {
      qrPanel.classList.add('hidden');
    } else {
      qrPanel.classList.remove('hidden');
    }
  }
}

/**
 * Update bubble text with fade animation
 */
function updateBubble(text) {
  const messageText = document.getElementById('messageText');
  const bubble = document.getElementById('messageBubble');
  
  if (messageText && bubble) {
    // Remove animation class
    bubble.classList.remove('fadeIn');
    
    // Force reflow
    bubble.offsetHeight;
    
    // Update text
    messageText.textContent = text;
    
    // Add animation class
    bubble.classList.add('fadeIn');
  }
}

/**
 * Start mock polling for new messages
 */
function startMockPoll() {
  // Clear existing interval
  if (pollInterval) {
    clearInterval(pollInterval);
  }
  
  // Start polling every 2 seconds
  pollInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % samples.length;
    updateBubble(samples[currentIndex]);
  }, 2000);
}

/**
 * Stop mock polling
 */
function stopMockPoll() {
  if (pollInterval) {
    clearInterval(pollInterval);
    pollInterval = null;
  }
}

// Export functions for global access
window.applyThemeFromURL = applyThemeFromURL;
window.toggleQRFromURL = toggleQRFromURL;
window.updateBubble = updateBubble;
window.startMockPoll = startMockPoll;
window.stopMockPoll = stopMockPoll;