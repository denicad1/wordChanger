function letterChanger(str) {
//splitting the str into an array 
    str.split('');
    //creating a new array to insert the new chars into
    var array = new Array("");
    //alphabet to compare it to and pick the letter after it
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    //for loop to go through the whole string
    for (var i = 0; i < str.length; i++) {
        //if/else if statement that will cpaitalize all vowels
        if (str[i] === "a") {
            
            array[i] = str[i].toUpperCase();
        }//if
            else if (str[i] === "e") {
            array[i] = str[i].toUpperCase();
        }//else if
            else if (str[i]==="i") {
            array[i] = str[i].toUpperCase();
        }//else if
            else if (str[i]==="o") {
            array[i] = str[i].toUpperCase();
        }//else if
            else if (str[i]==="u") {
            array[i] = str[i].toUpperCase();
        }//else if 
        else {
            //another for loop to go through alphabet and compare the consonants 
            for (var y = 0; y < a.length; y++) {
                //if statement that will compare the chars of the string to the alphabet and pick the next letter in the alphabet and insert it into the new array
                if (a[y] === str[i]) {
                    array[i]=a[y + 1];
                }//if
            }//for
        }//else
        console.log(array[i]);  
    };//for loop
};
letterChanger("amphibian");


    
