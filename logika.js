var x = [5, 4, 3, 1, 2, 2];

function mojNizMax(niz){
    return Math.max.apply(null,niz);
}

console.log(mojNizMax(x));