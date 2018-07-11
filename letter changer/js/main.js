function letterChanger(str) {
//for loop to go through the whole string
    str.split('');
    var array = new Array("");
    for (var i = 0; i < str.length; i++) {
        //try using a switch statement instead of using 5 if/else if statements
        // switch () {

        //     default:
        //  }
        if (str[i] === "a") {
            //if/else if statements work. try to see if making a switch case would be cleaner.
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
        }
            else if (str[i]==="u") {
            array[i] = str[i].toUpperCase();
        }
        else {
            array[i] = str[i];
        }//else
        
        
        console.log(array[i]);
        
        
        
    };//for loop
};
letterChanger("amphibian");
function alpha(c1 = 'a', c2 = 'z') {
    //alphabet to compare it to and pick the letter after it
    var a = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return (a.indexOf(c1), a.indexOf(c2));
};

    
