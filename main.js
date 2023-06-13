(async () => {

    const response = await chrome.runtime.sendMessage({
        service: "getTabs"
    })

    console.log(response)
})

//chrome.action.onClicked.addListener(() => console.log('hi'))