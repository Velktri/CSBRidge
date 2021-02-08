let changeColor = document.getElementById('paste')

//get the data from storage

/*chrome.storage.sync.get('color', (data) => {
    changeColor.style.backgroundColor = data.color
    changeColor.setAttribute('value', data.color)
})*/

paste.onclick = () => {
    let userName = document.getElementById(input__name)
    let userAddress = document.getElementById(input__address)
    let userZip = document.getElementById(input__zip)


    // Add the data to the HTML here

    /*chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs) => {
        chrome.tabs.executeScript(
            tabs[0].id,
            { code: 'document.body.style.backgroundColor = "' + color + '";'}
        )
    })*/
}