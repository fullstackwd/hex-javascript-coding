setTimeout(function() {
    console.log(`Execution time of printing countPrimeNumbers was ${timeLog1 - timeLog0} milliseconds.`);
}, 0);

function countPrimeNumbers() {
    return 25;
}

const timeLog0 = performance.now();
for (let i = 0; i < 100; i++){
    countPrimeNumbers();
}
const timeLog1 = performance.now();
