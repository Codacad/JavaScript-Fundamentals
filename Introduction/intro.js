const scrolled = document.querySelector('div.scroll');
scrolled.style.top = '0px';
window.addEventListener('scroll', () => {
    const scrolled = document.querySelector('div.scroll');
    scrolled.innerHTML = `<div>${window.scrollY}</div>`;
    scrolled.innerHTML += `<div>${window.innerHeight}</div>`;
    scrolled.innerHTML += `<div>${window.innerWidth}</div>`
    scrolled.style.width = window.scrollY+'px';

    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    scrolled.innerHTML += `<div>${scrollable}</div>`
    
    if(scrollable === Math.ceil(window.scrollY)){
        scrolled.innerHTML += `<div>You have scrolled to the bottom</div>`;
    }

})