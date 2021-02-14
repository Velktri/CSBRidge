chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action == "sendScanData")
    {
        chrome.tabs.query({}, (tabs) => {
            tabs.forEach(tab => {
                chrome.tabs.sendMessage(tab.id, { action: "sendToDestination", data: message.scannerData })
            })
        })
    }
})