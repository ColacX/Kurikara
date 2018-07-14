console.log("popup.js");
console.log(window.performance.getEntriesByType("resource"));
console.log('webRequest', chrome);

chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    console.log(details);
    return {cancel: true};
  },
  {urls: ["<all_urls>"]},
  ["blocking"]
);
