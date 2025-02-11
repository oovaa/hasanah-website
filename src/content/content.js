// Common ad selectors
const AD_SELECTORS = [
  '[class*="ad-"]',
  '[class*="ads-"]',
  '[id*="google_ads"]',
  '[id*="advertisement"]',
  'ins.adsbygoogle',
  '.ad-container',
  // Add more selectors as needed
];

// Collection of positive content types
const CONTENT_TYPES = {
  QUOTE: 'quote',
  REMINDER: 'reminder',
  AFFIRMATION: 'affirmation'
};

// Sample content database
const CONTENT_DATABASE = {
  quotes: [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Everything you've ever wanted is on the other side of fear. - George Addair",
    "Success is not final, failure is not fatal. - Winston Churchill"
  ],
  reminders: [
    "Time for a quick stretch!",
    "Remember to drink water",
    "Take a deep breath",
    "How about a short walk?"
  ],
  affirmations: [
    "You're making great progress!",
    "You've got this!",
    "Every day is a new opportunity",
    "You are capable of amazing things"
  ]
};

// Get random content from the database
function getRandomContent(type) {
  const content = CONTENT_DATABASE[type + 's'];
  return content[Math.floor(Math.random() * content.length)];
}

// Create a positive content widget
function createWidget(type) {
  const widget = document.createElement('div');
  widget.className = 'adfriend-widget';
  
  const content = getRandomContent(type.slice(0, -1)); // Remove 's' from type
  
  widget.innerHTML = `
    <div class="adfriend-content">
      <p>${content}</p>
    </div>
    <div class="adfriend-footer">
      <button class="adfriend-refresh">↻</button>
      <span class="adfriend-badge">AdFriend</span>
    </div>
  `;
  
  // Add refresh functionality
  widget.querySelector('.adfriend-refresh').addEventListener('click', () => {
    widget.querySelector('p').textContent = getRandomContent(type.slice(0, -1));
  });
  
  return widget;
}

// Replace ads with positive content
function replaceAds() {
  const adElements = [];
  
  // Find ad elements using selectors
  AD_SELECTORS.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(element => adElements.push(element));
  });
  
  // Replace each ad with a widget
  adElements.forEach(adElement => {
    if (adElement.dataset.adfriendProcessed) return;
    
    // Randomly select content type
    const types = Object.keys(CONTENT_DATABASE);
    const randomType = types[Math.floor(Math.random() * types.length)];
    
    const widget = createWidget(randomType);
    
    // Preserve the original size if possible
    const rect = adElement.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      widget.style.width = rect.width + 'px';
      widget.style.minHeight = rect.height + 'px';
    }
    
    adElement.parentNode.replaceChild(widget, adElement);
    widget.dataset.adfriendProcessed = 'true';
  });
}

// Initialize MutationObserver to handle dynamically loaded ads
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      replaceAds();
    }
  });
});

// Start observing the document
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Initial replacement
replaceAds();