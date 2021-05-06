  alert('WELCOME to MOVIE THEATRE!')

/*var newsLetter = prompt('Would you like to get our Newsletter?')
if (newsLetter=== "Yes"){
  var userEmail = prompt('please enter your Email')
  alert('Thank you! It is great to have you on board')
} else if( newsLetter=== "No"){
  alert( 'Thank you.')
} else ( alert('please write Yes or No only'))

var typesofMovies = prompt('What Movies do you like to Watch?')
if (typesofMovies === "Action"){
  document. write ('<img src="https://c8.alamy.com/comp/REWGFC/jason-statham-poster-mechanic-resurrection-2016-REWGFC.jpg"> ')
} else if (typesofMovies === "Drama"){
    document. write ('<img src="https://cdn.hiconsumption.com/wp-content/uploads/2014/08/Goodfellas.jpg"> ')
} else if (typesofMovies === "Comedy"){
   document. write ('<img src="https://i2.wp.com/www.orphicpixel.com/wp-content/uploads/2012/03/image027.jpg?resize=550%2C779&ssl=1"> ')
} else if (typesofMovies === "Adventure"){
   document. write ('<img src="https://i.pinimg.com/564x/a1/c7/d4/a1c7d4078bc86def19a086bee45d9b31.jpg"> ')
} else (alert('or you can check our list of Movies below'))*/

//lab05

// the user needs to confirm he is'nt a Robot by typing a Code
// user won't enter the website unless he enters the correct code
// if the user write the code incorrectly, will keep asking him to enter the right one
// if the entered code is not equal to b9@0Xc the user will be asked  again 

var notRobot = prompt ('Please enter this code to confirm you are not a Robot "b9@0Xc" ')
while ( notRobot !== 'b9@0Xc'){
  notRobot = prompt('Incorrect! Please type "b9@0Xc" ')
}


// will ask the user to choose what type of movies to Watch
// if the choice is'nt "Action, Drama, Comedy or Adventure", will keep asking to try again
//if the user choice is one of these, will ask him how many movies to watch
//ask how many movies would like to watch
// answer not less than 1 & not more than 3
//show imgs of movies upon his choice


var movieType = prompt('What type of movies do you like to watch?')
while ( movieType !== 'Action' && movieType !== "Drama" && movieType !== 'Comedy' && movieType !== 'Adventure'){
  movieType = prompt('Please try again!')
}

var movieCount = prompt('How many movies you would like to watch?')
//the entered number


var image = ''
for(var a= 0; a = movieCount ;a++){ 
  if (movieType === 'Action'){
    image = image + '<img src="https://www.coffeeandcigarettes.co.uk/wp-content/uploads/2016/02/Pandemic-630-thumb-630xauto-59566.jpg">'
  }else if (movieType === 'Drama'){
     image = image + '<img src="https://cdn.designcrowd.com/blog/2017/February/movie-posters/8_600.jpg">'
     console.log(image);
  }else if(movieType === 'Comedy'){
    image = image + '<img src="https://i.ebayimg.com/images/g/~lsAAOSwbYZXcn-n/s-l300.jpg">'
  }else if (movieType === 'Adventure'){
    image = image + '<img src="https://lh3.googleusercontent.com/proxy/rr2kQVSMnCqLeI7idEKgRUigRXp6J88HlpCs0XtR4uhVg0tv_EcVBgi9uaF4wTDxUyOJVDunuf1-8Gj7ARFwdPfvjuj8XTIsy6pj06obPRlndB-bkQ4">'
  }
}
document.write(image)















