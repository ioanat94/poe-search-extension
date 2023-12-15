chrome.contextMenus.create({
  id: "search",
  title: "Search on Path of Exile Wiki: %s",
  contexts: ["selection"],
});

chrome.contextMenus.onClicked.addListener(function (info) {
  if (info.menuItemId === "search") {
    chrome.tabs.create({
      url: `https://www.poewiki.net/wiki/${info.selectionText}`,
    });
  }
});
