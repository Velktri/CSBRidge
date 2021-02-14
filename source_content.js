document.getElementById("pr_scannedIDForwardSubmit").onclick = () => {
    let dataObj = {
        addr1: document.getElementById("shippingAddressL1").innerHTML,
        addr2: document.getElementById("shippingAddressL2").innerHTML,
        zip: document.getElementById("zipCode").innerHTML
    }

    chrome.runtime.sendMessage({ action: "sendScanData", scannerData: dataObj }, (response) => {
        console.log(response)
    })
}