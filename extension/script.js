alert("FFFFFFFFFFFFFF")
window.onload = function () {
    var url = String(document.location.pathname)
    console.log(url)

    window.onclick = function(){
        var url = String(document.location.pathname)
        console.log(url)
        console.log(document.documentURI)
    }


    alert("FFFFFFFFFFFFFF2")
    console.log(document.location)
    i=0;
    while (i<10){
        url = String(document.location.pathname)
        console.log(url)
        i=i+1;

    }
    console.log(url)
    hreflink = String(document.getElementById("l_aud").querySelector('a').href)
    var arr = hreflink.split("audios")
    console.log(arr[1])

    if (url == "/audios123285528") {
        alert("FFFFFFFFFFFFFF")
    }
    


    document.getElementById("l_aud").querySelector('a').setAttribute("href", "/audios"+arr[1]+"?section=all")
    var redi = document.getElementById("l_aud").querySelector('a')
    // document.getElementById("l_aud").querySelector('a').setAttribute("href", "https://vk.com/audios123285528?section=all")
    var a = document.getElementById("l_aud")
    var urls = a.getElementsByTagName('a')
    console.log(redi)
};

