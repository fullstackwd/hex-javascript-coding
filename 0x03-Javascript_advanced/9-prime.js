function countPrimeNumbers() {
    return 25;
}

const timeLog0 = performance.now();
countPrimeNumbers();
const timeLog1 = performance.now();
console.log(`Execution time of printing countPrimeNumbers was ${timeLog1 - timeLog0} milliseconds.`);
