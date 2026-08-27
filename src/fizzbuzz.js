function fizzbuzz(num) {
     if (num === 5) {
        return "buzz";
    }

    if (num % 3 === 0) {
        return "fizz";
    }
    else {
        return num +"" ;
    }
}

export default fizzbuzz;

