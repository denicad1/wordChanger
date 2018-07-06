function letterChanger(str) {
//for loop to go through the whole string
    str.split('');
    var array = new Array("");
    for (var i = 0; i < str.length; i++) {
        //try using a switch statement instead of using 5 if/else if statements
        switch () {

            default:
        }
        if (str[i] === "a" ) {
            //trying to create a new array that has the letters from the original str and the capital letter vowels
            array[i] = (str[i].toUpperCase());
        } else {
            array[i] = str[i];
        }
        
        
        console.log(array[i]);
        
        
        
    };
};// Your code here!
letterChanger("ant");
function alpha(c1 = 'a', c2 = 'z') {
    //alphabet to compare it to and pick the letter after it
    var a = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return (a.indexOf(c1), a.indexOf(c2));
};

    
