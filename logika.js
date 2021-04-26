var x = [1, 1, 1, 1, 2, 2]; //test niz

function mojNizMax(niz){ //argument je niz, izbacice max
    return Math.max.apply(null,niz);
}

function mojNizMin(niz){ //argument je niz, izbacice min
    return Math.min.apply(null,niz);
}

function sortirajRedom(niz){ //argument je niz, sortirace ga od najmanjeg ka najvecem
    niz.sort(function(a,b){
        return a-b
    });
}

function sortirajUnazad(niz){ //argument je niz, sortirace ga od najveceg ka najmanjem
    niz.sort(function(a,b){
        return b-a
    });
}

function saberiNiz(niz){    // sabira niz
    var y = 0;
    var i;
    for (i = 0; i < niz.length; i++) {
      y += niz[i];
    }
    return y;
}

function izracunajMax(niz){ // uzima 5 najvecih kocki od 6 i sabira ih
    sortirajUnazad(niz);
    niz.pop();
    return saberiNiz(niz);
}

function izracunajMin(niz){   // uzima 5 najmanjih kocki od 6 i sabira ih
    sortirajRedom(niz);
    niz.pop();
    return saberiNiz(niz);
}

function saberiOdredjeniBroj(niz,broj){  // sabira npr sve dvojke u nizu 
    let zbir = 0;
    for (i = 0; i < niz.length; i++) {
        if(niz[i] === broj){
            zbir = zbir + niz[i];
        }
      }
    return zbir;
}

let kocka = {
    kockaIme : "kockaJedan",
    kockaVrednost : 5,
    baciKockuJedan: function() {
        return this.kockaVrednost;
    } 
}

console.log(kocka.baciKockuJedan());
