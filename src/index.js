document.getElementById('calculateButton').addEventListener('click', calculateTriangleTypes)

function calculateTriangleTypes(event) {
    event.preventDefault()
    let sideA = document.getElementById('sideA').value
    let sideB = document.getElementById('sideB').value
    let sideC = document.getElementById('sideC').value

    if (isInputValid([sideA, sideB, sideC], 'Please enter a number of length of side', '', true)) {
        if (isInputValid([sideA, sideB, sideC], 'The length of side', ' must be greater than 0', false)) {
            if (isTriangle(sideA, sideB, sideC)) {
                const triangleType = getTriangleType(sideA, sideB, sideC)
                document.getElementById('result').innerHTML = `${triangleType} Triangle`
            } else {
                document.getElementById('result').innerHTML = 'The inputs provided cannot make a triangle.'
            }
        }
    }
}

function isInputValid(sides, start_string, end_string, mode) {
    // mode = true -> isInput, mode = false -> isNumber
    console.log(sides)
    let output = start_string
    for (let i=0;i<sides.length;i++) {
        if ((sides[i] == '' && mode) || (isNaN(parseFloat(sides[i])) && !mode)) {
            output += ` ${i+1}`
        }
    }
    if (output != start_string) {
        output += end_string
        document.getElementById('result').innerHTML = output
        return false
    }
    return true
}

function isTriangle(a, b, c) {
    return a + b > c && b + c > a && a + c > b
}

function getTriangleType(a, b, c) {
    let [a_square, b_square, c_square] = [Math.pow(a,2), Math.pow(b,2), Math.pow(c,2)]
    if (a === b && b === c) {
        return 'Equilateral'
    } else if (a_square + b_square === c_square || a_square + c_square === b_square || b_square + c_square === a_square) {
        return 'Right'
    } else if (a === b || b === c || a === c) {
        return 'Isosceles'
    } else {
        return 'Scalene'
    }
}