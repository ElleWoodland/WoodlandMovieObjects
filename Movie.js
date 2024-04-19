// constructor function Movie 
function Movie(title, rating, year){         
    //title property     
    this.title = title;         
    //rating property        
    this.rating = rating;
    //year property
    this.year = year;

    // validate method to validate title, rating, and year       
    this.validate = function(){                 
        // converting rating to number                 
        var numRating = parseInt(this.rating);
        
        //convert year to number
        var numYear = parseInt(this.year);

        // if all inputs are valid, return true                 
        if(title && (numRating >= 1 && numRating <= 5) && (numYear >= 1900 && numYear <= 2024)){                         
            return true;                 
        }                
        else{ //else, return false                         
            return false;                 
        }        
    }      
       
    //convert to string method       
    this.toString = function(){                 
            return "Movie: " + this.title + ", Rating: " + this.rating + ", Year: " + this.year;         
        } 
    }