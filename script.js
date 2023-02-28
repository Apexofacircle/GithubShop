var _DNSJson = {};
var documentFragment = document.createDocumentFragment();

function temp(img) {     document.getElementById("CardImage1").appendChild(img).style = "width : 100%" }
$.ajax({method: "get",url: "https://raw.githubusercontent.com/Apexofacircle/GitShopProduct1/main/GitShopInfo.json",dataType: "json"})
.done(function( msg ) {
    _DNSJson = msg

    console.log(_DNSJson.RepoInfo.Img)

    $("p").html(_DNSJson.RepoInfo.Description)
    $("h5").html(_DNSJson.RepoInfo.Name)
    
    console.log("Loading")
    
    var _img = new Image();
    _img.src = _DNSJson.RepoInfo.Img;

    document.getElementById("CardImage2").appendChild(_img.cloneNode(true)).style = "width : 100%"
    document.getElementById("CardImage1").appendChild(_img.cloneNode(true)).style = "width : 100%"
    document.getElementById("CardImage3").appendChild(_img.cloneNode(true)).style = "width : 100%"
    document.getElementById("CardImage4").appendChild(_img.cloneNode(true)).style = "width : 100%"
    
});
