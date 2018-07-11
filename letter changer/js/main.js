function letterChanger(str) {
//for loop to go through the whole string
    str.split('');
    var array = new Array("");
    for (var i = 0; i < str.length; i++) {
        //forget switch case. try to compare consonants to the alphabet variable and get the next letter in the alphabet array
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

    
