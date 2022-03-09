const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.keyContent
        const displayNum = display.textContent 

        if (!action) {
            if (displayedNum === "0") {
                display.textContent = keyContent
            } else {
                display.textContent = displayedNum + keyContent
            }
        }
        if (!action) {
            if (action === "decimal") {
                display.textContent = displayedNum + '.'
        }
        

        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            key.classList.add('is-depressed')
            // add custom attribute
            calculator.dataset.previousKeyType = 'operator'
            console.log('operator key!')
        }

        if (action === 'decimal') {
            console.log('decimal key!')
        }

        if (action === 'clear') {
            console.log('clear key!')
        }

        if (action === 'calculate') {
            console.log('equal key!')
        }

        //removes .is-depressed class from all keys
        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'))
    }
})

