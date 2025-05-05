const eventBtn = document.querySelector('#eventBtn');


eventBtn.addEventListener('click', () => {

    const cardSection = document.createElement('section');

    const inputs = document.querySelectorAll('input');
    
    inputs.forEach((input) => {
        const h1 = document.createElement('h1');
        h1.innerText = input.value;
        cardSection.appendChild(h1);
        input.value = ''
    })

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'remover'
    removeBtn.style.marginLeft = '10px'

    removeBtn.addEventListener('click', () => {
        document.body.removeChild(cardSection)
    })

    cardSection.appendChild(removeBtn)

    document.body.appendChild(cardSection)

})
