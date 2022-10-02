var mutationObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        var url = String(document.location.pathname)

        if (url == "/audios123285528") {
            var parentDOM = document.getElementsByClassName("CatalogSection__my").item(0)
            var childs = parentDOM.childNodes
            if (childs.length == 4) {
                del_1= childs[0]
                del_2= childs[2] 
                parentDOM.removeChild(del_1)
                parentDOM.removeChild(del_2)
            }
        }
    })
})

mutationObserver.observe(document.getElementById("wrap3"), {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true,
    attributeOldValue: true,
    characterDataOldValue: true
});



window.onload = function () {
    // var url = String(document.location.pathname)
    // console.log(url)

    // document.getElementById("wrap3").onload = function () {
    //     var url = String(document.location.pathname)
    //     console.log(url)
    //     console.log(document.documentURI)
    // }

    hreflink = String(document.getElementById("l_aud").querySelector('a').href)
    var arr = hreflink.split("audios")
    document.getElementById("l_aud").querySelector('a').setAttribute("href", "/audios" + arr[1] + "?section=all")
}

