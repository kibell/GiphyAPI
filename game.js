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

    $('#myButton').empty();
    for ( let i =0; i < giphy.length; i++){
//varibale for a new button
const btn = $('<button>');
//add a class to the new button
btn.addClass('new-button')
//add a data attribute
btn.attr("data-name",giphy[i])
//label the new button that was created
btn.text(giphy[i]);
//appen("d the button in the end
$('#myButton').append(btn);
}
}
//create a function to push the input to an array

