const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const button3 = document.querySelector(".button3");
const button4 = document.querySelector(".button4");
const dissmiss1 = document.querySelector(".dissmiss1");
const dissmiss2 = document.querySelector(".dissmiss2");
const dissmiss3 = document.querySelector(".dissmiss3");
const dissmiss4 = document.querySelector(".dissmiss4");
const minus1 = document.querySelector(".minus1")
const minus2 = document.querySelector(".minus2")
const minus3 = document.querySelector(".minus3")
const minus4 = document.querySelector(".minus4")


button1.addEventListener('click',function(e){
    // dissmiss1.classList.toggle('hidden');
    dissmiss1.classList.remove('hidden')
    minus1.classList.remove('hidden')
    button1.classList.add('hidden')

});
minus1.addEventListener('click',function(e){
    minus1.classList.add('hidden')
    button1.classList.remove('hidden')
    dissmiss1.classList.add('hidden')
})


button2.addEventListener('click',function(e){
    // dissmiss1.classList.toggle('hidden');
    dissmiss2.classList.remove('hidden')
    minus2.classList.remove('hidden')
    button2.classList.add('hidden')

});

minus2.addEventListener('click',function(e){
    minus2.classList.add('hidden')
    button2.classList.remove('hidden')
    dissmiss2.classList.add('hidden')
})



button3.addEventListener('click',function(e){
    // dissmiss1.classList.toggle('hidden');
    dissmiss3.classList.remove('hidden')
    minus3.classList.remove('hidden')
    button3.classList.add('hidden')

});
minus3.addEventListener('click',function(e){
    minus3.classList.add('hidden')
    button3.classList.remove('hidden')
    dissmiss3.classList.add('hidden')
})



button4.addEventListener('click',function(e){
    // dissmiss1.classList.toggle('hidden');
    dissmiss4.classList.remove('hidden')
    minus4.classList.remove('hidden')
    button4.classList.add('hidden')

});
minus4.addEventListener('click',function(e){
    minus4.classList.add('hidden')
    button4.classList.remove('hidden')
    dissmiss4.classList.add('hidden')
})
