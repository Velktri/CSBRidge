chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action == "sendToDestination")
    {
        document.getElementById('input__address').innerHTML = message.data.addr1
        document.getElementById('input__city').innerHTML = message.data.addr2
        document.getElementById('input__zip').innerHTML = message.data.zip
    }
})