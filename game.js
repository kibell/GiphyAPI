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
        const newDiv = $("<div class ='giphy'>")
        const imageUrl = response.data.image_original_url
        const newImage = $('<img>')

        newImage.attr('src',imageUrl)
        
        $('#images').prepend(newImage)



    });

}


//create a div to hold the images


//const the url image 



//and the attribute to the images so that they are changed when they are called



//prepend the images to a div



//create a loop append a new button when the search button is selected


//varibale for a new button

//add a class to the new button

//add a data attribute

//label the new button that was created

//append the button in the end



//create a function to push the input to an array

