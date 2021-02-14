document.getElementById("pr_scannedIDForwardSubmit").onclick = () => {
    let dataObj = {
        addr1: document.getElementById("shippingAddressL1").innerHTML,
        addr2: document.getElementById("shippingAddressL2").innerHTML,
        zip: document.getElementById("zipCode").innerHTML
    }

    chrome.runtime.sendMessage({ action: "sendScanData", scannerData: JSON.stringify(dataObj) }, (response) => {
        console.log(response)
    })
}