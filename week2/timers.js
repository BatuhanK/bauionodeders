var calisacakFonksiyon = function(){
    console.log("hello");
}


console.log("11111111");
setTimeout(calisacakFonksiyon,3000);
console.log("22222222");


setInterval(calisacakFonksiyon,3000);
setTimeout(function(){
    console.log("anonim fonksiyon");
},2000);

var uzunFonksiyon = function(){
    console.log("setInterval calisti")
    setTimeout(function(){
        console.log("setTimeout 5 saniye bekledi");
    },2500);
}

setInterval(uzunFonksiyon,1000);


var x = 5000;
var deneme = function(){
    x = x - 10000000;
    console.log("x suan ",x);
    setTimeout(deneme,x);
}
deneme();


var i = 0;
var x = setInterval(function(){
    i++;
    console.log("i ",i);
    if(i===5)
        clearInterval(x);
},300);


// altta bir problem vardı ve nasıl çözebileceğimizi tartıştık

var async = require('async');
var fs = require('fs');

var kontrolEt = function(stats){
    console.log("suan eleman sayisi:", stats.length);
    if(stats.length === 3){
        console.log("adamin dibisin");
    } else {
        console.log("sie liseli");
    }
}



async.map(['asd1.txt','asd2.txt','asd3xxx.txt'], fs.stat, function(err, results){
    if(err){
        return console.log(err);
    }
    kontrolEt(results);
});








