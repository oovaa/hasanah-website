document.addEventListener('DOMContentLoaded', () => {
  // Load saved preferences
  chrome.storage.sync.get(
    {
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
    },
    (data) => {
      // Set extension toggle
      document.getElementById('enableExtension').checked = data.enabled;
      
      // Set content preferences
      Object.entries(data.preferences).forEach(([key, value]) => {
        const checkbox = document.querySelector(`input[name="${key}"]`);
        if (checkbox) checkbox.checked = value;
      });
      
      // Update stats
      document.getElementById('adsReplaced').textContent = data.stats.adsReplaced;
      document.getElementById('timeSaved').textContent = `${data.stats.timeSaved} min`;
    }
  );
  
  // Handle extension toggle
  document.getElementById('enableExtension').addEventListener('change', (e) => {
    const enabled = e.target.checked;
    chrome.storage.sync.set({ enabled });
    
    // Notify content script
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'TOGGLE_EXTENSION', enabled });
    });
  });
  
  // Handle content preferences
  document.querySelectorAll('.preference input').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      chrome.storage.sync.get({ preferences: {} }, (data) => {
        const preferences = {
          ...data.preferences,
          [e.target.name]: e.target.checked
        };
        chrome.storage.sync.set({ preferences });
        
        // Notify content script
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { 
            type: 'UPDATE_PREFERENCES',
            preferences
          });
        });
      });
    });
  });
  
  // Handle refresh button
  document.getElementById('refresh').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { type: 'REFRESH_CONTENT' });
    });
  });
});