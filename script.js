//console.log("Hello world!");



function computerPlay() {

    //Generate a random number between 1 and 3 using the Math.random() function
    let num = (Math.floor(Math.random() * 3) + 1) ;

    //Decision tree to determine return output based on num
    if( num === 1 ) {
        return 'Rock';
    } else if ( num === 2 ) {
        return 'Paper';
    } else {
        return 'Scissors';
    }

    throw "Function computerPlay() reached unknown value!";

}