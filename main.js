import PromptSync from 'prompt-sync'

class Calculator {
    constructor() {
        console.log('Calculator initialized! Press CTRL ^ C to exit.')

        this.input = PromptSync({ sigint: true })

        while (true) {
            this.handleUserInput()
        }
    }

    handleUserInput() {

        const operation = this.input('> ')
        const [n1, operator, n2] = operation.split(' ')

        /*
            * Even if the user typed a number
            * the input get the operation value as a string
            * the most accurate way to check whether the value is a number or not, is using Regex
            * isNumber() gets a parameter, and return true if it's a number
        */

        if (this.isNumber(n1) && this.isNumber(n2)) {
            const possibleOperators = ['+', '-', '*', '/']

            if (possibleOperators.includes(operator)) {
                const result = this.handleOperation(Number(n1), Number(n2), operator)
                return console.log(`${operation} = ${result}`)
            }

            return console.log('Invalid Operator')
        }
        return console.log('Invalid Number')
    }

    isNumber(n = 0) {
        if (/^[0-9]/.test(n)) return true

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