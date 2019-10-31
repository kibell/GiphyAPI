//create an array of choices

const choices = ['Lord of the Rings', 'High five!','Way to go']


// call the ajax function and set the varibles for the url 
function getGif() {

const ttt = $(this).attr("data-name");
    const queryURL = `https://api.giphy.com/v1/gifs/random?api_key=do2zG5Nm1SN1Ioh0tMOY6mXWryN8X5yZ&tag=${ttt}&rating=PG-13`;
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){

        console.log(response)
        
//create a div to hold the images
       
        //const the url image 
        const imageUrl = response.data.image_original_url

        const newImage = $('<img>');
//and the attribute to the images so that they are changed when they are called


        newImage.attr('src',imageUrl)
        newImage.attr('alt', "new");
//prepend the images to a div


        $('#images').prepend(newImage)



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
//create a function to push the input to an array

$('#add-gif').on("click", function(event) {
event.preventDefault();

const inputVal = $('#input').val().trim();

choices.push(inputVal);
buttonLoop();

});

$(document).on("click", ".jiffy-btn", getGif);

buttonLoop();