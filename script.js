document.addEventListener('DOMContentLoaded', function() {
    var saveButton = document.getElementById('button-save');
    saveButton.addEventListener('click', function() {
        chrome.tabs.query({}, function(tab) {
            let urls = [];            
            tab.forEach(tabName => urls.push(tabName.url))                     
            chrome.storage.local.set({"data": JSON.stringify(urls)}, () => alert('saved!'))            
        })
    }, false)

    var loadButton = document.getElementById('button-load');
    loadButton.addEventListener('click', function() {
        chrome.storage.local.get('data', function(data) {     
            if (!data) {
                alert('No Saved Tabs!')
                return
            }       
           JSON.parse(data["data"]).forEach((url, x) => {setTimeout(() => chrome.tabs.create({ url: url, active: false }), 500*x)})           
           
            
        })
    })
}, false)