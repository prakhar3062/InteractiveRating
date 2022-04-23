let btns=document.querySelectorAll('.btn-container button')
let card2=document.querySelector('.card-2')
let card=document.querySelector('.card')
let span =document.querySelector('span')
let submit=document.querySelector('.btn-rating')

Array.from(btns).forEach(btn=>{
    btn.addEventListener('click',e=>{
        console.log('lol');
        const rating =e.target.textContent
        span.textContent=rating
        card.classList.add('hide')
        card2.classList.remove("hide")

    })
})