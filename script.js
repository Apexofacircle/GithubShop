


var _DNSJson = {}
var is_Batman = true;
var InfoToDisplay = "None";
$.ajax({
    method: "get",
    url: "https://raw.githubusercontent.com/Apexofacircle/GitShopProduct1/main/GitShopInfo.json",
    dataType: "json"
  })
    .done(function( msg ) {
      console.log(msg)
      _DNSJson = msg
      console.log(_DNSJson.RepoInfo.Img)
      $("p").html(_DNSJson.RepoInfo.Description)
      $("h5").html(_DNSJson.RepoInfo.Name)
      
    });

    function GetCardImage(){
        console.log("Getting Image...")
        $(this).html("<img src=" + _DNSJson.RepoInfo.Img + " class=" + "card-img-top" + "alt=" + "..." + ">")
    }

    var img = new Image();
    img.src = _DNSJson.RepoInfo.Img;
    document.body.append(img);