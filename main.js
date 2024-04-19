// create array of movies
var movies = [];  

//if page is loaded and showButton is clicked
document.addEventListener("DOMContentLoaded", function (event) {
   document.getElementById("addButton").addEventListener("click", function () {
        //get movie title from title id         
        var title = document.getElementById('title').value;         
        //get rating from rating id        
        var rating = document.getElementById('rating').value;
        //get year from year id
        var year = document.getElementById('year').value;    

        //create a movie object      
        var movie = new Movie(title, rating, year);         
        //call validate method of movie to add movie object to array         
        if(movie.validate()){                 
            // push to array                 
            movies.push(movie);         
            }         
            else{//if text fields are invalid            
            //Warn the user and don't push to array                 
            alert("WARNING! You didn't provide enough information! Please fill in all text boxes.");}    

        //empty text boxes         
        document.getElementById('title').value="";         
        document.getElementById('rating').value=""; 
        document.getElementById('year').value="";

    });
});

//if page is loaded and showButton is clicked
document.addEventListener("DOMContentLoaded", function (event) {
    document.getElementById("showButton").addEventListener("click", function () {
        var htmlText = "<ul>";         
        // looping through each movie in list         
        for(var i=0;i<movies.length;i++){                 
            htmlText += "<li>"+movies[i].toString()+"</li>";         
        }         // ending ul         
        htmlText += "</ul>";         
        // adding to display div in html         
        document.getElementById('output').innerHTML = htmlText;
   });
});
