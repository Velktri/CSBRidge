chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action == "sendToDestination")
    {
        console.log(message.data)
    }
})