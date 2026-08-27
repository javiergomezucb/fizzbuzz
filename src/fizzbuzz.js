function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    }
    
     if (num % 5 === 0 ) {
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

