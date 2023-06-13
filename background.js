chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.service === "getTabs"){
            let tabList = []
            chrome.tabs.query({}, function(tabs) {
                tabs.forEach(tab => {
                    tabList.push(tab)
                })
            })
            sendResponse({tabs: JSON.stringify(tabList)})
        }
    }
)

chrome.action.onClicked.addListener(() => console.log('hiii!!!?'))