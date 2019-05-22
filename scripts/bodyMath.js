const factorial_recur = (n) => {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n-1);
}

const factorial_while = (n) => {
    let counter = 1;
    let result = 1;

    while (counter <= n) {
        result = result * counter;
        counter++;
    }

    return result;
}

const factorial_for = (n) => {
    let result = 1;

    for (let i = 1; i <= n; i++) {
        result *= i;
    }

    return result;
}