function sum(arr) {

    var summa = 0;

    arr.forEach(function (e) {
        summa += e;
    })

    return summa;

}

export { sum };