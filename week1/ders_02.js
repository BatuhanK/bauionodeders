function topla(sayi_1,sayi_2){
    return sayi_1 + sayi_2;
}
var topla_2 = function(sayi_1, sayi_2){
    return sayi_1 + sayi_2;
}

var topla_3 = function(sayi_1,sayi_2,bitinceCalistir){
    var toplam = sayi_1+sayi_2;
    bitinceCalistir(toplam);
}

topla_3(3,5,function(toplam){
    console.log(toplam);
})

var cihanIckiIcebilirMi = function(yas,callback){
    if(yas>21){
        return callback(null,'icebilir');
    } else {
        return callback(new Error('icemez'),null);
    }
}


cihanIckiIcebilirMi(23,function(hata,sonuc){
    if(hata){
        console.log(hata);
    } else {
        console.log(sonuc);
    }
});



