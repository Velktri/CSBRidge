chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action == "sendToDestination")
    {
        document.getElementById('input__address').value = message.data.addr1
        document.getElementById('input__city').value = message.data.addr2
        document.getElementById('input__zip').value = message.data.zip
    }
})