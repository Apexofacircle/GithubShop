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
        img.src = "https://raw.githubusercontent.com/Apexofacircle/GitShopProduct1/main/825d0083-a449-4dfe-a616-5bc6a99138a5.png";
        document.body.append(img);
}

$("button").click(batman)