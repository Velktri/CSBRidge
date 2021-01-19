let hostName = 'velktri.github.io'

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ name: '', address: '', zipcode: '' }, () => {
        console.log("User Storage initialized.")
    })


    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: hostName },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }])
    })
})