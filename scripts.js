const Modal = {
    open() {
        document
        .querySelector('.modal-overlay')    
        .classList.add('active')
    },
    close(){
        document
        .querySelector('.modal-overlay')    
        .classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000, // vale 500.00, ele colocou "desformatado"
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Criação Website',
        amount: 500000, // vale 500.00, ele colocou "desformatado"
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000, // vale 500.00, ele colocou "desformatado"
        date: '23/01/2021'
    },
    {
        id: 4,
        description: 'APP',
        amount: 23000, // vale 500.00, ele colocou "desformatado"
        date: '24/01/2021'
    },
]
const DOM = {
            transactionsContainer: document.querySelector('#data-table tbody'),

            addTransaction(transaction, index){
            const tr = document.createElement('tr')
            tr.innerHTML = DOM.innerHTMLTransaction(transaction)

            DOM.transactionsContainer.appendChild(tr)
        },
        innerHTMLTransaction(transaction){
            const CSSclass = transaction.amount > 0 ? "income" : "expense"

            const html = `
                            <td class="description">${transaction.description}</td>
                            <td class="${CSSclass}">${transaction.amount}</td>
                            <td class="date">${transaction.date}</td>            
                            <td>
                                <img src="./assets/minus.svg" alt="Remover transação">
                            </td>            
                        `
            return html
    }
}
// DOM.addTransaction(transactions[0])
transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})
