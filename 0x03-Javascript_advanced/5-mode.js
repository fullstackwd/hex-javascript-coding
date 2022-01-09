function changeMode(size, weight, transform, background, color) {
}

function main() {
    let spooky = changeMode(9, bold, uppercase, pink, green);
    let darkMode = changeMode(12, bold, capitalize, black, white);
    let screamMode = changeMode(12, normal, lowercase, white, black);
    let p = document.body.createElement('p');
    p.innerHTML('Welcome Holberton!')
    
}

main();
