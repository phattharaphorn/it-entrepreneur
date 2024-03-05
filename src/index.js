document.getElementById('calculateButton').addEventListener('click', calculateTriangleTypes);

function calculateTriangleTypes(event) {
    event.preventDefault();
    let sideA = parseFloat(document.getElementById('sideA').value);
    let sideB = parseFloat(document.getElementById('sideB').value);
    let sideC = parseFloat(document.getElementById('sideC').value);

    if (isTriangle(sideA, sideB, sideC)) {
        const triangleType = getTriangleType(sideA, sideB, sideC);
        document.getElementById('result').innerHTML = `${triangleType} Triangle`;
    } else {
        document.getElementById('result').innerHTML = 'Invalid triangle. Please check the side lengths.';
    }
}

function isTriangle(a, b, c) {
    return a + b > c && b + c > a && a + c > b;
}

function getTriangleType(a, b, c) {
    let [a_square, b_square, c_square] = [Math.pow(a,2), Math.pow(b,2), Math.pow(c,2)]
    if (a === b && b === c) {
        return 'Equilateral';
    } else if (a_square + b_square === c_square || a_square + c_square === b_square || b_square + c_square === a_square) {
        return 'Right'
    } else if (a === b || b === c || a === c) {
        return 'Isosceles';
    } else {
        return 'Scalene';
    }
}