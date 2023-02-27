$("p").html("this")

var is_Batman = true;
var InfoToDisplay = "None";
function batman(){
    // if(is_Batman){
    //     $(this).html("Batman");
    //     console.log("Batman");
    //     is_Batman = false;
    // }
    // else{
    //     $(this).html("Not batman");
    //     console.log("Not batman");
         is_Batman = true;

       // get info from a webpage/file
        $.ajax({
            type: "get",
            url: "https://raw.githubusercontent.com/Apexofacircle/Arduino/main/Claw.Cpp",
            data: "data",
            dataType: "text",
            success: function (response) {
                console.log(response)
                $("body").html("<pre>" + response + "</pre>")
            }
        });

        
    // }
    
    // look into events and ready functions


    $(body).html()
}

$("button").click(batman)