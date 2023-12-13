// popup.js
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    document.getElementById('currentURL').textContent = tabs[0].url;
  });

// popup.js
document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const currentURL = tabs[0].url;
  
      if (currentURL.includes('.com')) {
        document.getElementById('result').textContent = 'Safe';
      } else {
        document.getElementById('result').textContent = 'Malicious';
      }
    });
  });