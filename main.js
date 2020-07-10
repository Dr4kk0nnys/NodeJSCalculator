import readline from 'readline'


class Calculator {
    constructor() {
        console.log('Calculator initialized!')

        // set the input
        this.input = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })

        this.handleUserInput()
    }

    handleUserInput() {
        this.input.question('> ', operation => {
            const sanitizedOperation = operation.split(' ')
            const [n1, operator, n2] = sanitizedOperation

            /*
                * Even if the user typed a number
                * the input.question get the operation value as a string
                * the most accurate way to check whether the value is a number or not, is using Regex
                * isNumber() gets a parameter, and return true if it's a number
            */
            if (this.isNumber(n1) && this.isNumber(n2)) {
                const possibleOperators = ['+', '-', '*', '/']

                if (possibleOperators.includes(operator)) {
                    const value = this.handleOperation(n1, n2, operator)
                    console.log(`${operation} = ${value}`)
                } else {
                    console.log('Invalid Operator')
                }
            }

            this.input.close()
        })
    }

    isNumber(n = 0) {
        if (/^\d+$/.test(n)) return true

        return false
    }

    handleOperation(n1 = 1, n2 = 1, operation = '+') {
        switch (operation) {
            case '+': return n1 + n2
            case '-': return n1 - n2
            case '*': return n1 * n2
            case '/': return n1 / n2
        }
    }
}

new Calculator()