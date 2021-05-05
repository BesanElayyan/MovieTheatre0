  alert('WELCOME to MOVIE THEATRE!')

var newsLetter = prompt('Would you like to get our Newsletter?')
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
} else (alert('or you can check our list of Movies below'))





