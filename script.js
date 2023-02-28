$("p").html("this")


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
    });

function batman(){
        

        


        var img = new Image();
        img.src = _DNSJson.RepoInfo.Img;
        document.body.append(img);
}

$("Batman").click(batman)