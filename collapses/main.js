$(document).ready(() => {
    $('button.collapse-handle').click(() =>{
        $('div.collapsable-content').toggleClass('collapse');
        $('span.carret').toggleClass('carret-toggle');
        console.log('Yes')
    })
  })

//   const collapseBtn = document.querySelector('button.collapse-handle');
// collapseBtn.addEventListener('click', () => {
//     const collapseContent = document.querySelector('div.collapsable-content');
//     collapseContent.classList.toggle('collapse')
//     console.log(collapseContent)
// })
