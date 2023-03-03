var _DNSJson = {};

function test(){
    console.log("Test")
}

$.ajax({method: "get",url: "https://raw.githubusercontent.com/Apexofacircle/GitShopProduct1/main/GitShopInfo.json",dataType: "json"})
.done(function( msg ) {
    _DNSJson = msg

    // Cards
    for(var i in _DNSJson)
    {
        console.log(i)
        console.log(_DNSJson)


        var _DNSSection = _DNSJson[i]

        // generate variables from the Json file
        var _Image = _DNSSection["Img"]
        var _Name = _DNSSection["Name"]
        var _Description = _DNSSection["Description"]
        var _Detailed_Description = _DNSSection["Detailed_Description"]
        console.log(_Image)


        var _Card = '<div class="card" id='+_Name+'>' +
                        '<div id="CardImage">' +
                            '<img src="'+_Image+'" alt="" class = "CardImg">'+
                        '</div>'+
                        '<div class="card-body">'+
                            '<h5 class="card-title">'+_Name+'</h5>'+
                            '<p class="card-text">'+_Description+'</p>'+
                            '<a href="#'+_Name+'"><button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" OnClick="test()">'+
                            'More'+
                            '</button></a>'+
                        '</div>'+
                    '</div>';
        $("Cards").append(_Card);
    }

    // Hold URL on load
    let currentPage = null;

    // listen for changes
    setInterval(function()
    {
        if (currentPage != location.href)
        {
            //Gets the ID in the webpage
            currentPage = location.href;
            var _Href = currentPage.split("#")[1]
            
            // Display title
            var _OCTitle = '<h1>'+_Href+'</h1>'
            $("OffCanvasTitle").html(_OCTitle)

            //Display detailed information
            var _DetailedInfo = _DNSJson[_Href]
            console.log(_DetailedInfo)
            var _OCText = '<P>'+_DetailedInfo["DetailedDescription"]+'</p>'
            var _OCImage = '<img src="'+_DetailedInfo["Img"]+'" alt="" class = "OCImg">'

            $("OffCanvasDetail").html(_OCText)
            $("DisplayImage").html(_OCImage)

            $("DisplayImage").append('<nav aria-label="Page navigation example">'+
            '<ul class="pagination fillWidth">'+
              '<li class="page-item"><a class="page-link" href="#">Download</a></li>'+
              '<li class="page-item"><a class="page-link" href="#">Source</a></li>'+
            '</ul>'+
          '</nav>')
        }
    }, 500);
    
});
