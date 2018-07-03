function letterChanger(str) {
//for loop to go through the whole string
    for (var i = 0; i < str.length; i++) {
        if (str[i]="a"||"e"||"i"||"o"||"u") {
            str[i].toUpperCase();
            console.log("it is a vowel")
            console.log(str);
        };
    };
};// Your code here!
//letterChanger("ant");
function alpha(c1 = 'a', c2 = 'z') {
    //alphabet to compare it to and pick the letter after it
    var a = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return (a.indexOf(c1), a.indexOf(c2));
};
console.log(alpha());
    
