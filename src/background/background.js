// Initialize extension data
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({
    enabled: true,
    preferences: {
      quotes: true,
      reminders: true,
      affirmations: true
    },
    stats: {
      adsReplaced: 0,
      timeSaved: 0
    }
  });
});

// Listen for navigation events to reset content
chrome.webNavigation.onCompleted.addListener((details) => {
  if (details.frameId === 0) { // Only handle main frame navigation
    chrome.tabs.sendMessage(details.tabId, { type: 'PAGE_LOADED' });
  }
});

// Handle messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'UPDATE_STATS') {
    chrome.storage.sync.get({ stats: {} }, (data) => {
      const newStats = {
        adsReplaced: (data.stats.adsReplaced || 0) + message.adsReplaced,
        timeSaved: (data.stats.timeSaved || 0) + message.timeSaved
      };
      chrome.storage.sync.set({ stats: newStats });
    });
  }
});