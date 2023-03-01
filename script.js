var _DNSJson = {};

$.ajax({method: "get",url: "https://raw.githubusercontent.com/Apexofacircle/GitShopProduct1/main/GitShopInfo.json",dataType: "json"})
.done(function( msg ) {
    _DNSJson = msg

    // Cards
    for(var i in _DNSJson)
    {
        console.log(i)
        console.log(_DNSJson)


        var _DNSSection = _DNSJson[i]


        var _Image = _DNSSection["Img"]
        var _Name = _DNSSection["Name"]
        var _Description = _DNSSection["Description"]

        console.log(_Image)


        var _Card = ('<<div class="card"><div id="CardImage"><img src="'+_Image+'" alt="" class = "CardImg"></div><div class="card-body"><h5 class="card-title">'+_Name+'</h5><p class="card-text">'+_Description+'</p><a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" ID="ExpandData">Link with href</a></div></div>');
        $("Cards").append(_Card);
    }

    // Detailed info
    $("#ExpandData").click(function test() { 
        console.log("test work")
    });
});