const toggle = document.getElementById('toggle')
const open = document.getElementById('open')
const modal = document.getElementById('modal')
const close = document.getElementById('close')

// Nav,Toggle에서 이벤트 객체를 제외하고 클릭했을때 nav,toggle이 꺼지는걸 방지
function closeNavbar(e){
    if(
        document.body.classList.contains('show-nav') && 
        e.target !== toggle &&
        !toggle.contains(e.target) &&
        e.target !== navbar &&
        !navbar.contains(e.target)
    ) {
        document.body.classList.toggle('show-nav')
        document.body.removeEventListener('click',closeNavbar)
    } else if (!document.body.classList.contains('show-nav')) {
        document.body.removeEventListener('click', closeNavbar)
    }
}

// Nav 토글
toggle.addEventListener('click', ()=>{
    document.body.classList.toggle('show-nav')
    document.body.addEventListener('click',closeNavbar)
})

// Modal 보여주기
open.addEventListener('click', ()=>{
    modal.classList.add('show-modal')
})

// Modal 숨기기
close.addEventListener('click', ()=>{
    modal.classList.remove('show-modal')
})

// 다른 이벤트시 Modal 사라지기 (기본적으로 true)
window.addEventListener('click', e=>{
    e.target == modal ? modal.classList.remove('show-modal') : false
})

