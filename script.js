$("p").html("this")


var _DNSJson = {}
var is_Batman = true;
var InfoToDisplay = "None";
function batman(){
        

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


        var img = new Image();
        img.src = "_DNSJson.RepoInfo.Img";
        document.body.append(img);
}

$("button").click(batman)