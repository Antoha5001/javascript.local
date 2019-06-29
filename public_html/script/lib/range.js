function range(start, end, step) {

    var step = step || 1;

    console.log(step);

    var range = [];

    if (start < end){
        for (var i = start; i <= end; i+= step){

            range.push(i);

        }
    } else {

        for (var i = start; i >= end; i-= step){

            range.push(i);

        }

    }

    return range;

}

export { range };