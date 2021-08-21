//ham_menu
btnHamOpen.addEventListener('click',function(){
    hamMenu.classList.add('on');
})
btnHamClose.addEventListener('click',function(){
    hamMenu.classList.remove('on');
})

//subContent
subContent.addEventListener('click',function(){
    subContentBox.classList.toggle('on');
})