document.addEventListener('DOMContentLoaded', () => {
    const noResult =  document.querySelector('div.no-result');
    const searchBtn = document.querySelector('button.search-btn');
    const searchInput = document.querySelector('input.form-control')
    searchInput.addEventListener('keyup', (e) => {
        e.preventDefault()
        const list = document.querySelectorAll('div.items ul')
        list.forEach(ul => {
            const listItems = ul.querySelectorAll('li');
            listItems.forEach(li => {
                const a =  li.querySelectorAll('a')[0].textContent.toLowerCase()
                const item = e.target.value.toLowerCase();
                if(a.indexOf(item) != -1){
                    li.style.display = 'block'
                    noResult.style.display = 'none'
                }else{
                    li.style.display = 'none'
                    noResult.style.display = 'block'
                }
            })
        })
    })

    const radio = document.querySelectorAll('div input[type="radio"]')
    radio.forEach(rad => {
        console.log(rad.value)
        rad.onclick = (e) => {
            if(e.target.value == 'on'){
                console.log(e.target.nextElementSibling.textContent, e.target.value)
            }
        }
    })
})