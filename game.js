//create an array of choices

const choices = ['Really Bro?', 'High five!','Way to go']


// call the ajax function and set the varibles for the url 
function getGif(){

    const giphy = $(this).attr('data-name');
    
    const queryURL = `https://api.giphy.com/v1/gifs/random?api_key=do2zG5Nm1SN1Ioh0tMOY6mXWryN8X5yZ&tag=${giphy}&rating=PG-13`


    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){

        console.log(response)
        
//create a div to hold the images
        const newDiv = $("<div class ='giphy'>")
        //const the url image 
        const imageUrl = response.data.image_original_url

        const newImage = $('<img>')
//and the attribute to the images so that they are changed when they are called


        newImage.attr('src',imageUrl)
//prepend the images to a div


        $('#images').prepend(newImage)



    });

}




//create a loop append a new button when the search button is selected
function buttonLoop () {

    $('#addBtn').empty();
    for ( let i =0; i < choices.length; i++){
//varibale for a new button
const btn = $('<button>');
//add a class to the new button
btn.addClass('new-button')
//add a data attribute
btn.attr("data-name",choices[i])
//label the new button that was created
btn.text(choices[i]);
//appen("d the button in the end
$('#addBtn').append(btn);
}
}
//create a function to push the input to an array

$('#myButton').on("click",function(event) {
event.preventDefault();
const inputVal = $('#input').val().trim();

choices.push(inputVal);

buttonLoop();







});