
paste.onclick = () => {
    let userName = document.getElementById(input__name)
    let userAddress = document.getElementById(input__address)
    let userZip = document.getElementById(input__zip)
    
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs) => {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";'}
        )
    })
}