let hostName = 'velktri.github.io'
let sourceURL = 'source'
let destinationURL = 'destination'

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ name: '', address: '', zipcode: '' }, () => {
        console.log("User Storage initialized.")
    })

    //chrome.tabs.

    // figure out how to save data to storage on a webpage change.


    chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: hostName, urlContains: sourceURL },
            })],
            actions: [ new chrome.declarativeContent.ShowPageAction()]
        },
        {
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: hostName, urlContains: destinationURL }
            })],
            actions: [ new chrome.declarativeContent.ShowPageAction()]
        }
        ])
    })
})