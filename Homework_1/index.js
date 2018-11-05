function first(a, b){
    if(a>b){
        return true;
    }
    else{
        return false;
    }
}

function second(a){
    return "You input "+a;
}

function third(a){
    if(a===null){
        return "null";
    }
    else if(a===undefined){
        return "undefined";
    }
    else return "it's not null or undefined";
}

function fourth(a){
    a.checked=true;
}

function fifth(a){
   for(var i=0; i<=a; i++){
       document.getElementById("fifth_a").innerText+=String(i)+", ";
   }
   for(var i=a; i>=0; i--){
    document.getElementById("fifth_b").innerText+=String(i)+", ";
}
}

document.getElementById("first_a").innerText=String(first(4,8));
document.getElementById("first_b").innerText=String(first(7,2));
document.getElementById("second").innerText=String(second("Learn JavaScript"));
var test;
document.getElementById("third_a").innerText=String(third(test));
test=5;
document.getElementById("third_b").innerText=String(third(test));
test=null;
document.getElementById("third_c").innerText=String(third(test));
var myObj={
    A:1
};
document.getElementById("fourth_a").innerText=String(Object.keys(myObj));
fourth(myObj);
document.getElementById("fourth_b").innerText=String(Object.keys(myObj));
fifth(5);