var _DNSJson = {};

function test(){
    console.log("Test")
}

/**
 * Push history state when offcanvas is hidden
 * 
 * Vanilla JavaScript version
 */ 

// Get the document element for the offcanvas feature.
const offcanvas = document.getElementById('offcanvasExample');
// Get the offcanvas instance, or create it if it doesn't exist.
// Ref: https://getbootstrap.com/docs/5.3/components/offcanvas/#methods
const myOffcanvas = bootstrap.Offcanvas.getOrCreateInstance( offcanvas )

// Add event listener for when the offcanvas is hidden.
// You can use myOffcanvas._element or offcanvas, they are the same element.
// Ref: https://getbootstrap.com/docs/5.3/components/offcanvas/#events
myOffcanvas._element.addEventListener('hide.bs.offcanvas', event => {
    // Create a new URL object with the current URL.
    // Ref: https://developer.mozilla.org/en-US/docs/Web/API/URL
    const url = new URL(window.location);
    // If the URL has a hash, remove it. The modal is hidden, so there is no need for the hash.
    if(url.hash != "") {
        url.hash = "";
        // Push the new URL to the history.
        // Ref: https://developer.mozilla.org/en-US/docs/Web/API/History_API
        history.pushState({}, "Store", url);
    }
});

// Add event listener for popstate.
// This opens and closes the modal when the user uses the back and forward buttons in the browser.
// Ref: https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event
window.addEventListener('popstate', function() {
    // Create a new URL object with the current URL.
    // Ref: https://developer.mozilla.org/en-US/docs/Web/API/URL
    const url = new URL(window.location);
    // If the URL has a hash, render the modal, otherwise hide it.
    if(url.hash != undefined) {
        // Checking _isShown prevents calling this function twice.
        if(!myOffcanvas._isShown) {
            renderModal(url.hash);
            myOffcanvas.show();
        }
    } else {
        if(myOffcanvas._isShown) {
            myOffcanvas.hide();
        }
    }
});



$.ajax({method: "get",url: "https://raw.githubusercontent.com/Apexofacircle/GitShopProduct1/main/GitShopInfo.json",dataType: "json"})
.done(function( msg ) {
    _DNSJson = msg

    var _Href = window.location.href.split("#")[1];
    // When the page loads, check if there is a hash in the URL. If there is, render the modal.
    // This allows the modal to show on initial page load if the URL has a hash.
    if(_Href != undefined) {
        // Moving this to a function helps with orangization. 
        renderModal(_Href);
        myOffcanvas.show();
    }

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
       
        console.log(_Image)

 review/events
        let _Card = cardTemplate(_Name, _Image, _Description);
        $("Cards").append(_Card);
    }

    // Implements click event listener for all card buttons
    // Ref: https://api.jquery.com/click/
    $('.card button').click(function(){
        // $(this) is the button that was clicked.
        // We are getting the data-name attribute from the button.
        // Ref: https://api.jquery.com/this/
        let name = $(this).data('name');
        // Push the new URL to the browser's history.
        // Ref: https://developer.mozilla.org/en-US/docs/Web/API/History_API
        history.pushState({ product: name }, "Product "+name, "#"+name);
        renderModal(name);
    });

    // Hold URL on load
    // let currentPage = location.href;

    // // listen for changes
    // setInterval(function()
    // {
    //     if (currentPage != location.href)
    //     {
    //         //Gets the ID in the webpage 
    //         currentPage = location.href;
    //         var _Href = window.location.href.split("#")[1]
            
    //         // Display title
    //         renderModal(_Href)
    //     }
    // }, 500);
    
});
  
/**
 * Render the modal with the product information
 * @param {string} product The product name
 */
function renderModal(product) {
    // Since this functionality is used in multiple places, it is a good idea to move it to a function.
    var _OCTitle = '<h1>'+product+'</h1>'
    $("OffCanvasTitle").html(_OCTitle)

    // Since _DNSJson is a global variable, it is not necessary to pass it to this function.
    var _DetailedInfo = _DNSJson[product]
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
    '</nav>');
}

/**
 * Generate a card template.
 * @param {string} name The product name
 * @param {string} image The product image URL
 * @param {string} description The product description
 */
function cardTemplate(name, image, description) {
    // Since the card template variables change for each card, these need to be passed to the function.
    // Using tick marks ` allows for multi-line strings. This is useful for HTML.
    return `
    <div class="card">
        <div class="CardImage">
            <!-- Using $ followed by {} allows us to use variables in the HTML. -->
            <img src="${image}" class="card-img-top" alt="">
        </div>
        <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <p class="card-text">${description}</p>
            <button type="button" class="btn btn-primary" data-name="${name}" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">More</button>
        </div>
    </div>
    `;
}
=======

        var _Card = '<div class="card CantSelect" id='+_Name+'>' +
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


            //Get download and source
            var _Source = _DetailedInfo["Source"]
            var _Download = _DetailedInfo["Download"]


            $("OffCanvasDetail").html(_OCText)
            $("DisplayImage").html(_OCImage)

            $("DisplayImage").append('<nav aria-label="Page navigation example">'+
            '<ul class="pagination fillWidth">'+
              '<li class="page-item"><a class="page-link" href="https://'+_Download+'">Download</a></li>'+
              '<li class="page-item"><a class="page-link" href="https://'+_Source+'">Source</a></li>'+
            '</ul>'+
          '</nav>')
        }
    }, 500);
    
});

