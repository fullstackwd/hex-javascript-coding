let globalVariable = 'Welcome';

function outer() {
    alert(globalVariable);

    let course = 'Holberton';

    function inner() {
        alert(globalVariable.concat(' ', course));

        let exclamation = '!';

        function inception() {
            alert(globalVariable.concat(' ', course, exclamation));
        }

        inception();
    }

    inner();
}

outer();