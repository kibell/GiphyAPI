//create an array of choices

const choices = ['Naruto', 'Dragon Ball Z','One Piece']


// call the ajax function and set the varibles for the url 
function getGif() {
    event.preventDefault();
    $("#mode").text("GIF MODE")
const ttt = $(this).attr("data-name");
    const queryURL = `https://api.giphy.com/v1/gifs/random?api_key=do2zG5Nm1SN1Ioh0tMOY6mXWryN8X5yZ&tag=${ttt}&rating=PG-13`;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        console.log(response)
        
//create a div to hold the images
       
        //const the url image 
        const imageUrl = response.data.images.original_still.url

        const newImage = $('<img>');
//and the attribute to the images so that they are changed when they are called


        newImage.attr('src',imageUrl)
        newImage.attr('alt', "new");
        newImage.attr('id', 'gifTouch')
        newImage.addClass("still")
//prepend the images to a div

        $('#GIF').prepend(newImage)




        $('#gifTouch').on("click", function(){
            const state = $(this).attr("class")
            const imageAnimate = response.data.image_original_url
            const imageStill = response.data.images.original_still.url

            if (state === "still"){
            console.log("yayy")
            newImage.attr('src',imageAnimate)
            newImage.attr('class',"animate")
        
                
            } else {
                console.log("yayy")
                newImage.attr('src',imageStill)
                newImage.attr('class',"still") 
                
            }
            
            
            
            
            
            });

    });




   
        


}




function getSticker() {
    event.preventDefault();
    $("#mode").text("STICKER MODE!")
    const ttt = $(this).attr("data-name");
        const queryURL = `https://api.giphy.com/v1/stickers/random?api_key=do2zG5Nm1SN1Ioh0tMOY6mXWryN8X5yZ&tag=${ttt}&rating=PG-13`;
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
    
            console.log(response)
            
    //create a div to hold the images
           
            //const the url image 
            const imageUrl = response.data.images.original_still.url
            
            const newImage = $('<img>');
    //and the attribute to the images so that they are changed when they are called
    
    
            newImage.attr('src',imageUrl)
            newImage.attr('alt', "new");
    //prepend the images to a div
    
            
            $('#sticker').prepend(newImage)
    
    
    
        });
    
    }



//create a loop append a new button when the search button is selected
function buttonLoop () {

    $('#addBtn').empty();

    for ( let i = 0; i < choices.length; i++){


   
//varibale for a new button
const a = $('<button>');
//add a class to the new button
a.addClass("jiffy-btn");
//add a data attribute
a.attr("data-name",choices[i]);
//label the new button that was created
a.text(choices[i]);
//appen("d the button in the end
$('#addBtn').append(a);





 }
}




function buttonStick () {
    console.log("yaaayyyyy")
    $('#addBtn').empty();
        
    for ( let i = 0; i < choices.length; i++){


   
//varibale for a new button
const a = $('<button>');
//add a class to the new button
a.addClass("sticky-btn");
//add a data attribute
a.attr("data-name",choices[i]);
//label the new button that was created
a.text(choices[i]);
//appen("d the button in the end
$('#addBtn').append(a);





 }
}
//create a function to push the input to an array

$('#add-gif').on("click", function(event) {
event.preventDefault();
$("#mode").text("GIF MODE!")
const inputVal = $('#input').val().trim();

choices.push(inputVal);
buttonLoop();

});

$('#add-sticker').on("click", function(event) {
    event.preventDefault();
    $("#mode").text("STICKER MODE!")
    const inputVal = $('#input').val().trim();
    
    choices.push(inputVal);
    buttonStick();
    
    });

$(document).on("click", ".jiffy-btn", getGif);
$(document).on("click", ".sticky-btn", getSticker);

buttonLoop();