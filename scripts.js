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
]

const Transaction = {

}

const DOM = {
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)
    }

    innerHTMLTransaction(){
        const html = `                   
                        <td class="description">Luz</td>
                        <td class="expense">- R$ 500,00</td>
                        <td class="date">23/01/2021</td>            
                        <td>
                            <img src="./assets/minus.svg" alt="Remover transação">
                        </td>                                               `
    }
}